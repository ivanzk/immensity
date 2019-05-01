const createConfig = require('./webpack.createConfig.js');

module.exports = [
  createConfig('this'),
  createConfig('var'),
  createConfig('commonjs2')
];
