import path from "path";
import webpack from "webpack";
import {buildPlugins} from "./config/build/buildPlugins";
import {buildResolvers} from "./config/build/buildResolvers";
import {buildLoaders} from "./config/build/buildLoaders";

const config: webpack.Configuration = {
    mode: 'development', //'production'
    // entry: {ANY_NAME: path.resolve(__dirname, 'src', 'index.ts')},
    entry: path.resolve(__dirname, 'src', 'index.ts'),
    module: {
        rules: buildLoaders(),
    },
    resolve: buildResolvers(),
    output: {
        filename: "[name].[contenthash].js",
        path: path.resolve(__dirname, 'build'),
        clean: true,
    },
    plugins: buildPlugins(),
}

export default config;