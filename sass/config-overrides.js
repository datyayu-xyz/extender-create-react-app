const findFileLoader = function(rule) {
  return rule.loader && rule.loader.endsWith("/file-loader/index.js");
};

module.exports = function override(config, env) {
  // Exclude sass files from the file-loader
  const fileLoader = config.module.rules.find(findFileLoader);
  fileLoader.exclude.push(/\.scss$/);

  config.module.rules.push({
    test: /\.scss$/,
    loader: ["style-loader", "css-loader", "sass-loader"]
  });

  return config;
};
