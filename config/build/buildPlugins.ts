import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import ReactRefreshPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import { BuildOptions } from './types/config';

export function buildPlugins({ paths, isDev }: BuildOptions): webpack.WebpackPluginInstance[] {
    const plugins = [
        new HtmlWebpackPlugin({
            template: paths.html,
        }),
        new webpack.ProgressPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css',
        }),
        new webpack.DefinePlugin({
            __IS_DEV__: JSON.stringify(isDev),
        }),
        // new webpack.HotModuleReplacementPlugin(),
    ];

    if (isDev) {
        // Для отключения webpack_stack_tracer при появлении ошибки нужно передать в HMR react refresh plugin { overlay: false }
        plugins.push(new ReactRefreshPlugin({ overlay: false }));
        plugins.push(new webpack.HotModuleReplacementPlugin());
    }

    return plugins;
}
