import CurrentQuestion from '../models/CurrentQuestion';
import Question, {QuestionDocument} from '../models/Question';

export const getQuestion = async (
	year: number,
	month: number,
	questionNumber: number,
	guildId: string,
): Promise<QuestionDocument | null> => {
	try {
		const question = await Question.findOne({
			year,
			month,
			questionNumber,
		});
		if (question) {
			await CurrentQuestion.updateOne(
				{guildId},
				{
					$set: {
						year,
						month,
						questionNumber,
					},
				},
				{upsert: true},
			);
		}
		return question;
	} catch (error) {
		return null;
	}
};
