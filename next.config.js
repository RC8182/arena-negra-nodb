// next.config.js

module.exports = {
    webpack: (config) => {
      config.module.rules.push({
        test: /\.(mp4|webm)$/,
        use: {
          loader: 'file-loader',
          options: {
            publicPath: '/_next',
            outputPath: 'static/images/', // Adjust the output path as needed
            name: '[name].[ext]',
          },
        },
      });
  
      return config;
    },
  };
  