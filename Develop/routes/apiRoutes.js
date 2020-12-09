

const noteText = require('../public/assets/js/index');

module.exports = (app) => {
    app.get('/api/notes', (req, res) => res.json(noteText));

    app.post('/api/notes', (req, res) => {
        const newNote = req.body;

        res.json(newNote);
    });


};