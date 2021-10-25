import express from 'express';
import questionRoute from './questions';

const v1Route = express.Router();

v1Route.use('/questions', questionRoute);

export default v1Route;
