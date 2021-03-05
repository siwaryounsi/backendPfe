// Import express
let express = require('express');
// Import Body parser for request 
let bodyParser = require('body-parser');
// Import Mongoose
let mongoose = require('mongoose');
// Initialize the app for rooting
let app = express();

// Import routes
let apiRoutes = require("./api-routes");
// Configure bodyparser to handle post requests
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
// Connect to Mongoose and set connection variable
mongoose.connect('mongodb://localhost/pfesiwar', { useNewUrlParser: true });



var db = mongoose.connection;

// Added check for DB connection

if (!db)
    console.log("Error connecting db")
else
    console.log("Db connected successfully")

// Setup server port
var port = process.env.PORT || 3000;

// Send message for default URL First Handle get('','/') number 1
app.get('/', (req, res) => res.send('<h1>Hello Siwar</h1>'));

// Use Api routes in the App number 2
app.use('/api', apiRoutes);
// Launch app to listen to specified port
app.listen(port, function () {
    console.log("Running PFE on port " + port);
});