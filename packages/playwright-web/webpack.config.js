// @ts-check
const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

/** @type{import('webpack').Configuration} */
const config = {
  entry: './src/index.ts',
  output: {
    path: path.resolve(__dirname, 'lib'),
    filename: 'index.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        enforce: 'pre',
        use: ['source-map-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.(j|t)sx?$/,
        loader: 'babel-loader',
        options: {
          presets: [
            "@babel/preset-typescript",
          ]
        },
        exclude: /node_modules/
      }
    ]
  },
  devtool: 'source-map',
  resolve: {
    extensions: [
      '.tsx',
      '.ts',
      '.js'
    ],
    fallback: {
      'fs': false,
      'os': require.resolve('os-browserify/browser'),
      'dns': false,
      'child_process': false,
      'http': false,
      'https': false,
      'crypto': false,
      'stream': require.resolve('stream-browserify'),
      'path': require.resolve('path-browserify'),
      'util': require.resolve('util'),
      'url': require.resolve('url'),
      'buffer': require.resolve('buffer'),
      'net': false,
      'module': false,
      'assert': false,
      'tls': false,
      'zlib': require.resolve('browserify-zlib'),
      'inspector': false,
      'bufferutil': false,
      'utf-8-validate': false,
    },
  },
  plugins: [
    new webpack.ProvidePlugin({
      process: 'process/browser',
      Buffer: ['buffer', 'Buffer'],
    }),
    new webpack.DefinePlugin({
      'process.env': JSON.stringify({}),
      'process.platform': JSON.stringify('linux'),
      'process.versions': JSON.stringify({
        electron: 16, // Force makeWaitForNextTask to use setTimeout
      })
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "src", "index.html")
    })
  ],
  stats: { warnings: false },
  // @ts-ignore
  devServer: {
    static: {
      directory: path.join(__dirname, 'lib'),
    },
    compress: true,
    port: 9000,
    proxy: {
      '/pw-ws': {
        target: `ws://localhost:${process.env.PW_SERVER_PORT}`,
        ws: true,
      },
    },
  },
  ignoreWarnings: [(warning) => true]
};

module.exports = config;