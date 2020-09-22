const express = require("express");
const { sendMsg } = require("../controllers/contactMe-controller");
const router = express.Router();

router.post("/contact", sendMsg);

module.exports = router;
