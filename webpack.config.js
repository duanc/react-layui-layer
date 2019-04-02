var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: path.resolve(__dirname, 'layer/LayerEle.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        libraryTarget: 'commonjs2'
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        loaders: [{
            test: /\.js?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
        },{
            test: /\.css$/,
            loader: 'style-loader!css-loader'
        }]
    },
    //devtool: "cheap-eval-source-map",
    /*	devServer: {
            historyApiFallback: true,
            hot: true,
            inline: true,
            //progress: true,
        },*/
    /*	plugins: [
            new webpack.DefinePlugin({
                'process.env.NODE.ENV':"development"
            }),
            new webpack.HotModuleReplacementPlugin()
        ]*/
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production')
            }
        }),
        new webpack.optimize.UglifyJsPlugin()
    ]
};

			