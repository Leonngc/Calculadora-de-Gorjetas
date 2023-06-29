const path = require('path');

module.exports = {
  entry: 'sript/app.js',
  output: {
    filename: 'script',
    path: path.resolve(__dirname, 'dist'),
  },
};
