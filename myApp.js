var express = require('express');
var app = express();

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


































 module.exports = app;
