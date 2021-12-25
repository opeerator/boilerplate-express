var express = require('express');
var app = express();
var bodyParser = require('body-parser'); 

app.use(bodyParser.urlencoded({extended: false}));

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

app.get('/:word/echo', function(req, res){
    res.json({echo: req.params.word});
});

app.route('/name').get(function(req, res){
    first = req.query.first
    second = req.query.last
    res.json({name: first + " " + second});
}).post(function(req, res){
    res.json({name: req.body.first + " " + req.body.last});
});



























 module.exports = app;
