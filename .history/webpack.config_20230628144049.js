const path = require('path');

module.exports = {
  entry: 'sript/app.js',
  output: {
    filename: 'script/validation.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
