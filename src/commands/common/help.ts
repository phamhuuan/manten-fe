import {Message, MessageEmbed} from 'discord.js';
import Color from '../../constants/color';
import Command from '../../constants/commands';

export const help = (
	message: Message,
	paramMessage: string,
	prefix: string,
): void => {
	const messageEmbed: MessageEmbed = new MessageEmbed();
	if (paramMessage.length > 0) {
		message.react('✅');
		switch (paramMessage.split(' ')[0]) {
			case Command.PING:
			case Command.PING_1:
				messageEmbed
					.setTitle(
						`Documentation for command \`${Command.PING}\`/\`${Command.PING_1}\``,
					)
					.setDescription(
						`
						Get **Api** ping and **Message** ping.\n
						**Command 1**: \`${prefix}${Command.PING}\`\n
						**Command 2**: \`${prefix}${Command.PING_1}\`\n
					`,
					)
					.setColor(Color.SEAGREEN);
				message.reply({embeds: [messageEmbed]});
				return;
			case Command.PREFIX:
			case Command.PREFIX_1:
				messageEmbed
					.setTitle(
						`Documentation for command \`${Command.PREFIX}\`/\`${Command.PREFIX_1}\``,
					)
					.setDescription(
						`
						Set **Bot** prefix.\n
						**Command 1**: \`${prefix}${Command.PREFIX} [valid prefix]\`\n
						**Command 2**: \`${prefix}${Command.PREFIX_1} [valid prefix]\`\n
						**Valid prefix**: [any string (empty string is accepted)][special character]\n
						**Special character**: [!#$%&()*+,-./:;<=>?@[]^_{|}~]\n
						**Example**: \`${prefix}${Command.PREFIX} md!\` or \`${prefix}${Command.PREFIX_1} !\`
					`,
					)
					.setColor(Color.SEAGREEN);
				message.reply({embeds: [messageEmbed]});
				return;
			case Command.GET_QUESTION:
			case Command.GET_QUESTION_1:
				messageEmbed
					.setTitle(
						`Documentation for command \`${Command.GET_QUESTION}\`/\`${Command.GET_QUESTION_1}\``,
					)
					.setDescription(
						`
						Get question\n
						**Command 1**: \`${prefix}${Command.GET_QUESTION} [year] [month] [question number]\`\n
						**Command 2**: \`${prefix}${Command.GET_QUESTION_1} [year] [month] [question number]\`\n
						**Example**: \`${prefix}${Command.GET_QUESTION} 2020 1 1\` or \`${prefix}${Command.GET_QUESTION_1} 2019 9 1\`
						**Year**: [any number (1900 ~ 2100)]\n
						**Month**: [0 ~ 11]\n
						**Question number**: [1 ~ 80]
					`,
					)
					.setColor(Color.SEAGREEN);
				message.reply({embeds: [messageEmbed]});
				return;
			case Command.GET_CURRENT_QUESTION:
			case Command.GET_CURRENT_QUESTION_1:
				messageEmbed
					.setTitle(
						`Documentation for command \`${Command.GET_CURRENT_QUESTION}\`/\`${Command.GET_CURRENT_QUESTION_1}\``,
					)
					.setDescription(
						`
						Get current question\n
						**Command 1**: \`${prefix}${Command.GET_CURRENT_QUESTION}\`\n
						**Command 2**: \`${prefix}${Command.GET_CURRENT_QUESTION_1}\`\n
					`,
					)
					.setColor(Color.SEAGREEN);
				message.reply({embeds: [messageEmbed]});
				return;
			case Command.ANSWER:
			case Command.ANSWER_1:
			case Command.ANSWER_2:
				messageEmbed
					.setTitle(
						`Documentation for command \`${Command.ANSWER}\`/\`${Command.ANSWER_1}\`/\`${Command.ANSWER_2}\``,
					)
					.setDescription(
						`
						Get question answer\n
						**Command 1**: \`${prefix}${Command.ANSWER}\`\n
						**Command 2**: \`${prefix}${Command.ANSWER_1}\`\n
						**Command 3**: \`${prefix}${Command.ANSWER_2}\`\n
					`,
					)
					.setColor(Color.SEAGREEN);
				message.reply({embeds: [messageEmbed]});
				return;
			case Command.SUBTITLE:
			case Command.SUBTITLE_1:
			case Command.SUBTITLE_2:
				messageEmbed
					.setTitle(
						`Documentation for command \`${Command.SUBTITLE}\`/\`${Command.SUBTITLE_1}\`/\`${Command.SUBTITLE_2}\``,
					)
					.setDescription(
						`
						Get question subtitle\n
						**Command 1**: \`${prefix}${Command.SUBTITLE} [locale]\`\n
						**Command 2**: \`${prefix}${Command.SUBTITLE_1} [locale]\`\n
						**Command 3**: \`${prefix}${Command.SUBTITLE_2} [locale]\`\n
						**Locale**: [vi, en, ja, ...](not required, default value is **vi**)\n
						**Example**: \`${prefix}${Command.SUBTITLE} en\` or \`${prefix}${Command.SUBTITLE_1} ja\`
					`,
					)
					.setColor(Color.SEAGREEN);
				message.reply({embeds: [messageEmbed]});
				return;
			case Command.PREV:
			case Command.PREV_1:
			case Command.PREV_2:
				messageEmbed
					.setTitle(
						`Documentation for command \`${Command.PREV}\`/\`${Command.PREV_1}\`/\`${Command.PREV_2}\``,
					)
					.setDescription(
						`
						Get previous question\n
						**Command 1**: \`${prefix}${Command.PREV}\`\n
						**Command 2**: \`${prefix}${Command.PREV_1}\`\n
						**Command 3**: \`${prefix}${Command.PREV_2}\`\n
					`,
					)
					.setColor(Color.SEAGREEN);
				message.reply({embeds: [messageEmbed]});
				return;
			case Command.NEXT:
			case Command.NEXT_1:
				messageEmbed
					.setTitle(
						`Documentation for command \`${Command.NEXT}\`/\`${Command.NEXT_1}\``,
					)
					.setDescription(
						`
						Get next question\n
						**Command 1**: \`${prefix}${Command.NEXT}\`\n
						**Command 2**: \`${prefix}${Command.NEXT_1}\`\n
					`,
					)
					.setColor(Color.SEAGREEN);
				message.reply({embeds: [messageEmbed]});
				return;
		}
	}

	// Default help
	messageEmbed
		.setTitle('List of commands')
		.setDescription(
			`
			You can use \`${prefix}${Command.HELP} [command name]\` if you want to see how to use one command\n\n
			**List of commands**:\n
			*Common commands*\n
			**\`${Command.HELP}\`**/**\`${Command.HELP_1}\`**/**\`${Command.HELP_2}\`**: Get this help.\n
			**\`${Command.PING}\`**/**\`${Command.PING_1}\`**: Get **Api** ping and **Message** ping.\n
			**\`${Command.PREFIX}\`**/**\`${Command.PREFIX_1}\`**: Set **Bot** prefix.\n
			**\`${Command.GET_QUESTION}\`**/**\`${Command.GET_QUESTION_1}\`**: Get question.\n
			**\`${Command.GET_CURRENT_QUESTION}\`**/**\`${Command.GET_CURRENT_QUESTION_1}\`**: Get current question.\n
			**\`${Command.ANSWER}\`**/**\`${Command.ANSWER_1}\`**/**\`${Command.ANSWER_2}\`**: Get question answer.\n
			**\`${Command.SUBTITLE}\`**/**\`${Command.SUBTITLE_1}\`**/**\`${Command.SUBTITLE_2}\`**: Get question subtitle.\n
			**\`${Command.PREV}\`**/**\`${Command.PREV_1}\`**/**\`${Command.PREV_2}\`**: Get previous question.\n
			**\`${Command.NEXT}\`**/**\`${Command.NEXT_1}\`**: Get next question.\n
		`,
		)
		.setColor(Color.SEAGREEN);
	message.reply({embeds: [messageEmbed]});
};
