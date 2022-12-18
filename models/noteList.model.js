const mongoose = require('mongoose');  
const Schema = mongoose.Schema;

const NoteListSchema = new Schema({
  userId: {type: Schema.Types.ObjectId, ref: 'User'},
  noteList: [{type: Schema.Types.ObjectId, ref: 'Note'}]
})

const NoteList = mongoose.model('NoteList', NoteListSchema);
module.exports = {NoteList};