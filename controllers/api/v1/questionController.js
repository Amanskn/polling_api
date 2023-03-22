const Question = require('../../../models/questions');


// action for creation of a question
module.exports.createQuestion = async function(req,res){
    return res.status(200).json({
        message:'This is the home page of v1,Got it'
    })
}

// action for viewing all the questions
module.exports.viewQuestions = async function(req,res){
    return res.status(200).json({
        message:'This is the home page of v1,Got it'
    })
}

// action for deletion of a question
module.exports.deleteQuestion = async function(req,res){
    return res.status(200).json({
        message:'This is the home page of v1,Got it'
    })
}
