import webpack from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {BuildOptions} from "./types/config";

export function buildLoaders(option: BuildOptions): webpack.RuleSetRule[] {

    // Если не используем тайпскрипт - нужен babel-loader
    // ts-loader может работать с jsx файлами по-умолчанию
    const typescriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    }

    const cssLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            // Creates `style` nodes from js strings
            option.isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            // Translates CSS into CommonJS
            'css-loader',
            // Compiles Sass to CSS
            'sass-loader',
        ]
    }

    return [
        typescriptLoader,
        cssLoader,
    ]
}