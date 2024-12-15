const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse POST data
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files (HTML, CSS, JS)
app.use(express.static(__dirname));

// Serve the main page
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

// Log hints for participants
console.log("Hint 1: Not all paths lead to Rome.");
console.log("Hint 2: Maybe the MD5 hash 7af4f3b8 means something?");
console.log("Hint 3: Decode c2VjcmV0a2V5 to get the key.");

// Serve the flag page
app.get("/7af4f3b8.html", (req, res) => {
    res.sendFile(path.join(__dirname, "etmskibiditoiletrizz.html"));
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
