const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const devServer = (isDev) => !isDev ? {} : {
    devServer: {
        open: true,
        hot: true,
        port: 3000,
    }
};

module.exports = ({develop}) => ({
    entry: {
        app: './src/index.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "[name].bundle.js",
        clean: true,
    },
    mode: develop ? 'development' : 'production',
    plugins: [
        new HtmlWebpackPlugin({
            title: "payment",
            template: './src/index.html'
        })
    ],
    module: {
        rules: [
            {
                test: /\.(|png|svg)$/i,
                type: 'asset/resource'
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
            },
        ]
    },
    ...devServer(develop),
});