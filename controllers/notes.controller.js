
const { Note } = require("../models/note.model");

const { Label } = require("../models/label.model");
const addNote=async (req,res)=>{
try{    let { userNotesList} = req
const body=req.body

    console.log(userNotesList)
    const note= new Note(body)
  await note.save();
  await userNotesList.noteList.push(note._id);
  await userNotesList.save();

  let notelist = await note.populate({path:"labelList"})
   return res.json({ success: true, notes: notelist });
  }
 catch (err) {
    res.status(500).json({ success: false, message: "Not working", errorMessage: err.message })
  }
}


const getAllNotes=async (req,res)=>{
try{    let { userNotesList} = req

 let {noteList} = await userNotesList.populate({path:"noteList" ,select:" -userId",populate:{path:"labelList",select:"-__v -updatedAt -createdAt "}})
   return res.json({ success: true, notes: noteList });
  }
 catch (err) {
    res.status(500).json({ success: false, message: "Not working", errorMessage: err.message })
  }
}


const updateNote=async (req,res)=>{
  try {
  const noteId = req.params.noteId;
  
  
 let note = await Note.findById(noteId);
      Object.assign(note, req.body);

  await note.save();
    
   return res.json({ success: true, note: note });
  }
 catch (err) {
    res.status(500).json({ success: false, message: "Not working", errorMessage: err.message })
  }
  }



const deleteNote = async (req, res) => {
  try {
    let { userNotesList} = req
    const noteId = req.params.noteId;

    userNotesList.noteList = userNotesList.noteList.filter(note => note._id!== noteId);

    await userNotesList.save();
    await Note.deleteOne({ noteId });

    res.status(200).json({ success: true });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      errorMessage: "Unable to fetch notes.Try again later",
    });
  }
};

const updatePin=async (req,res)=>{
  
  try {
  const noteId = req.params.noteId;
  
  
 let note = await Note.findById(noteId);

    note.isPinned=!note.isPinned;

  await note.save();
    
   return res.json({ success: true, note: note });
  }
 catch (err) {
    res.status(500).json({ success: false, message: "Not working", errorMessage: err.message })
  }
  }
module.exports = {getAllNotes,addNote,updateNote,deleteNote,updatePin}