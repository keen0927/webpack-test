const path = require('path');

module.exports = {
    mode: 'development',
    devtool: 'eval', // hidden-source-map
    resolve: {
        extensions: ['.jsx','.js'] // 엔트리 확장자 없앨 수 있음 client.js -> client
    },
    entry: {
        app: './client'
    },
    module: {
        rules: [{
            test: /\.jsx?$/,
            loader: 'babel-loader',
            options: {
                presets: [
                    ['@babel/preset-env', {
                        targets: {
                            browsers: ['> 5% in KR'], // browserslist
                        }
                    }],
                    '@babel/preset-react'
                ],
                plugins: [],
            },
        }],
    },
    output: {
        filename: 'app.js',
        path: path.join(__dirname, 'dist'),
    },
}