const fs= require('fs');
const mongoose = require('mongoose'); // Import mongoose module
const dotenv=require('dotenv');
const Tour= require('./../../models/tourmodel')

dotenv.config({ path: './config.env' });
 
const DB = process.env.DATABASE.replace(
  'mynameisomer2705',
  process.env.DATABASE_PASSWORD
);
mongoose.connect(DB,{
useNewUrlParser:true,
useCreateIndex:true,
useFindAndModify:false
}).then(con=>{

  console.log('DB connection succesful!');
});
//read json file
const tours =  JSON.parse(fs.readFileSync('./tourrs-simple.json','utf-8'));
//import data into DB
const importData=async()=>{
    try{
await Tour.create(tours);
console.log('Data successfully loaded!') 
process.exit();
}catch(err){
        console.log(err);
    }
};
//DELETE ALL DATA FROM DB
const deleteData=async()=>
{
    try{
        await Tour.deletemany();
        console.log('Data successfully deleted');
        process.exit();

    }catch(err){
        console.log(err)
    }
};

if(process.argv[2]=='--import'){
    importData();
}
else if(process.arg[2]=='--delete'){
    deleteData();
}
console.log(process.argv);