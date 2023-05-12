import webpack from "webpack";
import {BuildOptions} from "./types/config";
import {buildLoaders} from "./buildLoaders";
import {buildResolvers} from "./buildResolvers";
import {buildPlugins} from "./buildPlugins";
import {buildDevServer} from "./buildDevServer";

export function buildWebpackConfig(option : BuildOptions): webpack.Configuration {
    const {paths, mode, isDev} = option

    return {
        mode,
        // entry: {ANY_NAME: path.resolve(__dirname, 'src', 'index.ts')},
        entry: paths.entry,
        module: {
            rules: buildLoaders(),
        },
        resolve: buildResolvers(),
        output: {
            filename: "[name].[contenthash].js",
            path: paths.build,
            clean: true,
        },
        plugins: buildPlugins(option),
        devtool: isDev ? 'inline-source-map' : undefined,
        devServer: isDev ? buildDevServer(option) : undefined,
    }
}