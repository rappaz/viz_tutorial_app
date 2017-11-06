var webpack = require('webpack');
var path = require('path');
var dir_js = path.resolve(__dirname, 'src');
var dir_jsx = path.resolve(__dirname, 'src/jsx');
var dir_build = path.resolve(__dirname, 'build');

module.exports = {
    entry: path.resolve(dir_js,'visualization_source.js'),
    output: {
        path: __dirname,
        filename: 'visualization.js',
        libraryTarget: 'amd'
    },
    module: {
        loaders: [
            {
               test: dir_jsx,
               loader: 'babel-loader',
               query: {
                  presets: ['es2015', 'react']
               }
             }
         ]
    },
    externals: [
        'api/SplunkVisualizationBase',
        'api/SplunkVisualizationUtils'
    ]
};
