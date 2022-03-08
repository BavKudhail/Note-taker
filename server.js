// node modules
const express = require("express");
const path = require("path");

const fs = require("fs");

// initialising express
const app = express();
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});

// creating routes
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// endpoints

// middleware

// EXPRESS JS CRASH COURSE
