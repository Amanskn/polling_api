const express = require('express');
const router = express.Router();
const questionController = require('../../../controllers/api/v1/questionController');

// ------------------------route for creation of a  question
router.post('/create',questionController.createQuestion)

// -------------------route for viewing all the question
router.get('/:id',questionController.viewQuestions)

// -----------------------------route for deletion of a question
router.delete('/:id/delete',questionController.deleteQuestion)

//------------------------------- route for creation of option to a specific question
router.post('/:id/options',require('./optionRoute'));



module.exports = router;