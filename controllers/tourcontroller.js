const fs = require('fs');
const Tour = require('./..');
const AppError = require('./../utils/appError');
const catchAsync = require('./../utils/catchAsync');
const mongoose = require('mongoose'); // Added mongoose import
const { validator } = require('validator'); // Added validator import
const slugify = require('slugify'); // Added slugify import

const tourSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'A tour must have a name'],
    unique: true,
    trim: true,
    maxlength: [40, 'A tour name must have less or equal than 40 characters'],
    minlength: [10, 'A tour name must have more or equal than 10 characters'],
    validate: [validator.isAlpha, 'Tour name must only contain characters']
  },
  slug: String,
  duration: {
    type: Number,
    required: [true, 'A tour must have a duration']
  },
  maxGroupSize: {
    type: Number,
    required: [true, 'A tour must have a group size']
  },
  difficulty: {
    type: String,
    required: [true, 'A tour must have a difficulty'],
    enum: {
      values: ['easy', 'medium', 'difficult'],
      message: 'Difficulty is either: easy, medium, difficult'
    }
  }
});

//const Tour = mongoose.model('Tour', tourSchema);

// DOCUMENT MIDDLEWARE: run before .save() and .create()
tourSchema.pre('save', function(next) {
  this.slug = slugify(this.name, { lower: true });
  next();
});

// QUERY MIDDLEWARE
tourSchema.pre(/^find/, function(next) {
  next();
});

tourSchema.post('save', function(doc, next) {
  console.log(doc);
  next();
});

module.exports = Tour;

const testTour = new Tour({
  name: 'The forest Hiker',
  rating: 4.7,
  price: 497
});

testTour.save().then(doc => {
  console.log(doc);
}).catch(err => {
  console.log('Error:', err);
});

exports.aliasTopTours = (req, res, next) => {
  req.query.limit = '5';
  req.query.sort = 'name,price,ratingsAverage,summary,difficulty';
  next();
};

class APIFeatures {
  constructor(query, queryString) {
    this.query = query;
    this.queryString = queryString;
  }

  filter() {
    const queryObj = { ...this.queryString };
    const excludeFields = ['page', 'sort', 'limit', 'fields'];
    excludeFields.forEach(el => delete queryObj[el]);
    let queryStr = JSON.stringify(queryObj);
    queryStr = queryStr.replace(/\b{gte[gt]lte}lt\b/g, match => `${match}`);
    this.query = this.query.find(JSON.parse(queryStr));
    return this;
  }

  sort() {
    if (this.queryString.sort) {
      const sortBy = this.queryString.sort.split(',').join('');
      this.query = this.query.sort(sortBy);
    } else {
      this.query = this.query.sort('-createdAt');
    }
    return this;
  }

  limitfield() {
    if (this.queryString.fields) {
      const fields = this.queryString.fields.split(',').join(' ');
      this.query = this.query.select(fields);
    } else {
      this.query = this.query.select('__v');
    }
    return this;
  }

  async paginate() { // Changed 'paginates' to 'paginate' and added async keyword
    const page = this.req.query.page * 1 || 1;
    const limit = this.req.query.limit * 1 || 100;
    const skip = (page - 1) * limit;
    this.query = this.query.skip(skip).limit(limit);
    if (this.req.query.page) {
      const numTours = await Tour.countDocuments();
      if (skip >= numTours) throw new Error("This page doesn't exist");
    }
    return this;
  }
}

exports.getAllTours = async (req, res) => {
  try {
    const tour = await Tour.findById(req.params.id).populate('guides');
    res.status(200).json({
      status: 'success',
      data: tour
    });
  } catch (err) {
    // Handle errors here
    console.error(err);
    res.status(500).json({
      status: 'error',
      message: 'Internal server error'
    });
  }
};


exports.checkBody = (req, res, next, val) => {
  console.log(`Tour id is: ${val}`);
  if (!req.body.name || !req.body.price) {
    return res.status(400).json({
      status: 'fail',
      message: 'missing name or price'
    });
  }
  next();
};

exports.updateTour = catchAsync(async (req, res, next) => {
  try {
    const tour = await Tour.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    });
    if (!tour) {
      return next(new AppError('No tour found with that ID', 404));
    }
    res.status(200).json({
      status: 'success',
      data: {
        tour: tour
      }
    });
  } catch (err) {
    next(err); // Pass error to error middleware
  }
});

exports.createTour = catchAsync(async (req, res, next) => { // Changed 'fn' to 'catchAsync' and added 'async' keyword
  try {
    res.status(201).json({
      status: 'success',
      data: {
        tour: 'Created tour here'
      }
    });
  } catch (err) {
    next(err); // Pass error to error middleware
  }
});

exports.deleteTour = catchAsync(async (req, res, next) => {
  const tour = await Tour.findByIdAndDelete(req.params.id);
  if (!tour) {
    return next(new AppError('No tour found with that ID', 404));
  }
  res.status(204).json({
    status: 'success',
    data: null
  });
});

exports.getTourStats = async (req, res) => {
  try {
    const stats = await Tour.aggregate([
      {
        $match: { ratingsAverage: { $gte: 4.5 } }
      },
      {
        $group: {
          _id: null,
          numTours: { $sum: 1 },
          numRatings: { $sum: '$ratingQuantity' },
          avgRating: { $avg: '$ratingAverage' },
          Price: { $avg: '$price' },
          minPrice: { $min: '$price' },
          maxPrice: { $max: '$price' }
        }
      },
      {
        $sort: { avgPrice: 1 }
      }
    ]);
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err.message
    });
  }
};

exports.getMonthlyPlan = async (req, res) => {
  try {
    const year = req.params.year * 1; //2021
    const plan = await Tour.aggregate([
      {
        $unwind: '$starDates'
      },
      {
        $match: {
          startDates: {
            $gte: new Date(`${year}-01-01`),
            $lte: new Date(`${year}-12-31`)
          }
        }
      },
      {
        $group: {
          _id: { $month: '$startDates' },
          numTourStarts: { $sum: 1 },
          tours: { $push: '$name' }
        }
      },
      {
        $addFields: { month: '$_id' }
      },
      {
        $project: {
          _id: 0
        }
      },
      {
        $sort: {
          numTourStarts: -1
        }
      },
      {
        $limit: 12
      }
    ]);
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err.message
    });
  }
};
