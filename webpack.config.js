<<<<<<< HEAD
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
=======
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
>>>>>>> 8e973de105bffc901698cd61e2d454c4c22ef4b6

module.exports = {
  // Entry file
  entry: [
<<<<<<< HEAD
    path.resolve(__dirname, './src/js/index.js'),
    path.resolve(__dirname, './src/scss/style.scss')
  ],

  // output file
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: './js/bundle.js'
  },

  // Source maps for easier debugging
  devtool: 'source-map',
=======
    './src/js/index.js'
  ],

  // Output file
  output: {
    filename: './js/bundle.js',
    path: path.resolve(__dirname, 'dist') // Add output path
  },

  // Source maps for easier debugging
  devtool: "source-map",
>>>>>>> 8e973de105bffc901698cd61e2d454c4c22ef4b6

  module: {
    rules: [
      // Transpile js with babel
      {
        test: /\.js$/,
        include: path.resolve(__dirname, 'src/js'),
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
<<<<<<< HEAD
            presets: ['@babel/preset-env']
=======
            presets: ['@babel/preset-env'],
>>>>>>> 8e973de105bffc901698cd61e2d454c4c22ef4b6
          }
        }
      },

      // Compile SCSS to CSS
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader, // Extract css to separate file
          'css-loader', // translates CSS into CommonJS
          'postcss-loader', // parse CSS and add vendor prefixes to CSS rules
<<<<<<< HEAD
          'sass-loader' // compiles Sass to CSS, using Node Sass by default
        ]
      },

      {
        test: /\.css$/,
        use: ['style-loader']
=======
          'sass-loader', // compiles Sass to CSS, using Node Sass by default
        ],
>>>>>>> 8e973de105bffc901698cd61e2d454c4c22ef4b6
      },

      // Include fonts from css
      {
        test: /\.(eot|ttf|woff|woff2)$/,
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[name][ext]'
        }
      },

      // Include images from css
      {
        test: /\.(svg|png|jpg|jpeg|webp)$/,
        type: 'asset/resource',
        generator: {
          filename: 'static/[name][ext]'
        }
<<<<<<< HEAD
      }
    ]
=======
      },
    ],
>>>>>>> 8e973de105bffc901698cd61e2d454c4c22ef4b6
  },
  plugins: [
    // Include html file, styles and scripts will be automatically injected
    new HtmlWebpackPlugin({
<<<<<<< HEAD
      title: 'CBS FINAL',
=======
      title: 'Webpack 5 Starter',
>>>>>>> 8e973de105bffc901698cd61e2d454c4c22ef4b6
      template: './src/index.html',
      inject: true,
      minify: {
        removeComments: true,
<<<<<<< HEAD
        collapseWhitespace: false
=======
        collapseWhitespace: false,
>>>>>>> 8e973de105bffc901698cd61e2d454c4c22ef4b6
      }
    }),

    // Extract styles to a separate file
    new MiniCssExtractPlugin({
<<<<<<< HEAD
      filename: 'style.css'
=======
      filename: 'style.css',
>>>>>>> 8e973de105bffc901698cd61e2d454c4c22ef4b6
    }),

    // Copy images
    new CopyWebpackPlugin({
      patterns: [
        {
          from: './src/img',
<<<<<<< HEAD
          to: 'img'
        }
=======
          to: 'img',
        },
>>>>>>> 8e973de105bffc901698cd61e2d454c4c22ef4b6
      ]
    })
  ],
  devServer: {
    static: path.join(__dirname, 'dist'), // Updated from contentBase
    compress: true,
    port: 9000,
    hot: true, // Enable Hot Module Replacement
    watchFiles: {
<<<<<<< HEAD
      paths: ['src/**/*'] // Watch for changes in source files
=======
      paths: ['src/**/*'], // Watch for changes in source files
>>>>>>> 8e973de105bffc901698cd61e2d454c4c22ef4b6
    },
    client: {
      overlay: true // Show errors and warnings in the browser
    }
<<<<<<< HEAD
  }
}
=======
  },
};
>>>>>>> 8e973de105bffc901698cd61e2d454c4c22ef4b6
