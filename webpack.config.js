// const webpack = require('webpack');
// const prod = process.argv.indexOf('-p') !== -1;

module.exports = {
  context: __dirname,
  entry: './frontend/instapups.jsx',
  output: {
    filename: './app/assets/javascripts/bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx', '*']
  },
  // plugins: [
  //   new webpack.DefinePlugin({
  //     'process.env': {
  //       NODE_ENV: JSON.stringify('production')
  //     }
  //   }),
  //   new webpack.optimize.UglifyJsPlugin()
  // ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  },
  devtool: 'source-maps'
};
