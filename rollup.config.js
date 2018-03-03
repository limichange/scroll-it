import buble from 'rollup-plugin-buble'
import uglify from 'rollup-plugin-uglify'

const version = process.env.VERSION || require('./package.json').version
const name = 'scroll-it'
const banner =
  '/*!\n' +
  ' * ' + name + '.js v' + version + '\n' +
  ' * (c) 2018-' + new Date().getFullYear() + ' Limichange\n' +
  ' * Released under the MIT License.\n' +
  ' */'

export default [{
  input: 'src/index.js',
  plugins: [
    buble(),
    uglify()
  ],
  output: [
    {
      file: 'dist/scroll-it.min.js',
      format: 'umd',
      name,
      banner
    }
  ]
}, {
  input: 'src/index.js',
  plugins: [
    buble()
  ],
  output: [
    {
      file: 'dist/scroll-it.js',
      format: 'umd',
      name,
      banner
    },
    {
      file: 'dist/scroll-it.common.js',
      format: 'cjs',
      banner
    },
    {
      file: 'dist/scroll-it.esm.js',
      format: 'es',
      banner
    }
  ]
}]
