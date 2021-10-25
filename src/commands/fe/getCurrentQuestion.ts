/* eslint-disable @typescript-eslint/no-non-null-assertion */
import {Message, MessageEmbed} from 'discord.js';
import Color from '../../constants/color';
import {getCurrentQuestion as gCQ} from '../../api/getCurrentQuestion';

export const getCurrentQuestion = async (message: Message): Promise<void> => {
	try {
		const res = await gCQ(message.guildId!);
		if (!res) {
			const messageEmbed: MessageEmbed = new MessageEmbed()
				.setColor(Color.TOMATO)
				.setTitle('Error')
				.setDescription('No question is currently being selected');
			message.react('✅');
			message.reply({embeds: [messageEmbed]});
		} else {
			const [year, month, questionNumber] = res;
			const messageEmbed: MessageEmbed = new MessageEmbed()
				.setColor(Color.SEAGREEN)
				.setTitle(`Question ${year} ${month} ${questionNumber}`);
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
