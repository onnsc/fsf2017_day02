var path = require("path"); //npm install --save path beforehand on terminal
var express = require("express");  //npm install --save express beforehand on terminal

//Create an instance of express app
var app = express();

//URL request runs through several routes (specified below) to look for
//which route to use first depends on which folder holds more files to reduce no. of failure runs 
app.use(express.static(__dirname+"/public"));  //route
app.use(express.static(__dirname+"/images"));  //route



        app.use(function(req,resp){
            resp.status(404);
            resp.type("text/html");  

var asset=["asset0.jpg", "asset1.jpg", "asset2.jpg", "asset3.jpg", "asset4.jpg", "asset5.jpg"];
    for (i=0 ; i < asset.length ; i++) {    
        
        if (i=asset.length+1){
        return;
        }
        
            resp.send("<img src=" + asset[i] + ">");
           
}

})



// app.use("/images", express.static(path.join(__dirname+"/images")));


//app.use("/images", function(req,resp,next){
//    resp.status(404);
//    resp.type("text/html"); //representation
//    resp.send("/images/capture.jpg");
//});

//setting the port as a property of the app
//set defines the attribute e.g. 3000 for port
app.set("port",3000);
console.log("Port:"+app.get("port"));

//start the server on the specified port
//server is going to listen to the port
app.listen(app.get("port"),function(){
    console.log("Application is listening on port" + app.get("port"))
});


