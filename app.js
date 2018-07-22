var express =  require('express');
var app = express();
var fs = require("fs");

app.get('/getUsers',function(req,res){
    fs.readFile(__dirname + "/"+ "user.json",'utf-8',function(eer,data){
    console.log(data);
    res.end(data);
    });
});

var server = app.listen(8081,function (){
    var host = server.address().address
    var port = server.address().port
    console.log("Application Run at http://%s:%s", host, port)
});