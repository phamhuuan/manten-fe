/* eslint-disable @typescript-eslint/no-non-null-assertion */
import {Message, MessageEmbed} from 'discord.js';
import Color from '../../constants/color';
import {getQuestion as gQ} from '../../api/getQuestion';

export const getQuestion = async (
	message: Message,
	paramMessage: string,
): Promise<void> => {
	try {
		const [year, month, questionNumber] = paramMessage
			.split(' ')
			.slice(0, 3)
			.map(Number);
		if (
			Number.isInteger(year) &&
			Number.isInteger(month) &&
			Number.isInteger(questionNumber)
		) {
			const question = await gQ(year, month, questionNumber, message.guildId!);
			if (!question) {
				const messageEmbed = new MessageEmbed()
					.setColor(Color.TOMATO)
					.setTitle('Error')
					.setDescription(
						`Question ${questionNumber} of ${month}/${year} does not exist.`,
					);
				message.react('✅');
				message.reply({embeds: [messageEmbed]});
			} else {
				const messageEmbed: MessageEmbed = new MessageEmbed()
					.setColor(Color.SEAGREEN)
					.setTitle(`Question ${year} ${month} ${questionNumber}`);
				if (question.content) {
					messageEmbed.addField('Content', question.content);
				}
				if (question.answerA) {
					messageEmbed.addField('A', question.answerA);
				}
				if (question.answerB) {
					messageEmbed.addField('B', question.answerB);
				}
				if (question.answerC) {
					messageEmbed.addField('C', question.answerC);
				}
				if (question.answerD) {
					messageEmbed.addField('D', question.answerD);
				}
				if (question.image && question.image.length > 0) {
					messageEmbed.setImage(question.image);
					messageEmbed.addField('Image url', question.image);
				}
				message.react('✅');
				message.reply({embeds: [messageEmbed]});
			}
		} else {
			message.reply(
				`The command \`${message.content} \` is not valid, please try again.`,
			);
		}
	} catch (error) {
		const messageEmbed: MessageEmbed = new MessageEmbed()
			.setColor(Color.TOMATO)
			.setTitle('Error')
			.setDescription(`Error: ${error}`);
		message.reply({embeds: [messageEmbed]});
	}
};
