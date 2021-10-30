/* eslint-disable @typescript-eslint/no-non-null-assertion */
import {Message, MessageEmbed} from 'discord.js';
import {getCurrentQuestion} from '../../api/getCurrentQuestion';
import {getResult} from '../../api/getResult';
import Color from '../../constants/color';

export const result = async (message: Message): Promise<void> => {
	try {
		const messageEmbed: MessageEmbed = new MessageEmbed()
			.setColor(Color.PAPAYAWHIP)
			.setTitle('Change prefix')
			// eslint-disable-next-line quotes
			.setDescription("Please wait... I'm calculating result");
		const replyMessage = await message.reply({embeds: [messageEmbed]});
		const currentQuestion = await getCurrentQuestion(message.guildId!);
		if (!currentQuestion) {
			replyMessage.delete();
			throw new Error('No question is currently being selected');
		}
		const [year] = currentQuestion;
		const results = await getResult(year, message.guildId!);
		if (!results) {
			replyMessage.delete();
			throw new Error('No result is currently being selected');
		}
		replyMessage.delete();
		messageEmbed.setTitle('Result').setDescription(`
			${results.map(result => `<@${result.userId}>: ${result.correctAnswer}/80`)}
		`);
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
