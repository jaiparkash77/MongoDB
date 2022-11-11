// Connection MongoDB with NodeJS

const mongoose = require('mongoose');

// For older version (if error)
// mongoose.connect("mongodb://localhost:27017",{useNewUrlParser:true, useUnifiedTopology:true}).then(()=>{
//     console.log("Connected to MongoDB successfully");
// }).catch((err)=>{
//     console.log(err);
// })

//Step 1:- connection with DB
mongoose.connect("mongodb://localhost:27017/NodeJSwithMongoDB").then(()=>{
    console.log("Connected to MongoDB successfully");
}).catch((err)=>{
    console.log(err);
})

//Step 2:- Create Schema
const students = new mongoose.Schema({
    // name:{type:String, required:true}
    name: String,
    workout: Boolean,
    height:Number
})

//Step 3:- Create Model -> Model is like a collection
const Student = new mongoose.model("Student", students);

// Step 4:- Create Data/Document
const adder = async ()=>{
    // const ss = new Student({
    //     name: "Abhi",
    //     workout: true,
    //     height:5
    // })

    // await will return fullfilled or rejected
    //await ss.save();

    const ss = await Student.create({
        name: "Sanjay",
        workout: true,
        height:6
    })   

    console.log(ss)
    
}

adder();

//Step 5:- Find Document
const findDoc = async ()=>{
    // Find all documents
    // const ss = await Student.find();

    //find with operator where condition matches (eq = equal, gt = greater than, gte = greater than equal, lt= less than, lte= less that equal, ne = not equal, in = matches with array, nin= not matches with array)
    // logical operator (and,not,nor,or)
    const ss = await Student.find({height:{$eq:6}});
    console.log(ss)    
}

findDoc();
