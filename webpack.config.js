const NODE_ENV = process.env.NODE_ENV

const fs = require('fs')
const path = require('path')
const webpack = require('webpack')
const createConfig = require('hjs-webpack')

const join = path.join

const isDev = NODE_ENV === 'development'
const isTest = NODE_ENV === 'test'

const root = path.resolve(__dirname)
const src = join(root, 'src')
const dist = join(root, 'dist')

const config = createConfig({
  in: join(src, 'app.js'),
  out: dist,
  isDev: isDev,
  clearBeforeBuild: true
})

module.exports = config
