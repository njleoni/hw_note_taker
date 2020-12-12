const noteData = require("../db/db.json");
const fs = require("fs");
const uniqid = require('uniqid');
const {v4 : uuidv4} = require('uuid')

console.log(noteData);

module.exports = (app) => {
  app.get("/api/notes", (req, res) => {
    res.json(noteData);
  });

  app.post('/api/notes', (req, res) => {
    // noteData.push(req.body); //this works, don't delete
    // testLog(); //this works, don't delete
    // const {title, text} = req.body //can probably delete
    
    const noteId = uuidv4();
    const noteOb = {
      id: noteId,
      title: req.body.title,
      text: req.body.text
    }
    noteData.push(noteOb);
    testLog();
    res.redirect(req.get('referer')); //this works, don't delete
  });

  app.delete('/api/notes/:id', (req, res) => { 
    console.log("Delete Review");
    let idRemove = req.params.id;
    console.log(idRemove);

    noteData.forEach(function(note) {
      if (note.id === idRemove) {
        console.log(note);
        noteData.splice(note,1);
        res.redirect(req.get('referer'));
        testLog();
      }
    })

  });

};

const testLog = () => {
  console.log(noteData);
}