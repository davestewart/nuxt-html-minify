export default {
  mode: 'universal',
  build: {
    // should work, but doesn't
    html: {
      minify: {
        collapseWhitespace: true,
        collapseInlineTagWhitespace: true,
        collapseBooleanAttributes: true,
        decodeEntities: true,
        minifyCSS: true,
        minifyJS: true,
        processConditionalComments: true,
        removeEmptyAttributes: true,
        removeRedundantAttributes: true,
        trimCustomFragments: true,
        useShortDoctype: true
      }
    },

    // does work, but not documented
    loaders: {
      vue: {
        compilerOptions: {
          // whitespace: 'condense'
        }
      }
    }
  }
}
