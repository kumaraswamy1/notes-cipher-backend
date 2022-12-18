const express = require('express');
const NotesRouter = express.Router();

const { getUserNotes } = require("../middlewares/notes.js")
const { getAllNotes, addNote, updateNote,deleteNote,updatePin } = require("../controllers/notes.controller.js")


NotesRouter.use(getUserNotes)


NotesRouter
  .get("/", getAllNotes)
  .post('/', addNote)
  .post("/:noteId", updateNote)
  .delete("/:noteId", deleteNote)
.put("/:noteId", updatePin)
module.exports = NotesRouter