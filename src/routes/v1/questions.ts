import express from 'express';
import {
	addQuestion,
	addQuestions,
} from '../../controllers/v1/questions/addQuestion';

const questionRoute = express.Router();

questionRoute.post('/question', addQuestion);
questionRoute.post('/questions', addQuestions);

export default questionRoute;
