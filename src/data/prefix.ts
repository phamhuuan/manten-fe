import Config from '../configs/config';
import Prefix, {PrefixDocument} from '../models/Prefix';

type Prefixes = {
	[key: string]: string;
};

export default class PrefixData {
	private static _prefix: Prefixes = {};

	public static getPrefix(guildId: string): string {
		return this._prefix[guildId] ?? Config.PREFIX;
	}

	public static async setPrefix(guildId: string, prefix: string) {
		this._prefix[guildId] = prefix;

		// save to db
		// upsert = true (create if doesn't exist, update if exists)
		await Prefix.findOneAndUpdate({guildId}, {prefix}, {upsert: true});
	}

	public static setPrefixes(prefixes: {[key: string]: string}) {
		this._prefix = prefixes;
	}

	public static async getPrefixes() {
		const prefixes: PrefixDocument[] = await Prefix.find();
		this.setPrefixes(
			prefixes.reduce((acc: Prefixes, cur: PrefixDocument) => {
				acc[cur.guildId] = cur.prefix;
				return acc;
			}, {}),
		);
	}
}
