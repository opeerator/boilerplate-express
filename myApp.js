var express = require('express');
var app = express();


app.use(function(req, res, next){
    console.log(req.method + " " + req.path + " - " + req.ip);
    next();
});

app.get("/", function(req, res){
    absolutePath = __dirname + "/views/index.html";
    res.sendFile(absolutePath);
});

app.use('/public', express.static(__dirname + '/public'));

app.use('/json', function(req, res){
    if(process.env["MESSAGE_STYLE"] == "uppercase")
        res.json({"message": "HELLO JSON"});
    else
        res.json({"message": "Hello json"});
});

app.get('/now', function(req, res, next){
    req.time = new Date().toString();
    next();
}, function(req, res){
    res.json({time: req.time});
});






























 module.exports = app;
