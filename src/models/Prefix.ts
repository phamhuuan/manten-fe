import {Document, Model, model, Schema} from 'mongoose';

export interface Prefix {
	prefix: string;
	guildId: string;
}

export interface PrefixDocument extends Prefix, Document {}

export type PrefixModel = Model<PrefixDocument>;

const PrefixSchema = new Schema({
	prefix: {
		type: String,
		required: true,
	},
	guildId: {
		type: String,
		required: true,
	},
});

export default model<PrefixDocument, PrefixModel>('Prefix', PrefixSchema);
