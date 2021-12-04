const express = require("express");
const app = express();
const http = require('http');
const expressServer = http.createServer(app)

//  -------> Create socket.io server
const {Server} = require("socket.io");
let io = new Server(expressServer);




io.on('connection', function(socket){
    // console.log("New User Connected");
    socket.on('chat', function(msgData){
        console.log(msgData);
    })
})


//-------> HTML file directory linked
app.get('/', function(req, res){
    res.sendFile(__dirname+"/index.html")
})


//-------> To run server
expressServer.listen(3000, function(){
    console.log("Server run @3000");
})
