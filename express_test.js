var express = require("express");
var bodyParser = require("body-parser");
var handler = require("./messageHandler.js")
var app = express();

app.use(bodyParser.json());
app.post("/input", function(request, response) {
	handler.handleMessage(request.body);
	response.send({ status: 'SUCCESS' });
});

app.listen(8080, () => console.log("Listening on port 8080!"));
