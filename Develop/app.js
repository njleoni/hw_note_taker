
const express = require('express');
const path = require('path');
//this sets up the basic properties for our express server
//tells node that we are creating an "express" server
const app = express();

//sets the initial port
const PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, './public/index.html'));
// });

// app.get('/notes', (req, res) => {
//     res.sendFile(path.join(__dirname, './public/notes.html'));
// });

// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, './public/index.html'));
// });


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