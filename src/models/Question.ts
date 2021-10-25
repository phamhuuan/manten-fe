import {Document, Model, model, Schema} from 'mongoose';

export interface Question {
	content?: string;
	year: number;
	month: number;
	questionNumber: number;
	image?: string;
	answerA?: string;
	answerB?: string;
	answerC?: string;
	answerD?: string;
	correctAnswer: string;
}

export interface QuestionDocument extends Question, Document {}

export type QuestionModel = Model<QuestionDocument>;

const QuestionSchema = new Schema({
	content: {
		type: String,
		required: false,
	},
	image: {
		type: String,
		required: false,
	},
	answerA: {
		type: String,
		required: false,
	},
	answerB: {
		type: String,
		required: false,
	},
	answerC: {
		type: String,
		required: false,
	},
	answerD: {
		type: String,
		required: false,
	},
	correctAnswer: {
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
});

export default model<QuestionDocument, QuestionModel>(
	'Question',
	QuestionSchema,
);
