const path = require('path');

const katexConfig = {
    entry: ['./katex.js'],
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'katex.js',
        library: 'katex',
        libraryTarget: 'umd',
        libraryExport: 'default',
    },
};

const copyTexConfig = {
    entry: ['./contrib/copy-tex/copy-tex.js'],
    output: {
        path: path.join(__dirname, 'build', 'contrib', 'copy-tex'),
        filename: 'copy-tex.js',
    },
};

const autoRenderConfig = {
    entry: ['./contrib/auto-render/auto-render.js'],
    output: {
        path: path.join(__dirname, 'build', 'contrib', 'auto-render'),
        filename: 'auto-render.js',
        library: 'renderMathInElement',
        libraryTarget: 'umd',
        libraryExport: 'default',
    },
};

const commonConfig = {
    module: {
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader',
                exclude: /node_modules\//,
            },
        ],
    },
    devtool: 'eval-source-map',
};

module.exports = {
    compilerConfig: [
        Object.assign({}, katexConfig, commonConfig),
        Object.assign({}, copyTexConfig, commonConfig),
        Object.assign({}, autoRenderConfig, commonConfig),
    ],
    devServerConfig: {
        publicPath: '/',
        contentBase: path.join(__dirname, 'build'),
        stats: {
            colors: true,
        },
    },
};
