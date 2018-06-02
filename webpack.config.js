const path = require ('path');

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      use: 'babel-loader',
      test: /\.js$/,
      exclude: /node_modules/ 
    },{
      use: ['style-loader', 'css-loader', 'sass-loader'],
      test: /\.s?css/
    }]
  },
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    historyApiFallback: true
  },
  devtool: 'cheap-module-eval-source-map'
}