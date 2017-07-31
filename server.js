var http = require("http");

var PORTONE = 7000;
var PORTTWO = 8081;

function sayGood(request, response){
	response.end("You are nice:" + request.url);
}

function beMean(request, response){
	response.end("You are mean:" + request.url);
}

// Here we use the Node HTTP package to create our server.
// We then pass it the handleRequest function to empower it with functionality.
var serverONE = http.createServer(sayGood);
var serverTWO = http.createServer(beMean);

// Here we start our server so that it can begin listening to client requests.
serverONE.listen(PORTONE, function() {

  // The below statement is triggered (server-side) when a user visits the PORT URL
  console.log("Server listening on: http://localhost:%s", PORTONE);

});

// Here we start our server so that it can begin listening to client requests.
serverTWO.listen(PORTTWO, function() {

  // The below statement is triggered (server-side) when a user visits the PORT URL
  console.log("Server listening on: http://localhost:%s", PORTTWO);

});