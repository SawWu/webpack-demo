var path = require('path');

module.exports = {
  entry: {
      index: './src/index.js',
      entry: './src/entry.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};