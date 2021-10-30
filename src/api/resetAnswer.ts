/* eslint-disable @typescript-eslint/no-explicit-any */
import UserAnswer from '../models/UserAnswer';

export type Result = {userId: string; correctAnswer: number};

export const resetAnswer = async (
	year: number,
	guildId: string,
): Promise<void> => {
	try {
		await UserAnswer.deleteMany({
			year,
			guildId,
		});
	} catch (error) {
		return;
	}
};
