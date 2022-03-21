// @ts-check
const webpack = require('webpack');
const path = require('path');

/** @type{import('webpack').Configuration} */
const config = {
  entry: './src/index.ts',
  output: {
    path: path.resolve(__dirname, 'lib'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(j|t)sx?$/,
        loader: 'babel-loader',
        options: {
          presets: [
            "@babel/preset-typescript",
            "@babel/preset-react"
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
      "fs": false,
      os: "os-browserify/browser",
      "dns": false,
      "child_process": false,
      "http": false,
      "https": false,
      "crypto": false,
      stream: "stream-browserify",
      _stream_duplex: "readable-stream/duplex",
      _stream_passthrough: "readable-stream/passthrough",
      _stream_readable: "readable-stream/readable",
      _stream_transform: "readable-stream/transform",
      _stream_writable: "readable-stream/writable",
      path: "path-browserify",
      util: "util",
      buffer: require.resolve('buffer/'),
      "net": false,
      "module": false,
      "assert": false,
      "tls": false,
    },
  },
  plugins: [
    new webpack.ProvidePlugin({
      process: 'process/browser',
    }),
    new webpack.DefinePlugin({
      'process.env': JSON.stringify({}),
      'process.platform': JSON.stringify('linux'),
      'process.versions': JSON.stringify({
        electron: 16, // Force makeWaitForNextTask to use setTimeout
      })
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
};

module.exports = config;