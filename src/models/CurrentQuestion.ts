import {Document, Model, model, Schema} from 'mongoose';

export interface CurrentQuestion {
	year: number;
	month: number;
	questionNumber: number;
	guildId: string;
}

export interface CurrentQuestionDocument extends CurrentQuestion, Document {}

export type CurrentQuestionModel = Model<CurrentQuestionDocument>;

const CurrentQuestionSchema = new Schema({
	year: {
		type: Number,
		required: true,
	},
	month: {
		type: Number,
		required: true,
	},
	questionNumber: {
		type: Number,
		required: true,
	},
	guildId: {
		type: String,
		required: true,
	},
});

export default model<CurrentQuestionDocument, CurrentQuestionModel>(
	'CurrentQuestion',
	CurrentQuestionSchema,
);
