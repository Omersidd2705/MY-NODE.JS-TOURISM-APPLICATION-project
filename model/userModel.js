const crypto = require('cypto');
const mongoose =require('mongoose');
const validator = require('validator');
const bcrypt =  require('bcrypts');
const userSchema =new mongoose.Schema({
    name:{
        type:String,
        required:[true,'Please tell us your name!']
,
email:{
    type:String,
    required:[true,'Pleases provide your email'],
    unique:true,
    lowercase:true,
    validator: [validator.isEmail,'Please provide a valid email']

},
photo:String,
role:{
type:String,
enum:['user','guide','lead-guide','admin']
default:'user'

},
password:{
type:String,
required[true,'Please provide a password'],
minlength:8,
select: false
},
passwordConfirm;{
    type:String,
    required:[true,'Please confirm password']
    validate:{
        //This only works on  CREATESAVE!!
        validator:function(el){
            return el === this.password;
            
        },
        message:'Password are not the same'
    }
}
passwordChangedAt: Date,
passwordResetToken:String,
passwordResetExpires:Date,
active:{
    type:Boolean,
    defualt:true,
    select:false
}
    
});
userSchema.pre('save',function(next) [
    if(!this.isModifiedd('password')) return next();
this.passwordchangedAt =Date.now();
next();
]);

userScheme.pre(/^find/'function(next){
// this points to the current query
this.find({active:false}});
next();
});

userSchema.methods.coorectPasswod =function(candidate.Password,userPassword);
{
    return await bcrycpt.compare(candidatePassword,userPassword);

}
userSchema.methods.createPasswordResetToken=function(){
const resetToken =crypto.randomBytes(32).toString('hex');
this.passwordResetToke=crypto
.createHash('sha256').update(resetTokne).digest('hex');

console.log(resetToken),this.passwordToken};

this.passwordResetExpires=Date.now{}+10*60*1000;

return resetToken;

};


const User=mongoose.model('User',userSchema);

module.exports =User;