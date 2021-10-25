/* eslint-disable @typescript-eslint/no-non-null-assertion */
import {Client, Intents, Message} from 'discord.js';
import dotenv from 'dotenv';
import './keepAlive';
import handleCommand from './src/commands';
import PrefixData from './src/data/prefix';

dotenv.config();

export const client = new Client({
	intents: [
		Intents.FLAGS.GUILDS,
		Intents.FLAGS.GUILD_INTEGRATIONS,
		Intents.FLAGS.GUILD_MESSAGES,
		Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
		Intents.FLAGS.GUILD_VOICE_STATES,
	],
});

client.on('ready', async () => {
	console.log('Ready!');
	await PrefixData.getPrefixes();
});

client.on('messageCreate', async (message: Message) => {
	// Ignore messages from bots
	if (message.author.bot) return;

	// Get prefix from botPrefix variable
	const prefix = PrefixData.getPrefix(message.guildId!);

	// Ignore messages that don't start with the prefix
	if (!message.content.startsWith(prefix)) return;

	// Handel command
	handleCommand(message, prefix);
});

client.login(process.env.DISCORD_TOKEN);
