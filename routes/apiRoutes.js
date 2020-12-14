const noteData = require("../db/db.json");
const fs = require("fs");
const uniqid = require('uniqid');
const {v4 : uuidv4} = require('uuid')

console.log(noteData);

module.exports = (app) => {
  app.get("/api/notes", (req, res) => {
        fs.readFile("db/db.json", function(err, data) { 
          if (err) throw err;
          let allData = JSON.parse(data);
          return res.json(allData); 
    })
  });

  app.post('/api/notes', (req, res) => {
    // noteData.push(req.body); //this works, don't delete
    // testLog(); //this works, don't delete
    // const {title, text} = req.body //can probably delete
    fs.readFile("db/db.json", function(err, data) { 
          if (err) throw err;
          let allData = JSON.parse(data);
   
    const noteId = uuidv4();
    const noteOb = {
      id: noteId,
      title: req.body.title,
      text: req.body.text
    }
    allData.push(noteOb);

    fs.writeFile("db/db.json", JSON.stringify(allData, null, 2), (err) => {
      if (err) throw err;
      res.send('200')
    })
    // testLog();
    // res.redirect(req.get('referer')); //this works, don't delete
     })
  });

  app.delete('/api/notes/:id', (req, res) => { 
    // console.log("Delete Review");
    let idRemove = req.params.id;

        fs.readFile("db/db.json", function(err, data) { 
          if (err) throw err;
          let allData = JSON.parse(data);

          for (var i = 0; i < allData.length; i++) {


      if (allData[i].id === idRemove) {
        // console.log(note);
        allData.splice(i,1);
      }
          }
    fs.writeFile("db/db.json", JSON.stringify(allData, null, 2), (err) => {
          if (err) throw err;
          res.send('200')
    })


  });
 });


}

// const testLog = () => {
//   console.log(noteData);
// }