module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    'react-native-reanimated/plugin',
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          assets: './src/assets',
          components: './src/components',
          navigations: './src/navigation',
          screens: './src/screens',
          test: './', //TODO
          theme: './src/theme',
          utilities: './src/utilities',
        },
      },
    ],
  ],
};
