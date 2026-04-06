//Loading express for routing / Ucitavam express za rutovanje
const express = require("express");
const router = express.Router();

//Loading task data and a helper function / Ucitavam podatke za task-ove i pomocnu funkciju
const { tasks, getNextID} = require("../data/tasks");

module.exports = router;