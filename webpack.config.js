const path = require('path');
const CKEditorWebpackPlugin = require( '@ckeditor/ckeditor5-dev-webpack-plugin' );
const { styles } = require( '@ckeditor/ckeditor5-dev-utils' );

module.exports = {
  plugins: [
    new CKEditorWebpackPlugin( {
        // See https://docs.ckeditor.com/ckeditor5/latest/features/ui-language.html
        language: 'en'
    } )
  ],
  entry: './src/index.js',
  output: {
    filename: 'ckeditor.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        // Or /ckeditor5-[^/]+\/theme\/icons\/[^/]+\.svg$/ if you want to limit this loader
        // to CKEditor 5's icons only.
        test: /\.svg$/,
        use: [ 'raw-loader' ]
      },
      {
        // Or /ckeditor5-[^/]+\/theme\/[\w-/]+\.css$/ if you want to limit this loader
        // to CKEditor 5's theme only.
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
            options: {
              singleton: true
            }
          },
          {
            loader: 'postcss-loader',
            options: styles.getPostCssConfig( {
              themeImporter: {
                themePath: require.resolve( '@ckeditor/ckeditor5-theme-lark' )
              },
              minify: true
            } )
          },
        ]
      }
    ]
  }
};
