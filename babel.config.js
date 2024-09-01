module.exports = {
  presets: [
    ['@babel/preset-env', { targets: { node: 'current' } }],
    '@babel/preset-react',
  ],
  plugins: [
    '@babel/plugin-syntax-import-assertions'
    // '@babel/plugin-syntax-import-attributes',
  ],
};
