import createConfig from '@limichange/create-rollup-lib-config'

export default createConfig({
  name: 'scroll-it',
  author: 'Limichange',
  version: process.env.VERSION || require('./package.json').version
})
