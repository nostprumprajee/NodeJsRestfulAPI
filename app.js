var express =  require('express');
var app = express();
var fs = require("fs");
//GET method ดึงข้อมูล user มาทั้งหมด
app.get('/getUsers',function(req,res){
    fs.readFile(__dirname + "/"+ "user.json",'utf-8',function(eer,data){
    console.log(data);
    res.end(data);
    });
});
//ดึงข้อมูลแบบมีเงื่อนไข
app.get('/getUsers/:id',function(req,res){
    fs.readFile(__dirname + "/"+ "user.json",'utf-8',function(eer,data){
        var users = JSON.parse(data);   //แปลงข้อมูลให้เป็นก้อน
        var user = users["user"+req.params.id];  //เพิ่มเงื่อนไข
    console.log(user);
    res.end(JSON.stringify(user));
    });
});

var user = {
    "user3" : {
        "name" : "Nosttt" ,
        "password" : "password3",
        "occupation" : "student",
        "id" : 3

    }
}

app.post('/addUsers',function(req,res){
    fs.readFile(__dirname + "/"+ "user.json",'utf-8',function(eer,data){
       data = JSON.parse(data); 
       data["user3"] = user["user3"];   //เพิ่มข้อมูลใหม่ไปต่อข้อมูลเดิม
    console.log(data);
    res.end(JSON.stringify(data));
    });
});


var server = app.listen(8081,function (){
    var host = server.address().address
    var port = server.address().port
    console.log("Application Run at http://%s:%s", host, port)
});