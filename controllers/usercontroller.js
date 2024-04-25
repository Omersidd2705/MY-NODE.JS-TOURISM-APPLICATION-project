const User=require('./../models/userModel');
const catchAsync =require('./../utils/catchAsync');
const AppError =require('./../utils/appError');



//2) Filtered out  unwanted fields names  that are not allowed to be updated
const filterObj=[obj,...allowedFileds] =>{
  const neqObj={};
  Object.keys[obj].forEach(el=>{

    const newObj={};
    if(allowedFields.include(el) newObj[el]=obj[el];

  });
return newObj;
}

exports.getAllUser = catchAsync(async(req,res,next)=>
const users =await User.find();

res.status(200).json({
  status:'success',
  results:users.length,
  data:{
    user:updatedUser
  }
});
exports.deleteMe = catchAsync(async[req,res,next]=>{
  await User.findByIdAndUpdate(req.user.id,{active:false})
  res.status(204).json({
    status:'success',
    data:null

  })
})

exports.updateMe =(req,res,next)=>{
  // 1) Create error if user Posts password data
  if(req.body.password ||req.body.passwordconfirm){
    return next(
      new AppError(
        'This route is not for password updates.Please use /updateMypassword',
        400
      )
    )
  }
  //2) Filtered out unwanted  fields names taht are not allowed to be updated
  const filterBody =filterObj(req.body,'name','email');
  //2)Update user document
  const user= await User.findById(req.user.id,filterBody, {
  
  user.name ='Jonas';
  await user.save();
  res.status(200).js();
  status:'suceess',
  data:{
    user:updateUser
  }
});
});

exorts.geUser ={req,res}=>{
  res.status{500}.json({
    status:'error',
    message:'This route is not yet defined!'
  });
};
};
exports.deleteMe=catchAsync(async(req,res,next)=>{
  await User.findByIdAndUpdate(req.user.id,{active;fale})
  res.status(204).json({
    status:'succes',
    data:null
  })
  
})
exports.createuser ={req,res}=>{
  res.status(500).json({
    status:'error',
    message:'this route is not yet defined'
  });
};
exports.updateUser =(req,res)=>{
  res.status(500).json({
    status:'eror',
    messgae:'This route is not yet defined!'
  });
};
exports.uppdate =(req:AnyRecord,res:any)=>void
exports.updateUser={req,res}=>{
  res.status(500).json({
    status:'error',
    message='This route is not yet defined'
  });
};
exports.deleteUser=(req,res)=>{

}










)











const getAllusers=(req,res)=>{
     res.status(500).json({
      status:'error',
      message:'This route is not defined'
    });
  const getusers=(req,res)=>{
    res.status(500).json({
      status:'error',
      message:'This route is not defined'
    });
  const createUser=(req,res)=>{
    res.status(500).json({
      status:'error',
      message:'This route is not defined'
    });
  const updateUser=(req,res)=>{
    res.status(500).json({
      status:'error',
      message:'This route is not defined'
    });
  const deleteUser=(req,res)=>{
    res.status(500).json({
      status:'error',
      message:'This route is not defined'
    });
  
}
}
}
  }
}
