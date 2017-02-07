//Load express and path
var path = require("path"); //npm install --save path beforehand on terminal
var express = require("express");  //npm install --save express beforehand on terminal

//Create an instance of express app
var app = express();

//process.argv //process is a special object in node, the current node process
//argv is an array

//print out the elements in process.argv
//for (var i = 0; i < process.argv.length; i++)
//    console.log("argv[%d]=%s (type=%s)", i 
//       ,process.argv[i], typeof process.argv[i]);

//convert string into integer
var strPort=process.argv[2];
var port = parseInt(strPort);

//console.log("strPort: type=%s", typeof strPort)
//console.log("Port: type=%s", port, typeof port)

//------------------------------------------------

//define static port
app.use(express.static(__dirname+"/public"));

app.use(function(req,resp){
    resp.status(404);
    resp.type("text/html"); //representation
    resp.send("<h1>File not file</h1><p>The current time is " + new Date()+"</p>");
});



//-------------------------------------------------

//Configure port
//app.set("port",
//    parseInt(process.argv[2])|| 3000);

//another less pro way of writing
//var port=parseInt(process.argv[2]) || 3000;

//non pro way of writing
//var strPort = process.argv[2];
//if (strPort)
//    port = parseInt(strPort);
//else    
//    port = 3000

//    console.log("port: %s, type:%s", port, typeof port)

//Configure port based on evironment

//console.log(">> port: %d",process.env.APP_PORT) //set APP_PORT 7000 on terminal to activate

app.set("port",  parseInt(process.env.APP_PORT) || parseInt(process.argv[2]) || 3000);

console.log(">> port: %d:", app.get("port"), typeof port)

//    console.log("port: %s, type:%s", port, typeof port)

app.listen(app.get("port"),function(){
    console.log("Application is listening on port" + app.get("port"))
});

//dynamically changing images outside repo
app.use(express.static(__dirname+"/public")); 
app.use("/assets", express.static(path.join(__dirname+"/public"))); 
