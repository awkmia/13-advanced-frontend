import webpack from "webpack";

export function buildLoaders(): webpack.RuleSetRule[] {

    // Если не используем тайпскрипт - нужен babel-loader
    // ts-loader может работать с jsx файлами по-умолчанию
    const typescriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    }

    return [
        typescriptLoader,
    ]
}