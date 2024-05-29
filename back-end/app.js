const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');
const route = require('./studentRouting');

const app = express();

mongoose.connect("mongodb://localhost:27017/Class")
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Error connecting to MongoDB:", err));

app.use(cors());

app.use(express.json());

app.use('/', route);

app.get('/', (req, res) => {
  res.send("Running on localhost 8000");
});

const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});