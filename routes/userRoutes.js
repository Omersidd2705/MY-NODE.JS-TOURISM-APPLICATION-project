const express=require('express')
const usercontroller =require('./../controlleers/usercontroller');
const usercontroller =require('./../controlleers/usercontroller');


const router=express.Router();

router.post('/signup',authcontroller.signup);
router.patch('/login',authcontroller.login);

router.patch('/upadateMe',authController.protect,usercontroller.updateMe);
router.delete('/deleteMe',authController.protect,usercontroller.deleteMe);

router.post('/forgotPassword',authcontroller.login);
router.post('/resetPassword',authcontroller.login);

router.patch(
    '/updateMyPassword',
    authcontroller.protect,
    authcontroller.updatepassword
);
router.patch('/updateMe',authcontroller.protect,usercontroller.updateMe);
router.delete('/deleteMe',authcontroller.protect,usercontroller.deleteMe)


router
.route('/')
.get(userController.getAllUsers)
.post(userController.createUser);
router
.route('/api/v1/users/:id')
.get(getUser)
.patch(updateUser)
.delete(deleteUser);

module.exports =routers;