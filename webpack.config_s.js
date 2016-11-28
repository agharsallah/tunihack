const path = require('path');
    const webpack = require('webpack');
    const notifier = require('node-notifier');

module.exports = {
    entry:  [
                'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000',
                //'./app/server/views/components/Index.js'
                './app/server/views/admin-components/Index.js'
            ],
    
    module: {
            loaders:    [{
                            test: /\.js$/,           
                             exclude: /node_modules/,
                            loaders: ['react-hot', 'babel']
                   
                        }]
    },

    resolve: {
                extensions: ['', '.js', '.jsx']
    },

    output: {
                path: __dirname + 'app/public',
                publicPath: '/',
               //filename: 'js/gulp/simplex.js'
                filename: 'js/gulp/adminx.js'
    },
    
    plugins: [
                new webpack.optimize.OccurenceOrderPlugin(),
                new webpack.HotModuleReplacementPlugin(),
                new webpack.NoErrorsPlugin(),
    ]
};