const express = require("express");
const carteControllers = require("../controllers/carte");

const router = express.Router();

router.get("/", carteControllers.getAllCarte);

router.get("/:id", carteControllers.getACarte);

router.post("/", carteControllers.createItem);

router.delete("/:id", carteControllers.deleteItem);

router.put("/:id", carteControllers.modifyItem);

module.exports = router;
