var path = require('path');
var webpack = require('webpack');

function getConfig(minified) {
    const config = {
        entry: './layer/LayerEle.jsx',
        output: {
            path: path.resolve('dist'),
            library: 'layer',
            libraryTarget: 'umd',
            filename: 'layer.js',
        },
        target: 'web',
        externals: {
            react: {
                root: 'React',
                commonjs: 'react',
                commonjs2: 'react',
                amd: 'react',
            },
            'prop-types': {
                root: 'PropTypes',
                commonjs: 'prop-types',
                commonjs2: 'prop-types',
                amd: 'prop-types',
            },
        },
        module: {
            loaders: [{
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },  {
                test : /\.css$/,
                loader: 'style-loader!css-loader'
            },{
                test: /\.(png|jpg|gif)$/,
                loader: 'url-loader?limit=8192'
            } ],
        },
    };

    if (minified) {
        config.plugins = [
            new webpack.optimize.ModuleConcatenationPlugin(),
            new webpack.optimize.UglifyJsPlugin(),
            new webpack.DefinePlugin({
                'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
            }),
        ];
    }

    return config;
}

module.exports = [
    getConfig(),
];
