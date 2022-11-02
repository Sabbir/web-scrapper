// In src/v1/routes/workoutRoutes.js
const express = require("express");
const productsController = require("../../controllers/productsController")
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Please search for a product");
});

router.get("/:product", productsController.getAllProducts)

module.exports = router