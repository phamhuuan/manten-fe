import Question from '../models/Question';
import {getCurrentQuestion} from './getCurrentQuestion';

export const getAnswer = async (
	guildId: string,
): Promise<[string, number, number, number] | null> => {
	try {
		const res = await getCurrentQuestion(guildId);
		if (!res) return null;
		const [year, month, questionNumber] = res;
		const question = await Question.findOne({
			year,
			month,
			questionNumber,
		});
		if (!question) return null;
		return [
			question.correctAnswer,
			question.year,
			question.month,
			question.questionNumber,
		];
	} catch (error) {
		return null;
	}
};
