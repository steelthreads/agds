module.exports = {
  plugins: ["babel-plugin-styled-components"],
  ignore: ["components/**/*.stories.tsx"],
  presets: [
    "@babel/preset-typescript",
    "@babel/preset-env",
    "@babel/preset-react",
  ],
  minified: true,
  comments: false,
};
