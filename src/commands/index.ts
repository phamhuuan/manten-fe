import {Message} from 'discord.js';
import Command from '../constants/commands';
import {help as helpHandler} from './common/help';
import {ping as pingHandler} from './common/ping';
import {prefix as prefixHandler} from './common/prefix';
import {answer as answerHandler} from './fe/answer';
import {getCurrentQuestion as getCurrentQuestionHandler} from './fe/getCurrentQuestion';
import {getQuestion as getQuestionHandler} from './fe/getQuestion';
import {translateQuestion as translateQuestionHandler} from './fe/translateQuestion';
import {prev as getPreviousQuestionHandler} from './fe/prev';
import {next as getNextQuestionHandler} from './fe/next';

const handleCommand = (message: Message, prefix: string) => {
	const args: string[] =
		message.content.slice(prefix.length).trim().split(/ +/) || [];

	if (args.length === 0) {
		return;
	}

	const command = args.shift()?.toLowerCase();

	if (!command) return;

	const paramMessage = args.join(' ');

	switch (command) {
		case Command.PING:
		case Command.PING_1:
			return pingHandler(message);
		case Command.HELP:
		case Command.HELP_1:
		case Command.HELP_2:
			return helpHandler(message, paramMessage, prefix);
		case Command.PREFIX:
		case Command.PREFIX_1:
			return prefixHandler(message, paramMessage, prefix);
		case Command.GET_QUESTION:
		case Command.GET_QUESTION_1:
			return getQuestionHandler(message, paramMessage);
		case Command.GET_CURRENT_QUESTION:
		case Command.GET_CURRENT_QUESTION_1:
			return getCurrentQuestionHandler(message);
		case Command.ANSWER:
		case Command.ANSWER_1:
		case Command.ANSWER_2:
			return answerHandler(message);
		case Command.SUBTITLE:
		case Command.SUBTITLE_1:
		case Command.SUBTITLE_2:
			return translateQuestionHandler(message, paramMessage);
		case Command.PREV:
		case Command.PREV_1:
		case Command.PREV_2:
			return getPreviousQuestionHandler(message);
		case Command.NEXT:
		case Command.NEXT_1:
			return getNextQuestionHandler(message);
	}
};

export default handleCommand;
