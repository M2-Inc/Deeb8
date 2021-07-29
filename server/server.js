const express = require('express');
const path = require('path');
const PORT = 4000;
const app = express();
// import * as usersRouter from './routers/usersRouter';
const usersRouter = require('./routes/usersRouter');
const groupRouter = require('./routes/groupRouter');
const topicRouter = require('./routes/topicRouter');
const postsRouter = require('./routes/postsRouter');
const commentRouter = require('./routes/commentRouter');
// const cookieParser = require('cookie-parser') not installed yet

//parses the incoming json
app.use(express.json());
// app.use(cookieParser());

app.use(express.urlencoded({ extended: true }));

//routes to /signup
app.use('/signup', usersRouter);

//routes to /groups
app.use('/groups', groupRouter);

//routes to /topics
app.use('/topics', topicRouter);

//routes to /posts
app.use('/posts', postsRouter);

//routes to /comments
app.use('/comments', commentRouter);

//routes to login
//app.use('/login', loginRouter);

//supposed to serve the html
app.get('/', (req, res) => {
  res.set({
    'Content-Type': 'text/html',
    Charset: 'UTF-8',
  });
  return res.status(200).sendFile(path.join(__dirname, '../index.html'));
});

//error message for requests to routes that don't exist
app.use('*', (req, res) =>
  res.status(404).send("This is not the page you're looking for..."),
);

//global error handling
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

//listens on port
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});
