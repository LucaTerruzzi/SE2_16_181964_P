//test cases

//lib for sending requests
var request = require("request");

//set base URL
var base_url = "http://localhost:1337/";

//library for JSON requests
requestJSON = require('request-json');
var client = requestJSON.createClient(base_url);


// Test for homepage
describe("Test /", function() {
    it("returns status code 200", function(done) {
        request.get(
            base_url + "", 
            function(error, response, body) {
                expect(response.statusCode).toBe(200);
                done();
            });
    }); 
});

// Test for /map
describe("Test /map", function() {
    it("returns status code 200", function(done) {
        request.get(
            base_url + "map/", 
            function(error, response, body) {
                expect(response.statusCode).toBe(200);
                done();
            });
    }); 
});
 
// Test for /mapCity
describe("Test /mapCity", function() {
    it("returns status code 200", function(done) {
        request.get(
            base_url + "mapCity/", 
            function(error, response, body) {
                expect(response.statusCode).toBe(200);
                done();
            });
    }); 
});

// Test for /mapUni
describe("Test /mapUni", function() {
    it("returns status code 200", function(done) {
        request.get(
            base_url + "mapUni/", 
            function(error, response, body) {
                expect(response.statusCode).toBe(200);
                done();
            });
    }); 
});


// Test for /getPoints
describe("Test /getPoints", function() {
    
	//set the data
	var data = {position: 'position'};
	//legal request
	it("to returns status code 200", function(done) {
	  client.post(base_url + "getPoints/", data, function(err, res, body) {
		expect(body).toBeArrayOfObjects();
		done();
	  });
	});
	
	//position not present
	data1 = {};
	it("to returns status code 406", function(done) {
	  client.post(base_url + "getPoints/", data1, function(err, res, body) {
		expect(res.statusCode).toBe(406);
		done();
	  });
	});
});

// Test for /getCityPoints
describe("Test /getCityPoints", function() {
    
	//set the data
	var data = {position: 'position'};
	//legal request
	it("to returns status code 200", function(done) {
	  client.post(base_url + "getCityPoints/", data, function(err, res, body) {
		expect(body).toBeArrayOfObjects();
		done();
	  });
	});
	
	//position not present
	data1 = {};
	it("to returns status code 406", function(done) {
	  client.post(base_url + "getCityPoints/", data1, function(err, res, body) {
		expect(res.statusCode).toBe(406);
		done();
	  });
	});
});

// Test for /getUniPoints
describe("Test /getUniPoints", function() {
    
	//set the data
	var data = {position: 'position'};
	//legal request
	it("to returns status code 200", function(done) {
	  client.post(base_url + "getUniPoints/", data, function(err, res, body) {
		expect(body).toBeArrayOfObjects();
		done();
	  });
	});
	
	//position not present
	data1 = {};
	it("to returns status code 406", function(done) {
	  client.post(base_url + "getUniPoints/", data1, function(err, res, body) {
		expect(res.statusCode).toBe(406);
		done();
	  });
	});
});