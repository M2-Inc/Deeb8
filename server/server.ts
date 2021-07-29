import express from 'express';
const path = require('path');

const PORT = 3000;
const app = express();
// const cookieParser = require('cookie-parser') not installed yet

app.use(express.json());
// app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.set({
    'Content-Type': 'text/html',
    Charset: 'UTF-8',
  });
  return res.status(200).sendFile(path.join(__dirname, '../index.html'));
});

app.use('*', (req, res) =>
  res.status(404).send("This is not the page you're looking for..."),
);

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

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});
