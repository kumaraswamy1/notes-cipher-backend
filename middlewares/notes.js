const { NoteList } = require("../models/noteList.model");
const getUserNotes = async (req, res, next) => {
  try {
    const { user } = req;

    let notes = await NoteList.findOne({ userId: user._id })
    if (!notes) {
      notes = new NoteList({ userId: user._id, noteList: [] })
     notes= await notes.save();
    
    } req.userNotesList = notes
console.log(notes)
    next()
  } catch (e) {
    return res.status(500).json({ success: false, message: "Unable to retrive user details", errorMessage: e.message })
  }
}


module.exports = { getUserNotes }