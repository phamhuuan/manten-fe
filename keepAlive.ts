/* eslint-disable @typescript-eslint/no-non-null-assertion */
import express, {Request, Response} from 'express';
import Config from './src/configs/config';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import route from './src/routes';

dotenv.config();

const app = express();

app.use(express.json());

app.all('/*', function (req, res, next) {
	// CORS headers
	res.header('Access-Control-Allow-Origin', '*'); // restrict it to the required domain
	res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
	// Set custom headers for CORS
	res.header(
		'Access-Control-Allow-Headers',
		'Content-type,Accept,X-Access-Token,X-Key,Authorization',
	);
	if (req.method === 'OPTIONS') {
		res.status(200).end();
	} else {
		next();
	}
});

app.get('/', (req: Request, res: Response) => {
	return res.send('満点FE!');
});

app.use('/api', route);

mongoose.connect(process.env.MONGODB_URI!, {});

mongoose.connection.on('connected', () => {
	console.log('Connected to mongo');
});

app.listen(Config.PORT, () => {
	console.log(`Listening on port ${Config.PORT}`);
});
