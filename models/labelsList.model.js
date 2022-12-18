const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LabelsListSchema = new Schema({
  user:{
    type:Schema.Types.ObjectId,
    ref: 'User' 
  },
  labels: [{  type:Schema.Types.ObjectId, ref: 'Label' }]
})
const LabelsListModel = mongoose.model('LabelsList', LabelsListSchema);
module.exports = LabelsListModel;