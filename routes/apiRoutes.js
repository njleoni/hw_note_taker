const noteData = require("../db/db.json");
const fs = require("fs");
const uniqid = require('uniqid');

module.exports = (app) => {
  app.get("/api/notes", function(req, res) {
    res.json(noteData);
  });

};