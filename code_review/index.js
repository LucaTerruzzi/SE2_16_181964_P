//->CODE REVIEW
//->A script of the second course assignment

// Libs
var express = require('express');
var util = require('util');
var bind = require('bind');
var app = express();

//->HERE MODEL AND CONTROL ARE MIXED (data embedded in control)
//->NO standard definition of object employee (should define a funcion and use new)
/*-> function employee(id, name, surname, level, salary){
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.level = level;
        this.salary = salary;
}*/
// Array initialization
var employees = [];
employees[0] = {e_id:9874, e_name:"Mark", e_surname:"Brown", e_level:2, e_salary:12000};
employees[1] = {e_id:4567, e_name:"Josh", e_surname:"Kent", e_level:3, e_salary:14000}
employees[2] = {e_id:8456, e_name:"Robert", e_surname:"Miller", e_level:5, e_salary:23000}
employees[3] = {e_id:3475, e_name:"Karl", e_surname:"Passen", e_level:4, e_salary:18000}

//-> USLESS to fill an object, will be overwritten. 
var employee = {e_id:null, e_name:"", e_surname:"", e_level:null, e_salary:null};

// Post
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
//->NO description of this function
app.use('/scripts', express.static(__dirname + '/scripts'));

app.set('port', (process.env.PORT || 1337));

//->NO description of this function/api
app.use('/', function(request, response) 
{
    // Set the headers of the responce
    var headers = {};
    // Answer
    headers["Content-Type"] = "text/html";
    response.writeHead(200, headers);

	if ( typeof request.body !== 'undefined' && request.body)
	{
        //-> NEVER used, maybe a typo/copy-past?
        // The content of the POST received
		text = "request.body: " + util.inspect(request.body) + "\n";
		
        // If query is defined and not null
		if (typeof request.body.e_name !== 'undefined' && request.body.e_name &&
            typeof request.body.e_surname !== 'undefined' && request.body.e_surname &&
            typeof request.body.e_level !== 'undefined' && request.body.e_level &&
            typeof request.body.e_salary !== 'undefined' && request.body.e_salary){
            
            // Save submitted content
			employee.e_name = request.body.e_name;
            employee.e_surname = request.body.e_surname;
            employee.e_level = request.body.e_level;
            employee.e_salary = request.body.e_salary;
            employee.e_id = request.body.e_id;
        }
    bind.toFile('tpl/home.tpl', 
	employee, 
    function(data) 
    {
        response.end(data);
    });

});

//-> NO description/api for this function
app.use('/search', function(request, response) 
{
    // Set the headers of the responce
    var headers = {};
    // Answer
    headers["Content-Type"] = "text/html";
    response.writeHead(200, headers);

	if ( typeof request.body !== 'undefined' && request.body)
	{
        //-> NEVER used, maybe a typo/copy-past?
        // The content of the POST receiced
		text = "request.body: " + util.inspect(request.body) + "\n";
		
        // If query is defined and not null
		if (typeof request.body.e1_id !== 'undefined' && request.body.e1_id){
            employee.e_id = request.body.e1_id; //-> parameter name not so meaningfull
        }
	}

    //->DATA serch in control, better move to model along with the data.
    var i = employees.indexOf(employee.e_id);
    
    bind.toFile('tpl/home.tpl', 
                {e1_id : i}, 
    function(data) 
    {
        response.end(data);
    });

});


app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
