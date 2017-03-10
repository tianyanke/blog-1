var webpack = require('webpack');
var path = require('path');

module.exports = {
  devtool: 'source-map',
  entry: {
    app: [
      'webpack-hot-middleware/client?http://0.0.0.0:4001',
      'webpack/hot/only-dev-server',
      './app/app.ts'
    ],
    vendor: ["react", 'react-dom']
  },
  output: {
    path: path.join(__dirname, './priv/static'),
    publicPath: "http://localhost:4001/",
    filename: 'app.js',
  },
  module: {
    loaders: [
      { test: /\.png$/, loader: "url-loader?limit=20480&name=images/[hash].[ext]" },
      { test: /\.jpg|\.svg$/, loader: "file-loader?name=images/[hash].[ext]" },
      { test: /\.tsx?$/, loaders: ["react-hot", 'ts'] }
    ]
  },
  resolve: {
    extensions: ['', '.webpack.js', '.tsx', '.ts', '.js'],
    modulesDirectories: ['node_modules', 'app']
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin("vendor", "[name].js"),
    new webpack.optimize.CommonsChunkPlugin({
      name: "commons",
      filename: "common.bundle.js"
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
}