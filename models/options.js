const mongoose = require('mongoose');

const optionSchema = new mongoose.Schema({
    text : String, 
    votes : Number,
    link_to_vote : String
},{
    timestamps:true
});

const Option = mongoose.model('option',optionSchema);
module.exports = Option;