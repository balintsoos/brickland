const NODE_ENV = process.env.NODE_ENV

const path = require('path')
const join = path.join
const createConfig = require('hjs-webpack')

const precss = require('precss')
const cssnano = require('cssnano')
const autoprefixer = require('autoprefixer')

const root = path.resolve(__dirname)
const src = join(root, 'src')
const dist = join(root, 'dist')

const isDev = NODE_ENV === 'development'

const config = createConfig({
  isDev,
  in: join(src, 'app.js'),
  out: dist,
  clearBeforeBuild: true
})

config.postcss = [].concat([
  precss(),
  autoprefixer({
    browsers: ['last 2 versions']
  }),
  cssnano()
])

module.exports = config
