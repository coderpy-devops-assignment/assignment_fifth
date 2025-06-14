const express    = require("express");
const bodyParser = require("body-parser");
const path       = require("path");
const axios      = require("axios");
const qs         = require("qs"); // ✅ Needed to encode form data

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.post("/submit", async (req, res) => {
  try {
    const formData = qs.stringify(req.body);  // ✅ Encode form data

    const response = await axios.post("http://backend:5000/process", formData, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded' // ✅ Set correct content-type
      }
    });

    res.send(response.data);
  } catch (err) {
    console.error("AXIOS ERROR:", err.message);
    res.status(500).send("Error sending data to backend.");
  }
});

app.listen(3000, () => {
  console.log("Frontend running on http://localhost:3000");
});
