
const path = require('path')
const CopyPlugin = require('copy-webpack-plugin');

const tsRules = [
    {
        test: /\.ts(x?)$/,
        include: __dirname,
        exclude: /node_modules/,
        use: [
            {
                loader: "ts-loader"
            }
        ]
    },
    // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
    {
        enforce: "pre",
        test: /\.js$/,
        loader: "source-map-loader"
    }
]

copyPlugin = 

module.exports = env => {
    // Use env.<YOUR VARIABLE> here:
    
    console.log('NODE_ENV: ', env.NODE_ENV);

    plugins = []
    outputRoot = ""
    if (env.NODE_ENV === 'production') {
        outputRoot = "_dist"
        plugins.push(new CopyPlugin({
            patterns: [
                { from: path.resolve(__dirname, 'public'), to: path.resolve(__dirname, outputRoot, 'public') },
            ],
        }))   
    }
  
    return {
        mode: env.NODE_ENV,
        target: 'web',
        // Enable sourcemaps for debugging webpack's output.
        devtool: "source-map",

        resolve: {
            // Add '.ts' and '.tsx' as resolvable extensions.
            extensions: [".ts", ".tsx"]
        },
        //entry: path.resolve(__dirname, 'public/script/index.tsx'),
        entry: {
            'index.js': path.resolve(__dirname, 'public/script/index.tsx')
        },
        module: {
            rules: tsRules
        },
        output: {
            path: path.resolve(__dirname, outputRoot, 'public/script'),
            filename: 'index.js'
        },
        // When importing a module whose path matches one of the following, just
        // assume a corresponding global variable exists and use that instead.
        // This is important because it allows us to avoid bundling all of our
        // dependencies, which allows browsers to cache those libraries between builds.
        externals: {
            "react": "React",
            "react-dom": "ReactDOM"
        },
        plugins: plugins
    }
}