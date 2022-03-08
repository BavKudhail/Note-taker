// node modules
const express = require("express");
const path = require("path");

const noteData = require("./db/db.json");
const fs = require("fs");

// initialising express
const app = express();
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});

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
});

app.post("/api/notes");

