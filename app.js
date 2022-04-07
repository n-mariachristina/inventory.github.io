//set up the server
const express = require( "express" );
const logger = require("morgan");
const app = express();
const port = 8080;

// defining middleware that logs all incoming requests.
app.use(logger("dev"));

// start the server
app.listen( port, () => {
    console.log(`App server listening on ${ port }. (Go to http://localhost:${ port })` );
} );

// define a route for the default home page
app.get( "/", ( req, res ) => {
    res.sendFile( __dirname + "/views/index.html" );
} );

// define a route for the stuff inventory page
app.get( "/stuff", ( req, res ) => {
    res.sendFile( __dirname + "/views/stuff.html" );
} );

// define a route for the item detail page
app.get( "/stuff/item", ( req, res ) => {
    res.sendFile( __dirname + "/views/item.html" );
} );

app.get( "/images/view.jpg", ( req, res ) => {
    res.sendFile( __dirname + "/images/view.jpg");
} );