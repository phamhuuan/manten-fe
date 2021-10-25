import CurrentQuestion from '../models/CurrentQuestion';

export const getCurrentQuestion = async (
	guildId: string,
): Promise<[number, number, number] | null> => {
	try {
		const currentQuestion = await CurrentQuestion.findOne({
			guildId,
		});
		if (currentQuestion) {
			return [
				currentQuestion.year,
				currentQuestion.month,
				currentQuestion.questionNumber,
			];
		}
		return null;
	} catch (error) {
		return null;
	}
};
