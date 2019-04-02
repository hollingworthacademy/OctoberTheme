const path = require('path');
const ExtractText = require('extract-text-webpack-plugin');

module.exports = {
    mode: 'none',
    entry: {
        theme: ['./js/theme.js', './scss/theme.scss'],
        vendor: ['./js/vendor.js', './scss/vendor.scss']
    },
    output: {
        filename: 'js/[name].js',
        path: path.resolve(__dirname, 'assets')
    },
    context: path.resolve(__dirname, 'src'),
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ExtractText.extract({
                    use: ['css-loader']
                })
            },
            {
                test: /\.scss$/,
                use: ExtractText.extract({
                    use: ['css-loader', 'sass-loader']
                })
            },
            {
                test: /\.(eot|woff|woff2|svg|ttf)$/,
                use: {loader: 'file-loader', options: {name: 'fonts/[hash]-[name].[ext]', publicPath: '..'}}
            },
            {
                test: /\.(jpg|jpeg|png)$/,
                use: {loader: 'file-loader', options: {name: 'images/[hash]-[name].[ext]', publicPath: '..'}}
            }
        ]
    },
    plugins: [
        new ExtractText('css/[name].css')
    ]
}