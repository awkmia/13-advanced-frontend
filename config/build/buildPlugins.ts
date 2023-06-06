import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import { BuildOptions } from './types/config';

export function buildPlugins({
    paths, isDev, apiUrl, analyze, project,
}: BuildOptions): webpack.WebpackPluginInstance[] {
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
            __API__: JSON.stringify(apiUrl),
            __PROJECT__: JSON.stringify(project),
        }),
        // new webpack.HotModuleReplacementPlugin(),

    ];

    if (analyze) {
        plugins.push(new BundleAnalyzerPlugin({
            analyzerMode: analyze ? 'server' : 'disabled',
            // опция нужна чтобы при true - открывалась в браузере, при false - только в консоли
            openAnalyzer: true,
        }));
    }

    if (isDev) {
        // Для отключения webpack_stack_tracer при появлении ошибки нужно передать в HMR react refresh plugin { overlay: false }
        plugins.push(new ReactRefreshWebpackPlugin({ overlay: true }));
        plugins.push(new webpack.HotModuleReplacementPlugin());
    }

    return plugins;
}
