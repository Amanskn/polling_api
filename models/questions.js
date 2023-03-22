const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
    title: String, 
    options: [
        { 
            body: String, date: Date 
        }
    ]
},{
    timestamps:true
});

const Question = mongoose.model('question',questionSchema);
module.exports = Question;