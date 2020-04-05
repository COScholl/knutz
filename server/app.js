import express from 'express';
import mongoose from 'mongoose';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import srdRouter from './routes/srd';
import indexRouter from './routes/index';
// import usersRouter from './routes/users';

const app = new express(); // eslint-disable-line new-cap
// @TODO: set up docker container between knutz and naresso
const mongoURI = 'mongodb://root:rootpassword@localhost:20000/admin';

mongoose.connect(
  mongoURI,
  { useNewUrlParser: true, useUnifiedTopology: true },
);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Mongo connection error'));

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
