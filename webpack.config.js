import path from 'path';

export default {
  devtool: 'source-map',
  entry:   [
    'babel-polyfill',
    path.join(__dirname, 'app/main.js')
  ],
  module:  {
    loaders: [
      {
        test:    /\.js$/,
        exclude: /node_modules/,
        loader:  'babel'
      }
    ]
  },
  output:  {
    path:       path.join(__dirname, 'public'),
    filename:   'index.js',
    publicPath: '/public/'
  }
}