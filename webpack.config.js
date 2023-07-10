const path = require('path');

module.exports = {
  entry: 'script/app.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
