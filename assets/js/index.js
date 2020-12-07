// Dependencies

const express = require('express');
const path = require('path');

// Sets up the Express App

const app = express();
const PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const tables = [];
const waitlist = [];

// Basic route that sends the user first to the AJAX Page
app.get('/', (req, res) => res.sendFile(path.join(__dirname, '/public/index.html')));

app.get('/notes', (req, res) => res.sendFile(path.join(__dirname, '/public/notes.html')));

// Displays all tables
// app.get('/api/tables', (req, res) => res.json(tables));
// Displays all waitlist
// app.get('/api/waitlist', (req, res) => res.json(waitlist));

// app.post("/api/tables", (req, res) => {

//     const newTable = req.body;

//     console.log(newTable);

//     if (tables.length < 5) {
//         tables.push(newTable);
//         res.json(newTable);
//     } else {
//         waitlist.push(newTable)
//         res.json(waitlist)
//     }


// });

app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));
