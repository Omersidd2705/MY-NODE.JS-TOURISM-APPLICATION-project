const dotenv = require('dotenv');
const app = require('./app');

process.on('uncaughtexception',err=>
{console.log('UNCAUGHT EXCEPTION! 2705 shutting down...');
console.log(err.name,err.message);
server.close(()=>
{
  process.exit(1);

});

});
const mongoose = require('mongoose'); // Import mongoose module

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
  console.log(con.connections);
  console.log('DB connection succesful!');
});
mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false, // Fix typo in the option name
    useUnifiedTopology: true, // Add this option for the latest versions of mongoose
  })
  .then((con) => {
    console.log(con.connections);
    console.log('DB connection successful');
  })
  .catch((err) => console.error('DB connection failed:', err));
  const port = process.env.PORT || 3000;
  const server = app.listen(port, () => {
    console.log(`App running on port ${port}..`);
  });
  
  process.on('unhandledRejection', err => {
    console.log(err.name, err.message);
    console.log('UNHANDLED REJECTION. SHUTTING DOWN');
    server.close(() => {
      process.exit(1);
    });
  });
  
  console.log(x); // Assuming x is defined elsewhere in your code
  

// console.log(process.env);

// app.get('/', (req, res) => {
//   res.status(200).json({ message: 'Hello from the server side!', app: 'Natours' });
// });

// app.listen(port, () => {
//   console.log(`Server is running at http://localhost:${port}`);
// });
