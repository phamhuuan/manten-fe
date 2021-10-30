import {Document, Model, model, Schema} from 'mongoose';

export interface UserAnswer {
	year: number;
	month: number;
	questionNumber: number;
	userId: string;
	guildId: string;
	answer: string;
}

export interface UserAnswerDocument extends UserAnswer, Document {}

export type UserAnswerModel = Model<UserAnswerDocument>;

const UserAnswerSchema = new Schema({
	answer: {
		type: String,
		required: true,
	},
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
	userId: {
		type: String,
		required: true,
	},
	guildId: {
		type: String,
		required: true,
	},
});

export default model<UserAnswerDocument, UserAnswerModel>(
	'UserAnswer',
	UserAnswerSchema,
);
