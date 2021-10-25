/* eslint-disable @typescript-eslint/no-non-null-assertion */
import {Message, MessageEmbed} from 'discord.js';
import Color from '../../constants/color';
import {getPreviousQuestion as gPQ} from '../../api/getPreviousQuestion';

export const prev = async (message: Message): Promise<void> => {
	try {
		const question = await gPQ(message.guildId!);
		if (!question) {
			const messageEmbed = new MessageEmbed()
				.setColor(Color.TOMATO)
				.setTitle('Error')
				.setDescription('Question does not exist.');
			message.react('✅');
			message.reply({embeds: [messageEmbed]});
		} else {
			const messageEmbed: MessageEmbed = new MessageEmbed()
				.setColor(Color.SEAGREEN)
				.setTitle(
					`Question ${question.year} ${question.month} ${question.questionNumber}`,
				);
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
	} catch (error) {
		const messageEmbed: MessageEmbed = new MessageEmbed()
			.setColor(Color.TOMATO)
			.setTitle('Error')
			.setDescription(`Error: ${error}`);
		message.reply({embeds: [messageEmbed]});
	}
};
