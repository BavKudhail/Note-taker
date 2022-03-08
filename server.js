// node modules
const express = require("express");
const fs = require("fs");

// initialising express
const app = express();

// PORT variable
const PORT = process.env.PORT || 3000;

// HTML ROUTES

app.get("/public/notes.html", (req, res) => {
  res.send(req.body);
});
// * `GET /notes` should return the `notes.html` file.

// * `GET *` should return the `index.html` file.
app.get("/public/index.html", (req, res) => {
  res.send(req.body);
});

// API ROUTES

// * `GET /api/notes` should read the `db.json` file and return all saved notes as JSON.

// * `POST /api/notes` should receive a new note to save on the request body, add it to the `db.json` file, and then return the new note to the client. You'll need to find a way to give each note a unique id when it's saved (look into npm packages that could do this for you).
