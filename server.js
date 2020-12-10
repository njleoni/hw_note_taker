
const express = require('express');
// const path = require('path');
//this sets up the basic properties for our express server
//tells node that we are creating an "express" server
const app = express();

//sets the initial port
const PORT = 3000;

// process.env.PORT || 

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//ROUTER
//the below points our server to a series of "route" files
//These routes give out server a "map" of how to respond when users visit or request date from various URLs

require('./routes/apiRoutes')(app);
require('./routes/htmlRoutes')(app);

//Listener
//Code below starts the server
app.listen(PORT, () => {
    console.log(`App listening on PORT: ${PORT}`);
});