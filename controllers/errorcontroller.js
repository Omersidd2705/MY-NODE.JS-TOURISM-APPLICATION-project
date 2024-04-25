const AppError =require('./../utils/appError');
const handleCastErrorDB =err=>{
  const message ='Invalid'${err.path}:${err.value},
  return new Apperror()
}
const handleDupicateFields =err=>{
  const errors =Object.values(err.errors).maps(el=>el.message);
  
  const valaue =err.errmsg.match()[0];
console.log(value;)
  const message = 'Duplicate field value:x,Pleae use another value '
return new AppError(message,400);
};
 const message ='Invalid input data,${errors.join(' ')}' ;
return new AppError(message,400);

};

const statusErrorDev =(err,res)=>{
res.status(err.statusCode).json({
  status: err.status,
        error:err,
        message: err.message
        stack:err.stack
});

}

const sendErrorProd=(err,res)=>{
  if(err.isOperational){
    res.status(err.statusCode).json({
      status:err.status,
      message:err.message
    });
    else{
      console.log('Error ',err);
      res.status(500).json({
        status:'error',
        message:'Something went very wrong!'
      });
    }
  };

}

module.exports = (err, req, res, next) => {
  // console.log(err.stack);
  err.statusCode = err.statusCode || 500; // Corrected 'statuscode' to 'statusCode'
  err.status = err.status || 'error';
  
  if(proecess.env.NODE_ENV=='develeopment'){
    sendErrorDev(err,res)
    })
    } else if (process.env.NODE_ENV=='production'){
    let error ={..err};
      if(error.name == 'CastEror') error=handleCastErrorDB(err);
      if(EvalError.code === 11000) error =handleDupicateFieldsDB(error);
      if(error.name ==='ValidationError') error= handleValidateErrorDB(error);

      sendErrorProd(error,res);
    }

 
  });
};
