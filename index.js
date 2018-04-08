const express = require('express');
const expressWinston = require('express-winston');
const winston = require('winston');
const morgan = require('morgan');

const router = require('./router');

const app = express();

app.use(morgan('combined'));

app.use(router)

app.use(expressWinston.errorLogger({
  transports: [
    new winston.transports.Console({
      json: true,
      colorize: true
    })
  ]
}));

app.use(router.errorHandler);

app.listen(process.env.PORT || 3000, () => {
  console.log("App is ready.");
});