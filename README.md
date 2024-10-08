# FULL STACK PROJECT
FEATURE
MONGOOSE AND PUG WITH EXTRA THINGS  API OF MAP BOX,STRIPE,SENDGRID EMAIL API SYSTEM)

>Authentication and Authorization

Sign up

Log in

Logout

Update

Reset password

User Profile

Update username, photo, email, password, and other information

User roles: regular user, admin, lead guide, guide

>Tour Management

Create tours (admin/lead guide)

View tours (all users)

Update tours (admin/lead guide)

Delete tours (admin/lead guide)

>Booking

Regular users can book tours (with payment)

Regular users cannot book the same tour twice

View booked tours (regular users)

View all bookings (admin/lead guide)

Delete bookings (admin/lead guide)

Create bookings manually (admin/lead guide, without payment)

Cannot create duplicate bookings for the same user (admin/lead guide)

Edit bookings (admin/lead guide)

>Reviews

Write reviews for booked tours (regular users)

View reviews for each tour (all users)

Edit and delete own reviews (regular users)

Cannot review the same tour twice (regular users)

Delete reviews (admin)

Favorite Tours

Add booked tours to favorites (regular users)

Remove tours from favorites (regular users)

Cannot add tour to favorites if already favorited (regular users)

>Credit Card Payment

https://github.com/lgope/Natours/assets/102612436/a1b1359b-7b37-4498-a2dc-6286051056bc



https://github.com/lgope/Natours/assets/102612436/69110424-a753-4519-9fbb-476074967209


TECH USED
Node.js Fundamentals:

<h1 align="center">
  <br>
  <a href="https://lakshman-natours.herokuapp.com/"><img src="https://github.com/lgope/Natours/blob/master/public/img/logo-green-round.png" alt="Natours" width="200"></a>
  <br>
  Natours
  <br>
</h1>

<h4 align="center">An awesome tour booking site built on top of <a href="https://nodejs.org/en/" target="_blank">NodeJS</a>.</h4>

 <p align="center">
 <a href="#deployed-version">Demo</a> •
  <a href="#key-features">Key Features</a> •
  <a href="#demonstration">Demonstration</a> •
  <a href="#how-to-use">How To Use</a> •
  <a href="#api-usage">API Usage</a> •
  <a href="#deployment">Deployment</a> •
  <a href="#build-with">Build With</a> •
  <a href="#to-do">To-do</a> •
  <a href="#installation">Installation</a> • 
  <a href="#known-bugs">Known Bugs</a> • 
  <a href="#future-updates">Future Updates</a> • 
  <a href="#acknowledgement">Acknowledgement</a>
</p>

## Key Features 📝

- Authentication and Authorization
  - Sign up, Log in, Logout, Update, and reset password.
- User profile
  - Update username, photo, email, password, and other information
  - A user can be either a regular user or an admin or a lead guide or a guide.
  - When a user signs up, that user by default regular user.
- Tour
  - Manage booking, check tour map, check users' reviews and rating
  - Tours can be created by an admin user or a lead-guide.
  - Tours can be seen by every user.
  - Tours can be updated by an admin user or a lead guide.
  - Tours can be deleted by an admin user or a lead-guide.
- Bookings
  - Only regular users can book tours (make a payment).
  - Regular users can not book the same tour twice.
  - Regular users can see all the tours they have booked.
  - An admin user or a lead guide can see every booking on the app.
  - An admin user or a lead guide can delete any booking.
  - An admin user or a lead guide can create a booking (manually, without payment).
  - An admin user or a lead guide can not create a booking for the same user twice.
  - An admin user or a lead guide can edit any booking.
- Reviews
  - Only regular users can write reviews for tours that they have booked.
  - All users can see the reviews of each tour.
  - Regular users can edit and delete their own reviews.
  - Regular users can not review the same tour twice.
  - An admin can delete any review.
- Favorite Tours
  - A regular user can add any of their booked tours to their list of favorite tours.
  - A regular user can remove a tour from their list of favorite tours.
  - A regular user can not add a tour to their list of favorite tours when it is already a favorite.
- Credit card Payment

## Demonstration 🖥️

#### Home Page :

![natoursHomePageonline-video-cutt](https://user-images.githubusercontent.com/58518192/72606801-7ebe0680-3949-11ea-8e88-613f022a64e5.gif)

#### Tour Details :

![tourOverviewonline-video-cutterc](https://user-images.githubusercontent.com/58518192/72606859-a0b78900-3949-11ea-8f0d-ef44c789957b.gif)

#### Payment Process :

![paymentprocess-1-ycnhrceamp4-7fW](https://user-images.githubusercontent.com/58518192/72606973-d9eff900-3949-11ea-9a2e-f84a6581bef3.gif)

#### Booked Tours :

![rsz_bookedtours](https://user-images.githubusercontent.com/58518192/72607747-6a7b0900-394b-11ea-8b9f-5330531ca2eb.png)

#### User Profile :

![rsz_userprofile](https://user-images.githubusercontent.com/58518192/72607635-44edff80-394b-11ea-8943-64c48f6f19aa.png)

#### Admin Profile :

![rsz_adminprofile](https://user-images.githubusercontent.com/58518192/72607648-4d463a80-394b-11ea-972f-a73160cfaa5b.png)

## How To Use 🤔

### Book a tour

- Login to the site
- Search for tours that you want to book
- Book a tour
- Proceed to the payment checkout page
- Enter the card details (Test Mood):
  ```
  - Card No. : 4242 4242 4242 4242
  - Expiry date: 02 / 22
  - CVV: 222
  ```
- Finished!

### Manage your booking

- Check the tour you have booked on the "Manage Booking" page in your user settings. You'll be automatically redirected to this
  page after you have completed the booking.

### Update your profile

- You can update your own username, profile photo, email, and password.

## API Usage

Before using the API, you need to set the variables in Postman depending on your environment (development or production). Simply add:

```
- {{URL}} with your hostname as value (Eg. http://127.0.0.1:3000 or http://www.example.com)
- {{password}} with your user password as value.
```

Check [Natours API Documentation](https://documenter.getpostman.com/view/8893042/SW7c37V6) for more info.

<b> API Features: </b>

Tours List 👉🏻 https://lgope-natours.onrender.com/api/v1/tours

Tours State 👉🏻 https://lgope-natours.onrender.com/api/v1/tours/tour-stats

Get Top 5 Cheap Tours 👉🏻 https://lgope-natours.onrender.com/api/v1/tours/top-5-cheap

Get Tours Within Radius 👉🏻 https://lgope-natours.onrender.com/api/v1/tours/tours-within/200/center/34.098453,-118.096327/unit/mi

## Deployment 🌍

The website is deployed with git into Heroku. Below are the steps taken:

```
git init
git add -A
git commit -m "Commit message"
heroku login
heroku create
heroku config:set CONFIG_KEY=CONFIG_VALUE
parcel build ./public/js/index.js --out-dir ./public/js --out-file bundle.js
git push heroku master
heroku open
```

You can also change your website URL by running this command:

```
heroku apps: rename natours-users
```

## Build With 🏗️

- [NodeJS](https://nodejs.org/en/) - JS runtime environment
- [Express](http://expressjs.com/) - The web framework used
- [Mongoose](https://mongoosejs.com/) - Object Data Modelling (ODM) library
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) - Cloud database service
- [Pug](https://pugjs.org/api/getting-started.html) - High performance template engine
- [JSON Web Token](https://jwt.io/) - Security token
- [ParcelJS](https://parceljs.org/) - Blazing fast, zero configuration web application bundler
- [Stripe](https://stripe.com/) - Online payment API and Making payments on the app.
- [Postman](https://www.getpostman.com/) - API testing
- [Mailtrap](https://mailtrap.io/) & [Sendgrid](https://sendgrid.com/) - Email delivery platform
- [Heroku](https://www.heroku.com/) - Cloud platform
- [Mapbox](https://www.mapbox.com/) - Displaying the different locations of each tour.

## To-do 🗒️

- Review and rating
  - Allow users to add a review directly at the website after they have taken a tour
- Booking
  - Prevent duplicate bookings after a user has booked that exact tour, implement favorite tours
- Advanced authentication features
  - Signup, confirm user email, log in with refresh token, two-factor authentication
- And More! There's always room for improvement!

