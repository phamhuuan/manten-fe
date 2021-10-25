/* eslint-disable @typescript-eslint/ban-ts-comment */
import Question, {QuestionDocument} from '../models/Question';
import {getCurrentQuestion} from './getCurrentQuestion';
// @ts-ignore
import translate from 'translate-google';

export const translateQuestion = async (
	guildId: string,
	locale = 'vi',
): Promise<QuestionDocument | null> => {
	try {
		const res = await getCurrentQuestion(guildId);
		if (!res) {
			return null;
		}
		const [year, month, questionNumber] = res;
		const question = await Question.findOne({
			year,
			month,
			questionNumber,
		});
		if (!question) {
			return null;
		}
		if (question.content && question.content.length > 0) {
			question.content = await translate(question.content, {
				from: 'en',
				to: locale,
			});
		}
		if (question.answerA && question.answerA.length > 0) {
			question.answerA = await translate(question.answerA, {
				from: 'en',
				to: locale,
			});
		}
		if (question.answerB && question.answerB.length > 0) {
			question.answerB = await translate(question.answerB, {
				from: 'en',
				to: locale,
			});
		}
		if (question.answerC && question.answerC.length > 0) {
			question.answerC = await translate(question.answerC, {
				from: 'en',
				to: locale,
			});
		}
		if (question.answerD && question.answerD.length > 0) {
			question.answerD = await translate(question.answerD, {
				from: 'en',
				to: locale,
			});
		}
		return question;
	} catch (error) {
		console.log(error);
		return null;
	}
};
