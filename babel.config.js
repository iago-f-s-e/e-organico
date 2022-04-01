module.exports = function(api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      'babel-plugin-transform-typescript-metadata',
      [
        "module-resolver",
        {
          root: ["./src"],
          extensions: [
            ".ios.ts",
            ".android.ts",
            ".ts",
            ".ios.tsx",
            ".android.tsx",
            ".tsx",
            ".jsx",
            ".js",
            ".json",
            ".png"
          ],
          alias: {
            '@src': './src',
            '@assets': './src/assets',
          }
        }
      ],
      "inline-dotenv"
    ]
  };
};
