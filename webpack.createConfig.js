const path = require('path');

module.exports = libraryTarget => {
  return {
    entry: './src/index.js',
    mode: 'production',
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader'
          }
        }
      ]
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: `immensity.${libraryTarget}.js`,
      library: 'iy',
      libraryTarget: libraryTarget
    }
  };
};
