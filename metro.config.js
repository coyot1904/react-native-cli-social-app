const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');
const {
  wrapWithReanimatedMetroConfig,
} = require('react-native-reanimated/metro-config');

const defaultConfig = getDefaultConfig(__dirname);

// ✅ Correctly wrap the default Metro config with Reanimated
module.exports = wrapWithReanimatedMetroConfig(defaultConfig);
