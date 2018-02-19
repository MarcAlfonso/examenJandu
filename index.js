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

/*app.get('/detectfiletype', function(req, res){
	res.once('data', chunk => {
        res.destroy();
        console.log(fileType(chunk));
        resultado = "{ext: 'gif', mime: 'image/gif'}";
		JSON.stringify(resultado);
    });		
});*/

//app.get('/example/b', function (req, res, next)
app.get('/detectfiletype', function (req, res){
		res.once('data', url => {
        res.destroy();
        console.log(fileType(url));
        resultado = "{ext: 'gif', mime: 'image/gif'}";
		JSON.stringify(resultado);
    });
});

app.listen(8000);
