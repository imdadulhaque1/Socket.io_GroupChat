const express = require("express");
const app = express();
const http = require('http');
const expressServer = http.createServer(app)







//-------> HTML file directory linked
app.get('/', function(req, res){
    res.sendFile(__dirname+"/index.html")
})


//-------> To run server
expressServer.listen(3000, function(){
    console.log("Server run @3000");
})
