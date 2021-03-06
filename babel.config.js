/**
 * Configure Babel to target current version of Node
 * https://jestjs.io/docs/en/getting-started#using-babel
 */
module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
  ],
};
