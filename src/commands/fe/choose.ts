/* eslint-disable @typescript-eslint/no-non-null-assertion */
import {Message, MessageEmbed} from 'discord.js';
import {getCurrentQuestion} from '../../api/getCurrentQuestion';
import {saveAnswer} from '../../api/saveAnswer';
import Color from '../../constants/color';

export const choose = async (
	message: Message,
	paramMessage: string,
): Promise<void> => {
	try {
		const sender = message.author;
		if (paramMessage.trim().length === 0) {
			throw new Error('Syntax error');
		}
		const chosenAnswer = paramMessage.charAt(0).toUpperCase();
		const currentQuestion = await getCurrentQuestion(message.guildId!);
		if (currentQuestion === null) {
			throw new Error('No question is currently being selected');
		}
		const [year, month, questionNumber] = currentQuestion;
		const savedAnswer = await saveAnswer(
			year,
			month,
			questionNumber,
			message.guildId!,
			sender.id,
			chosenAnswer,
		);
		if (savedAnswer === null) {
			throw new Error(
				`Saving answer for user <@${sender.id}> error. Try again!`,
			);
		}
		const messageEmbed: MessageEmbed = new MessageEmbed()
			.setColor(Color.SEAGREEN)
			.setTitle('Success')
			.setDescription(`<@${sender.id}> chose **${savedAnswer.answer}**`);
		message.react('✅');
		message.reply({embeds: [messageEmbed]});
	} catch (error) {
		const messageEmbed: MessageEmbed = new MessageEmbed()
			.setColor(Color.TOMATO)
			.setTitle('Error')
			.setDescription(`Error: ${error}`);
		message.reply({embeds: [messageEmbed]});
	}
};
