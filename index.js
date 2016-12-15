//express lib
var express = require('express');

//inspect
//var util = require('util');

//for templates
var bind = require('bind');

//instantiate express
var app = express();

//Cross-Origin Resource Sharing (CORS), used for enabling pre-flight option
cors = require('cors');

//student manager
var data = require('./data.js');

//POST
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());// JSON

app.set('port', (process.env.PORT || 1337));
//enable pre-flight authoriuzation
app.options('*', cors());

//Expose script files to the client
app.use('/scripts', express.static(__dirname + '/scripts'));
//Expose css files to the client
app.use('/css', express.static(__dirname + '/css'));

//Set server for base request
app.get('/', function(request, response) {
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
app.get('/map', function(request, response) {
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


//Respond with a list of point of interest
app.post('/getPoints', function(request, response) 
{
	var headers = {};
	headers["Access-Control-Allow-Origin"] = "*";
	headers["Access-Control-Allow-Methods"] = "POST, GET, PUT, DELETE, OPTIONS";
	headers["Access-Control-Allow-Credentials"] = false;
	headers["Access-Control-Max-Age"] = '86400'; // 24 hours
	headers["Access-Control-Allow-Headers"] = "X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept";
	headers["Content-Type"] = "application/json";
	
    var position;
	//check body and parameters
	if ( typeof request.body !== 'undefined' && request.body){
		if ( typeof request.body.position !== 'undefined' && request.body.position){
			 position = request.body.position;
        }
		else{
			position = "not defined";            
        }
	}else{
		position = "body undefined";
	}
    
    
    if (position !="not defined" && position!="body undefined"){
        var list = data.getPoints(position);
		//if exists
		if (list != null){
			response.writeHead(200, headers);
			response.end(JSON.stringify(list));
		}else{
			response.writeHead(404, headers);
			response.end(JSON.stringify());
		}

	}
    else{
		//unaceptable input
		response.writeHead(406, headers);
		response.end(JSON.stringify("1"));
	}   

});


app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});