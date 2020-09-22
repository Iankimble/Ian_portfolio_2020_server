// Dependencies
const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const cors = require("cors");
dotenv.config();

// Initializing Express
const app = express();

// Routes
const contact = require("./routes/contactMe-route");

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use("/", contact);

// Port
const port = process.env.PORT || 6060;
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
