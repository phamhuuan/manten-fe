import {Message, MessageEmbed} from 'discord.js';
import Color from '../../constants/color';

export const ping = (message: Message): void => {
	const messageEmbed: MessageEmbed = new MessageEmbed()
		.setColor(Color.SEAGREEN)
		.setTitle('Ping :ping_pong: Pong')
		.setDescription(
			`The **Api** ping is \`${
				message.client.ws.ping
			}ms\` and the **Message** ping is \`${
				Date.now() - message.createdTimestamp
			}ms\``,
		);
	message.react('✅');
	message.reply({embeds: [messageEmbed]});
};
