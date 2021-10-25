import {Request, Response} from 'express';
import Question from '../../../models/Question';

export const addQuestion = async (
	req: Request,
	res: Response,
): Promise<unknown> => {
	const {
		content,
		image,
		answerA,
		answerB,
		answerC,
		answerD,
		correctAnswer,
		year,
		month,
		questionNumber,
	} = req.body;
	try {
		const oldQuestion = await Question.findOne({
			year,
			month,
			questionNumber,
		});
		if (oldQuestion) {
			return res.status(400).json({
				message: 'Question already exists',
			});
		}
		const question = await Question.create({
			content,
			image,
			answerA,
			answerB,
			answerC,
			answerD,
			correctAnswer,
			year,
			month,
			questionNumber,
		});
		res.status(200).json({
			message: 'Question created successfully',
			question,
		});
	} catch (error) {
		return res.status(500).json({error});
	}
};

export const addQuestions = async (
	req: Request,
	res: Response,
): Promise<unknown> => {
	const {data} = req.body;
	try {
		const questions = await Question.insertMany(data);
		res.status(200).json({
			message: 'Question created successfully',
			questions,
		});
	} catch (error) {
		return res.status(500).json({error});
	}
};
