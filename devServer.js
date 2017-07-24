const express = require('express');
const webpack = require('webpack');
const config = require('./webpack.config.dev');
const router = require('./server/routes');
const db = require('./db/database');

const app = express();
const compiler = webpack(config);

app.use(
  require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
  })
);

app.use(require('webpack-hot-middleware')(compiler));

app.use('/public', express.static('public'));

app.use(router);

app.listen(5000, function(err) {
  if (err) {
    console.log(err);
    return;
  }

  console.log('Listening at http://localhost:5000');
});
