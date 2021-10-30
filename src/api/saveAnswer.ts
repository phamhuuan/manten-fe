import UserAnswer, {UserAnswerDocument} from '../models/UserAnswer';

export const saveAnswer = async (
	year: number,
	month: number,
	questionNumber: number,
	guildId: string,
	userId: string,
	answer: string,
): Promise<UserAnswerDocument | null> => {
	try {
		return await UserAnswer.create({
			year,
			month,
			questionNumber,
			guildId,
			userId,
			answer,
		});
	} catch (error) {
		return null;
	}
};
