const mongoose = require('mongoose');


const connect = () =>{
   mongoose.set('strictQuery', false);
   console.log(process.env.MONGO_URL)
   mongoose.connect(`${process.env.MONGO_URL}`,  {
      useNewUrlParser: true,
      useUnifiedTopology: true
  }).then(()=>{
   console.log("database is connected");
  }).catch((err)=>{
      console.log(err)
   })
} 


module.exports = {connect}