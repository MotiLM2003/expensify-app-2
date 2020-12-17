const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

let absolutePath = path.join(__dirname, 'public');

module.exports = (env) => {
  const isProduction = env !== undefined && env.production;

  return {
    mode: 'development',
    entry: './src/app.js',
    // entry: './src/sandbox/hoc.js',
    output: {
      path: absolutePath,
      filename: 'bundle.js',
    },
    performance: {
      hints: false,
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
          },
        },
        {
          test: /\.s?css$/,
          // use: ['style-loader', 'css-loader', 'sass-loader'],
          use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
        },
      ],
    },
    plugins: [new MiniCssExtractPlugin()],
    devtool: isProduction ? false : 'inline-source-map',
    devServer: {
      // Serve index.html as the base
      contentBase: path.join(__dirname, 'public'),
      historyApiFallback: true,
    },
  };
};
