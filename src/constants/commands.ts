const prefix = 'mantenfe_';

export default class Command {
	// Command ping
	public static readonly PING: string = 'ping';
	public static readonly PING_1: string = `${prefix}ping`;

	// Command help
	public static readonly HELP: string = 'help';
	public static readonly HELP_1: string = `${prefix}help`;
	public static readonly HELP_2: string = 'h';

	// Command update prefix
	public static readonly PREFIX: string = 'prefix';
	public static readonly PREFIX_1: string = `${prefix}prefix`;

	// Command get current test
	public static readonly GET_CURRENT_QUESTION: string = 'currentquestion';
	public static readonly GET_CURRENT_QUESTION_1: string = `${prefix}currentquestion`;

	public static readonly GET_QUESTION: string = 'question';
	public static readonly GET_QUESTION_1: string = `${prefix}question`;

	public static readonly ANSWER: string = 'ans';
	public static readonly ANSWER_1: string = 'answer';
	public static readonly ANSWER_2: string = `${prefix}answer`;

	public static readonly SUBTITLE: string = 'sub';
	public static readonly SUBTITLE_1: string = 'subtitle';
	public static readonly SUBTITLE_2: string = `${prefix}subtitle`;

	public static readonly PREV: string = 'prev';
	public static readonly PREV_1: string = 'previous';
	public static readonly PREV_2: string = `${prefix}previous`;

	public static readonly NEXT: string = 'next';
	public static readonly NEXT_1: string = `${prefix}next`;
}
