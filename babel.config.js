module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      require.resolve("expo-router/babel"), 
      "react-native-reanimated/plugin",
      ['module-resolver',
      {
        root: ['./'],
        alias: {
          /**
           * Regular expression is used to match all files inside `./src` directory and map each `.src/folder/[..]` to `~folder/[..]` path
           */
          '^~/(.+)': './app/\\1',
        },
      }]
  ],
  };
};
