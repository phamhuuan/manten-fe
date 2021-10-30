/* eslint-disable @typescript-eslint/no-explicit-any */
import Question from '../models/Question';
import UserAnswer from '../models/UserAnswer';

export type Result = {userId: string; correctAnswer: number};

export const getResult = async (
	year: number,
	guildId: string,
): Promise<Result[] | null> => {
	try {
		const correctAnswers = await Question.find({year}).select('correctAnswer');
		const userAnswers = await UserAnswer.aggregate([
			{
				$match: {
					guildId,
					year,
				},
			},
			{
				$group: {
					_id: '$userId',
					answers: {
						$push: {
							answer: '$answer',
							questionNumber: '$questionNumber',
						},
					},
				},
			},
		]);
		const results: Result[] = [];
		userAnswers.forEach(userAnswer => {
			const correctAnswer = userAnswer.answers.filter(
				(answer: any) =>
					answer.answer ===
					correctAnswers[answer.questionNumber - 1].correctAnswer,
			);
			results.push({
				userId: userAnswer._id,
				correctAnswer: correctAnswer.length,
			});
		});
		return results;
	} catch (error) {
		return null;
	}
};
