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

// CSS Modules
const cssModuleNames = `${isDev ? '[path][name]__[local]__' : ''}[hash:base64:5]`
const matchCssLoader = /(^|!)(css-loader)($|!)/

// find the old CSS loader
const findCssLoader = (loaders, match) => {
  const found = loaders.filter(l => l && l.loader && l.loader.match(match))

  return found ? found[0] : null
}

const oldCssLoader = findCssLoader(config.module.loaders, matchCssLoader)


// create the new CSS loader
const newCssMatch = `$1$2?modules&localIdentName=${cssModuleNames}$3`
const newCssLoader = Object.assign({}, oldCssLoader, {
  test: /\.module\.css$/,
  include: [src],
  loader: oldCssLoader.loader.replace(matchCssLoader, newCssMatch)
})

// add to the existing loaders
config.module.loaders.push(newCssLoader)

// modify the old loader
oldCssLoader.test = new RegExp(`[^module]${oldCssLoader.test.source}`)
oldCssLoader.loader = newCssLoader.loader

// create another css loader to load css from node_modules
config.module.loaders.push({
  test: /\.css$/,
  include: [nodeModules],
  loader: 'style!css'
})

// PostCSS
config.postcss = [].concat([
  precss(),
  autoprefixer({
    browsers: ['last 2 versions']
  }),
  cssnano()
])

module.exports = config
