import {Request, Response} from 'express';
import Question from '../../../models/Question';

export const getQuestion = async (
	req: Request,
	res: Response,
): Promise<unknown> => {
	const {year, month, questionNumber} = req.params;
	try {
		const question = await Question.findOne({
			year: parseInt(year, 10),
			month: parseInt(month, 10),
			questionNumber: parseInt(questionNumber, 10),
		});
		if (!question) {
			return res.status(404).json({
				message: 'Question not found',
			});
		}
		return res.status(200).json({
			message: 'Question found',
			question,
		});
	} catch (error) {
		return res.status(500).json({error});
	}
};
