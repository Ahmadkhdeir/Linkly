const express = require("express");
const router = express.Router();

router.post("/", (req, res)=> res.send("users route"));

module.exports = router;