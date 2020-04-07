import express from 'express';
import mongoose from 'mongoose';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import srdRouter from './routes/srd';
import indexRouter from './routes/index';
// import usersRouter from './routes/users';

const app = new express(); // eslint-disable-line new-cap
const mongoURI = process.env.MONGO_URL;

mongoose.connect(
  mongoURI,
  { useNewUrlParser: true, useUnifiedTopology: true },
);
const db = mongoose.connection;
// @TODO: look into using morgan correctly
logger(db);

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public')));
app.use('/', indexRouter);
app.use('/srd', srdRouter);
// app.use('/users', usersRouter);

export default app;

// app.get('/', (req, res) => {
//   res.send('Hello World!');
// });
//
// app.listen(3000, () => {
//   console.log('Server up!'); // eslint-disable-line no-console
// });
