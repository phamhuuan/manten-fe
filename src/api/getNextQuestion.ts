import {QuestionDocument} from '../models/Question';
import {getCurrentQuestion} from './getCurrentQuestion';
import {getQuestion} from './getQuestion';

export const getNextQuestion = async (
	guildId: string,
): Promise<QuestionDocument | null> => {
	try {
		const currentQuestion = await getCurrentQuestion(guildId);
		if (!currentQuestion) {
			return null;
		}
		const [year, month, questionNumber] = currentQuestion;
		return await getQuestion(year, month, questionNumber + 1, guildId);
	} catch (error) {
		return null;
	}
};
