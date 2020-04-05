import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import indexRouter from './routes/index';
import usersRouter from './routes/users';

const app = new express(); // eslint-disable-line new-cap
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public')));
app.use('/', indexRouter);
app.use('/users', usersRouter);

export default app;

// app.get('/', (req, res) => {
//   res.send('Hello World!');
// });
//
// app.listen(3000, () => {
//   console.log('Server up!'); // eslint-disable-line no-console
// });
