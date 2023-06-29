const path = require('path');

module.exports = {
  entry: 'sript/app.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
