// Setup empty JS object to act as endpoint for all routes
let projectData = {};

// Require Express to run server and routes
const express = require("express");

// Start up an instance of app
const app = express();

/* Middleware*/
const bodyParser = require("body-parser");
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const Cors = require("cors");
app.use(Cors());


// Initialize the main project folder
app.use(express.static('website'));


// Setup Server
const port = 8030;
 // spin up the server....with callback function to test server running.
 app.listen(port , ()=>{console.log(`***********    SERVER Is RUNNING ON localhost  {{ ${port} }}   ***********`)});
 // post request to save data in projectData{}

app.post("/addData",addData);
   function addData(req , res){
   projectData = (req.body)
   //console.log(projectData)      test 
   res.send(projectData)
}

// get request to  get the data we saved in projectData{} and display  it on client side ..
 
app.get("/all",(req,res)=>{
    res.send(projectData);
   // console.log(projectData);     test
})








