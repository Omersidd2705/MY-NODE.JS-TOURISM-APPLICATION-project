const fs = require('fs');
const express=require('express')
const tourController = require('./../controllers/tourcontroller');


const router=express.Router();
router.param('id',(req,res,next,val)=>{
    console.log("Tour id is: ${val}");
    next();
})
router
.route('/top-5-cheap')
.get(tourController.alaistopTours.getAllTours);
router.route('/tour-stats').get(tourController.getTourStats);


// create a middleware
//check if body contains the name and price property
// if not , send back 400 (bad request)
//add it to the post handler stack

router
.route('/')
.get(tourcontroller.getAllTours)
.post(middleware,tourcontroller.createTour)

router
.route('/:id')
.get(tourcontroller.getTour)
.patch(tourcontroller.updateTour)
.delete(authcontroller.protect,
    // authcontroller.restrictTo('admin'),
     tourcontroller.deleteTour)

module.exports=router;