const express      = require("express");
const bodyParser   = require("body-parser");
const path         = require("path");
const axios        = require("axios");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.post("/submit", async (req, res) => {
  try {
    const response = await axios.post("http://localhost:5000/process", req.body);
    res.send(response.data);
  } catch (err) {
    res.status(500).send("Error sending data to backend.");
  }
});

app.listen(3000, () => {
  console.log("Frontend running on http://localhost:3000");
});

