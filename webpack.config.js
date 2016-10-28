/**
 * @Author: Wilson Ndirangu <wndirangu>
 * @Date:   2016-10-28T19:11:17+03:00
 * @Email:  wnwillyndirangu@gmail.com
* @Last modified by:   wndirangu
* @Last modified time: 2016-10-28T20:57:42+03:00
 * @License: MIT
 */
module.exports = {

    entry: './main.js',
    output: {
        path: './',
        filename: 'index.js'
    },
    devServer: {
        inline: true,
        port: 3333
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: 'node_modules',
            loader: 'babel',
            query: {
                presets: ['es2015', 'react']
            },
        }]


    }

}
