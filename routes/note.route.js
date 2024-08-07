const express = require("express");
const router = express.Router();
const {getNotes, getNote, createNote, updateNote, deleteNote} = require("../controllers/note.controller.js");

router.get("/", getNotes);
router.get("/:id", getNote);

router.post("/add-note", createNote);

// update a note
router.put("/update-note/:id", updateNote);

// delete a note
router.delete("/delete-note/:id", deleteNote);

module.exports = router;