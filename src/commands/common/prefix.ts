/* eslint-disable @typescript-eslint/no-non-null-assertion */
import {Message, MessageEmbed} from 'discord.js';
import Color from '../../constants/color';
import PrefixData from '../../data/prefix';
export const prefix = async (
	message: Message,
	paramMessage: string,
	prefix: string,
): Promise<void> => {
	if (message.author.id !== message.guild!.ownerId) {
		message.react('❌');
		const messageEmbed: MessageEmbed = new MessageEmbed()
			.setColor(Color.CRIMSON)
			.setTitle('Guild owner permission needed')
			.setDescription('You do not have permission to execute this operation');
		message.reply({embeds: [messageEmbed]});
		return;
	}

	if (paramMessage.length === 0) {
		message.react('❌');
		const messageEmbed: MessageEmbed = new MessageEmbed()
			.setColor(Color.CRIMSON)
			.setTitle('Syntax error')
			.setDescription(
				`Try **\`${prefix}help prefix\`** to learn more about command \`prefix\``,
			);
		message.reply({embeds: [messageEmbed]});
		return;
	}

	const newPrefix = paramMessage.split(' ')[0];

	if (newPrefix.length > 5) {
		message.react('❌');
		const messageEmbed: MessageEmbed = new MessageEmbed()
			.setTitle('Prefix is too long')
			.setDescription('Prefix cannot be longer than 5 characters')
			.setColor(Color.CRIMSON);
		message.reply({embeds: [messageEmbed]});
		return;
	}

	if (
		'!#$%&()+,-.:;<=>?@[]^_{|}~'
			.split('')
			.includes(newPrefix[newPrefix.length - 1]) &&
		(newPrefix.slice(0, -1) === '' ||
			/^[a-zA-Z0-9]+$/.test(newPrefix.slice(0, -1)))
	) {
		message.react('✅');
		const messageEmbed: MessageEmbed = new MessageEmbed()
			.setColor(Color.PAPAYAWHIP)
			.setTitle('Change prefix')
			// eslint-disable-next-line quotes
			.setDescription("Please wait... I'm changing your guild's prefix");
		const replyMessage = await message.reply({embeds: [messageEmbed]});
		await PrefixData.setPrefix(message.guildId!, newPrefix);
		replyMessage.delete();
		messageEmbed
			.setDescription(`Prefix changed to \`${newPrefix}\``)
			.setColor(Color.SEAGREEN);
		message.reply({embeds: [messageEmbed]});
		return;
	} else {
		message.react('❌');
		const messageEmbed: MessageEmbed = new MessageEmbed()
			.setColor(Color.CRIMSON)
			.setTitle('Syntax error')
			.setDescription(
				`Try **\`${prefix}help prefix\`** to learn more about command \`prefix\``,
			);
		message.reply({embeds: [messageEmbed]});
		return;
	}
};
