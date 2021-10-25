export default class Config {
	static readonly PORT: string | number = process.env.PORT || 3000;
	static readonly PREFIX: string = '!';
}
