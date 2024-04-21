const express = require("express");

const Joke = require("../models/Joke");

const router = express.Router();

// GET all jokes
router.get("/", (req, res) => {
  // TODO
});

// GET a joke by id
router.get(":id", (req, res) => {});

// POST a joke
router.post("/", async (req, res) => {
  const { title, description } = req.body;
  try {
    const joke = await Joke.create({ title, description });
    res.status(200).json(joke);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
