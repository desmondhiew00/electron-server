const express = require('express');
const path = require('path');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require('./routes/index').default;

export default () => {
  const app = express();
  const publicPath = path.resolve(__dirname, '../dist');
  const port = process.env.API_PORT || 7000;

  // point for static assets
  app.use(express.static(publicPath));

  // view engine setup
  app.set('views', path.join(__dirname, '../dist'));
  app.engine('html', require('ejs').renderFile); // eslint-disable-line global-require
  app.set('view engine', 'html');

  app.use(logger('dev'));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(
    cors({
      credentials: true,
      origin: true,
      exposedHeaders: 'Content-Disposition',
    })
  );

  routes(app);

  app.use(cookieParser());

  const server = app.listen(port, () => {
    // eslint-disable-next-line no-console
    console.log(`Express server listening on port ${port}`);
  });
  return { server, app };
};
