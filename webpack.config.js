const path = require('path')
const join = path.join
const createConfig = require('hjs-webpack')

// PostCSS plugins
const precss = require('precss')
const cssnano = require('cssnano')
const autoprefixer = require('autoprefixer')

// paths
const root = path.resolve(__dirname)
const src = join(root, 'src')
const dist = join(root, 'dist')
const nodeModules = join(root, 'node_modules')

// env
const NODE_ENV = process.env.NODE_ENV
const isDev = NODE_ENV === 'development'

// config
const config = createConfig({
  isDev,
  in: join(src, 'app.js'),
  out: dist,
  clearBeforeBuild: true
})

// reference paths with alias
config.resolve.root = [src, nodeModules]
config.resolve.alias = {
  components: join(src, 'components'),
  routes: join(src, 'routes'),
  styles: join(src, 'styles')
}

config.postcss = [
  precss({}),
  autoprefixer({
    browsers: ['last 2 versions']
  }),
  cssnano({})
]


module.exports = config
