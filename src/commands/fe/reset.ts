/* eslint-disable @typescript-eslint/no-non-null-assertion */
import {Message, MessageEmbed} from 'discord.js';
import {getCurrentQuestion} from '../../api/getCurrentQuestion';
import {resetAnswer} from '../../api/resetAnswer';
import Color from '../../constants/color';

export const reset = async (message: Message): Promise<void> => {
	try {
		const messageEmbed: MessageEmbed = new MessageEmbed()
			.setColor(Color.PAPAYAWHIP)
			.setTitle('Change prefix')
			// eslint-disable-next-line quotes
			.setDescription("Please wait... I'm resetting result");
		const replyMessage = await message.reply({embeds: [messageEmbed]});
		const currentQuestion = await getCurrentQuestion(message.guildId!);
		if (!currentQuestion) {
			replyMessage.delete();
			throw new Error('No question is currently being selected');
		}
		const [year] = currentQuestion;
		await resetAnswer(year, message.guildId!);
		replyMessage.delete();
		messageEmbed
			.setColor(Color.SEAGREEN)
			.setTitle('Success')
			.setDescription('Reset result successfully');
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
