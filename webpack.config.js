/**
 * Created by slashhuang on 16/3/8.
 */

var path =require('path');
module.exports = {
    entry: {
        'single-reducer':"./example/demo1/single-reducer.js",
         'multi-reducer':"./example/demo2/multi-reducer.js",
         'middleware':"./example/demo3/middleware.js",
         'react-redux':"./example/demo4/react-redux.js"
    },
    output: {
        publicPath:'/dist/',
        path: path.join(__dirname,'dist'),
        filename: "[name].js"
    },
    module: {
        loaders: [
            {   test: /\.jsx?$/,
                loader: "babel-loader",
                exclude: /node_modules/,
                query: {
                    presets: ['react','es2015'],
                    plugins: ['transform-decorators-legacy' ],
                }  
            },

        ],
        resolve: {
            extensions: ['', '.js', '.jsx']
        }
    }
};