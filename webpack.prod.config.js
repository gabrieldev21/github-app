"use strict";

const path = require("path");
const webpack = require("webpack");
const validate = require("webpack-validator");

const HtmlPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const styles = new ExtractTextPlugin("[name]-[hash].css");
const crp = new ExtractTextPlugin("crp.css");

module.exports = validate({
  entry: path.join(__dirname, "src", "index"),

  output: {
    path: path.join(__dirname, "dist"),
    filename: "[name]-[hash].js",
  },

  plugins: [
    styles,
    crp,

    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: '"production"',
      },
    }),

    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false },
    }),

    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),

    new HtmlPlugin({
      title: "Github app",
      inject: false,
      template: path.join(__dirname, "src", "html", "template.html"),
    }),
  ],

  module: {
    preLoaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        include: /src/,
        loader: "standard",
      },
    ],

    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        include: /src/,
        loader: "babel",
      },
      {
        test: /\.css$/,
        exclude: /node_modules|(search|style)\.css/,
        include: /src/,
        loader: styles.extract("style", "css"),
      },
      {
        test: /(search|style)\.css$/,
        exclude: /node_modules/,
        include: /src/,
        loader: crp.extract("style", "css"),
      },
    ],
  },
});
