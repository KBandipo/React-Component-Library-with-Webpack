const path = require('path')

module.exports = {
    entry: "./src/index.ts",
    mode: "production",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "index.js",
        globalObject: `typeof self !== 'undefined' ? self : this`,
        libraryTarget: "umd",
        library: "ReactComponentLibrary"
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: [ "ts-loader"],
                exclude: /node_modules/,
            },
            {
              test: /\.css$/,
              use: ["style-loader","css-loader"]
          }
        ]
    },
    resolve: {
        extensions: [".tsx", ".ts"]
    },
    externals: {
        react: "react"
    }
}