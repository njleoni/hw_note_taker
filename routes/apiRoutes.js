const noteData = require("../db/db.json");
const fs = require("fs");
const uniqid = require('uniqid');

// console.log(noteData);

module.exports = (app) => {
  app.get("/api/notes", function(req, res) {
    res.json(noteData);
    console.log(noteData);
  });

};