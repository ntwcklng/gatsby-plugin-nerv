exports.modifyWebpackConfig = ({ config, stage }) => {
  if (stage !== `develop-html`) {
    config._config.resolve.alias = {
      react: `nervjs`,
      'react-dom': `nervjs`
    }
  }

  return config
}
