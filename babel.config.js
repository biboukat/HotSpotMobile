module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'babel-plugin-module-resolver',
      {
        root: ['./src'],
        alias: {
          '~': './src',
        },
      },
    ],
    ['@babel/plugin-proposal-decorators', {legacy: true}],
    // ['@babel/plugin-proposal-class-properties', {loose: false}],
  ],
};
