import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import ReactRefreshPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
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
        new BundleAnalyzerPlugin({
            openAnalyzer: false,
        }),
        // process.env.analyze && new BundleAnalyzerPlugin(),

        // new BundleAnalyzerPlugin(
        //     { analyzerMode: process.env.STATS as 'server' || 'disabled' },
        // ),
    ];

    if (isDev) {
        // Для отключения webpack_stack_tracer при появлении ошибки нужно передать в HMR react refresh plugin { overlay: false }
        plugins.push(new ReactRefreshPlugin({ overlay: false }));
        plugins.push(new webpack.HotModuleReplacementPlugin());
    }

    return plugins;
}
