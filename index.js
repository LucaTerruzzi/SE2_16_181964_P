//express lib
var express = require('express');

//inspect
//var util = require('util');

//for templates
var bind = require('bind');

//instantiate express
var app = express();

//POST
//var bodyParser = require('body-parser');
//app.use(bodyParser.urlencoded({ extended: false }));

app.set('port', (process.env.PORT || 1337));

//Expose script files to the client
app.use('/scripts', express.static(__dirname + '/scripts'));
//Expose css files to the client
app.use('/css', express.static(__dirname + '/css'));

//Set server for base request
app.use('/', function(request, response) {
    //set the headers of the responce
    var headers = {};
    //answer
    headers["Content-Type"] = "text/html";
    response.writeHead(200, headers);
 
    //fill template and send as response
	bind.toFile('tpl/home.tpl', {}, 
        function(data) 
        {
            //write response
            response.end(data);
        });
});

//Set server for map request
app.use('/map', function(request, response) {
    //set the headers of the responce
    var headers = {};
    //answer
    headers["Content-Type"] = "text/html";
    response.writeHead(200, headers);
 
    //fill template and send as response
	bind.toFile('tpl/map.tpl', {}, 
        function(data) 
        {
            //write response
            response.end(data);
        });
});


app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});