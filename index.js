var express = require("express");
var bodyParser = require('body-parser'); 
var app = express();
var fileType = require("file-type");
const http = require("http");
const url = "https://www.jandusoft.com/images/JanduSoft_logo.png";

app.use(bodyParser.json());

var words = { palabras: "hola,como,estas,hola,como,estas,hola,como,estas"};
var str = "hola llamando a papa";

app.get('/removeduplicatewords', function(req, res){
		var hola = str.split("a");
		res.send(hola);
});

app.get('/detectfiletype', function(req, res){
		res.send("file type working");
});
http.get(url, res){
    res.once('data', chunk => {
        res.destroy();
        console.log(fileType(chunk));
        //=> {ext: 'gif', mime: 'image/gif'}
    });


app.listen(8000);