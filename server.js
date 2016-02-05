var express = require('express');
var app = express();
var port = process.env.PORT || 8080;

var bodyParser = require('body-parser');
var morgan = require('morgan');
var cors = require('cors');

var searchRoute = require('./app/routes/search-rt.js');
var dataSubmitRoute = require('./app/routes/data-submit-rt.js');

/**middleware setup */
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());

/**Route setup */


app.use('/search', searchRoute)
app.use('/submit', dataSubmitRoute)

console.log("starting app...")
app.listen(port);
console.log("App started");