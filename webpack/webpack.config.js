/**
 * config webpack depending on mode 'dev' | 'prod'.
 */

const { merge } = require('webpack-merge')
const commonConfig = require('./webpack.common')

/**
 * @envVars is pass down from package.json script. 
 */
module.exports = (envVars) => {
    const { env } = envVars
    const envConfig = require(`./webpack.${env}.js`)
    const config = merge(commonConfig, envConfig)
    return config
}