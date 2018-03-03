import createConfig from './createConfig'

const version = process.env.VERSION || require('./package.json').version
const name = 'scroll-it'

export default createConfig({
  name,
  author: "Limichange",
  version
})
