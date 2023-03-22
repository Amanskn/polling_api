const Option = require('../../../models/options');


// -----------------------------------------action for creation of an option
module.exports.createOption = async function(req,res){
    return res.status(200).json({
        message:'This is the home page of v1,Got it'
    })
}

// -------------------action for deletion of an option
module.exports.deleteOption = async function(req,res){
    return res.status(200).json({
        message:'This is the home page of v1,Got it'
    })
}

// ------------------------------action for addition of bote to an option-
module.exports.addVote = async function(req,res){
    return res.status(200).json({
        message:'This is the home page of v1,Got it'
    })
}
