const babelLoader = function(conf) {
  return conf.loader && conf.loader.endsWith("/babel-loader/lib/index.js");
};

const pluginsToAdd = ["transform-decorators-legacy"];

module.exports = function override(config, env) {
  const babelrc = config.module.rules.find(babelLoader).options;

  babelrc.plugins = pluginsToAdd.concat(babelrc.plugins || []);

  return config;
};
