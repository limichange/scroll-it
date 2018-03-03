import createConfig from './createConfig'

export default createConfig({
  name: 'scroll-it',
  author: 'Limichange',
  version: process.env.VERSION || require('./package.json').version
})
