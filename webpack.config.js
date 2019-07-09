var path = require('path');
var webpack = require('webpack');
module.exports = {
    mode : 'development',
    entry : {
        index : "./src/index.js"
    },
    output : {
        filename : "./bundle.js"
    },
    module: {
        rules: [
            { test: /.jsx$/, exclude: /node_modules/, use: { loader: 'babel-loader', options: { presets: ['@babel/preset-react','@babel/preset-env'] } } },
            { test: /.js$/, exclude: /node_modules/, use: { loader: 'babel-loader', options: { presets: ['@babel/preset-env'] } } },
            {
                test: /\.s?css$/,
                use: [
                    'style-loader',
                    {
                        loader: "css-loader",
                    },
                    'sass-loader'
                ]
            }
        ]
    },
    plugins : [new webpack.HotModuleReplacementPlugin()]
};