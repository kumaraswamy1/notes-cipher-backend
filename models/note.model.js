const mongoose =require('mongoose');
const {Schema}= mongoose

const noteSchema = new Schema({
  title: {type: String},
  content: {type: String},
  color: String,
  isPinned: {type: Boolean, default: false},
  labelList:[{type:Schema.ObjectId, ref:"Label"}],
},{
  timestamps: true,

});

const Note = mongoose.model('Note', noteSchema);

module.exports = {Note} 


