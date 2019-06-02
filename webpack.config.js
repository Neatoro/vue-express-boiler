const dotenv = require('dotenv');
const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

const devEnvironment = process.env.NODE_ENV === 'dev';

dotenv.config();

module.exports = {
  entry: './src/js/app.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'app.bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ['vue-style-loader', 'css-loader']
      },
      {
        test: /\.scss$/,
        use: ['vue-style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin()
  ],
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    compress: true,
    proxy: {
      '/api/v1.0': {
        target: `http://localhost:${process.env.BACKEND_PORT}`
      }
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src', 'js')
    }
  },
  devtool: devEnvironment ? 'eval-source-map' : false,
};
