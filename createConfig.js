import buble from 'rollup-plugin-buble'
import uglify from 'rollup-plugin-uglify'

export default function createConfig ({
  input = 'src/index.js',
  distDir = 'dist',
  author,
  name,
  version
}) {
  if (!name) {
    throw new Error('need a lib name')
  }

  const banner =
    '/*!\n' +
    ' * ' + name + '.js v' + version + '\n' +
    ' * (c) 2018-' + new Date().getFullYear() + ` ${author}\n` +
    ' * Released under the MIT License.\n' +
    ' */'

  return [{
    input,
    plugins: [
      buble(),
      uglify()
    ],
    output: [
      {
        file: `${distDir}/${name}.min.js`,
        format: 'umd',
        name,
        banner
      }
    ]
  }, {
    input,
    plugins: [
      buble()
    ],
    output: [
      {
        file: `${distDir}/${name}.js`,
        format: 'umd',
        name,
        banner
      },
      {
        file: `${distDir}/${name}.common.js`,
        format: 'cjs',
        banner
      },
      {
        file: `${distDir}/${name}.esm.js`,
        format: 'es',
        banner
      }
    ]
  }]
}
