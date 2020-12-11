const noteData = require("../db/db.json");
const fs = require("fs");
const uniqid = require('uniqid');

console.log(noteData);

module.exports = (app) => {
  app.get("/api/notes", (req, res) => {
    res.json(noteData);
  });

  app.post('/api/notes', (req, res) => {
    noteData.push(req.body);
    res.redirect(req.get('referer'));
    testLog();
 
  });

};

const testLog = () => {
  console.log(noteData);
}