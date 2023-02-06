import webpack from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {BuildOptions} from "./types/config";

export function buildLoaders({isDev}: BuildOptions):webpack.RuleSetRule[] {

    const cssLoaders = {
            test: /\.s[ac]ss$/i,
            use: [
                // Creates `style` nodes from JS strings
                // "style-loader",

                // Вместо style-loader добавляем MiniCssExtrractPlugin.loader
                isDev ? 'style-loader' : MiniCssExtractPlugin.loader,

                {
                    loader: 'css-loader',
                    options: {
                        modules: {
                            auto: (resPath: string) => Boolean(resPath.includes('.module.')),
                            // Генерируем названия по шаблонам как в output. Путь до компонента __ название класса и хэш
                            // Если не дев, то оставляем хэш из 8 символов
                            localIdentName: isDev
                                ? '[path][name]__[local]--[hash:base64:5]'
                                : '[hash:base64:8]',
                        },
                    }
                },

                // Translates CSS into CommonJS
                // "css-loader",
                // Compiles Sass to CSS
                "sass-loader",
            ],
        };

    // Если не используем тайпскрипт - нужен babel-loader
    const typeScriptLoader = {
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/,
        };
    return [
        typeScriptLoader,
        cssLoaders,
    ]
}