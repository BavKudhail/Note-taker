// node modules
const express = require("express");
const path = require("path");
const uuid = require("uuid");

const noteData = require("./db/db.json");
const fs = require("fs");

// initialising express
const app = express();
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});

// Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// set a static folder
app.use(express.static("public"));

// HTML REQUESTS
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "notes.html"));
});

// API ROUTES
app.get("/api/notes", (req, res) => {
  res.json(noteData);
  console.log(noteData[0].text);
});

// Create a note
app.post("/api/notes", (req, res) => {
  const newNote = {
    title: req.body.title,
    text: req.body.text,
    id: uuid.v4(),
  };

  noteData.push(newNote);

  res.json(noteData);

  //   Add new note to the note-database
  fs.writeFile("db/db.json", JSON.stringify(noteData, null, 2), (err) => {
    if (err) throw err;
  });
});
