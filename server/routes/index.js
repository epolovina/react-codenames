const express = require("express");
const router = express.Router();
const categoriesData = require('../assets/categories.json');

router.get("/", (req, res) => {
  res.send({ response: "I am alive"  }).status(200);
});

router.get("/categories", (req, res) => {
  console.log("getting categories");
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.json(categoriesData).status(200);
});

module.exports = router;
