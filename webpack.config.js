
  var webpack = require('webpack');
  var ExtractTextPlugin = require('extract-text-webpack-plugin');

  const FILES = {
    js : 'build.js',
    css : 'style.css'
  }

  module.exports = {
    entry  : './src/main.js', // This is the "main" file which should include all other modules
    output : { // Where should the compiled file go?
      path       : './dist', // To the `dist` folder
      publicPath : './dist', // To the `dist` folder
      filename   : FILES.js // With the filename `build.js` so it's dist/build.js
    },
    watch : true,
    devtool : 'source-map',
    module : {
      loaders : [ // Special compilation rules
        {
          test    : /\.js$/, // Ask webpack to check: If this file ends with .js, then apply some transforms
          loader  : 'babel', // Transform it with babel
          exclude : /node_modules/ // don't transform node_modules folder (which don't need to be compiled)
        },
        {
          test   : /\.vue$/,
          loader : 'vue'
        },
        {
          test   : /\.scss$/,
          loader : ExtractTextPlugin.extract('style', 'css!sass')
        }
      ]
    },
    vue : {
      loaders : {
        js : 'babel'
      }
    },
    plugins : [
      new webpack.optimize.UglifyJsPlugin({
        compress: { warnings: false }
      }),
      new ExtractTextPlugin(FILES.css)
    ]
  };
