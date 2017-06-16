var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var morgan = require("morgan");
var port = process.env.PORT || 8000;
var path = require("path");

app.use(express.static(path.join("__dirname", "public")));
app.use(bodyParser.json());
app.use(morgan("dev"));
app.use("/food", require("./routes/foodRoute"));

// Add headers
app.use(function (req, res, next) {

	// Website you wish to allow to connect
	res.setHeader('Access-Control-Allow-Origin', 'http://localhost:61670');

	// Request methods you wish to allow
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

	// Request headers you wish to allow
	res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

	// Set to true if you need the website to include cookies in the requests sent
	// to the API (e.g. in case you use sessions)
	res.setHeader('Access-Control-Allow-Credentials', true);

	// Pass to next layer of middleware
	next();
});

app.get("/", function (req, res) {
	console.log("it is working");
});

mongoose.connect('mongodb://localhost/food');



app.listen(port, function () {
	"my port is runing on port " + port
});
