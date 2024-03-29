module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    'eslint:recommended',
    '@vue/standard'
  ],
  rules: {
    'vue/max-attributes-per-line': 'off',
    'vue/comment-directive': 'off'
  }
}
