const path = require('path');

module.exports = {
  entry: 'sript/',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
