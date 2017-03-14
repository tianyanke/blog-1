var webpack = require('webpack');
var path = require('path');

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: {
    app: [
      'webpack-hot-middleware/client?path=http://localhost:4001/__webpack_hmr',
      'webpack/hot/only-dev-server',
      './web/static/app/app.ts'
    ],
    vendor: ["react", 'react-dom']
  },
  output: {
    path: path.join(__dirname, './priv/static'),
    publicPath: "http://localhost:4001/",
    filename: 'app.js',
  },
  module: {
    rules: [
      { test: /\.png$/, loader: "url-loader?limit=20480&name=images/[hash].[ext]" },
      { test: /\.jpg|\.svg$/, loader: "file-loader?name=images/[hash].[ext]" },
      { test: /\.tsx?$/, loaders: ["react-hot-loader/webpack", 'ts-loader'] }
    ]
  },
  resolve: {
    extensions: ['.webpack.js', '.tsx', '.ts', '.js'],
    modules: [
      path.join(__dirname, "web/static/app"),
      "node_modules"
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({ name: "vendor", filename: "[name].js" }),
    new webpack.HotModuleReplacementPlugin()
  ]
}