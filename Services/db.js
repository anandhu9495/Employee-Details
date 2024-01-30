//node + mongoDB connection

//import mongoose

const mongoose=require('mongoose');

//connection string

mongoose.connect('mongodb://localhost:27017/EMSdetails')

// create modal
const employee = mongoose.model('employee',{
    id:String,
    name:String,
    age:String,
    designation:String,
    salary:String
})


module.exports={
    employee
}