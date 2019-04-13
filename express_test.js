var express = require("express");
var bodyParser = require("body-parser");
var app = express();

app.use(bodyParser.json());
app.post("/input", function(request, response) {
	console.log(request.body);
	response.send({ status: 'SUCCESS' });
});

app.listen(8080, () => console.log("Listening on port 8080!"));
