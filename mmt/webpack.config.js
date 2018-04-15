var webpack = require('webpack')

module.exports = {
  entry: ['babel-regenerator-runtime', "./src/scripts/index.js"],
  output: {
    publicPath: "/dist/scripts/",
    path: __dirname + "/dist/scripts",
    filename: "bundle.js"
  },
  devServer: {
      historyApiFallback: true
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: "babel",
        exclude: "/node_modules",
        query: {
          presets: ["es2015", "stage-0", "react"],
          plugins: ["transform-async-to-generator"]
        }
      },
      {
        test: /\.scss$/,
        loaders: ["style", "css", "sass"],
        exclude: "/node_modules"
      },
      {
        test: /\.(?:png|jpg|svg)$/,
        loader: 'url-loader',
        use: 'file-loader?name=./public/img/[name].[ext]'
        // options: {
        //   name: 'images/[name]-[hash].[ext]'
        // }
      },
      { test: /\.map$/, use: "source-map-loader", enforce: "pre" }




    ]
  }
}
