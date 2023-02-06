import HTMLWebpackPlugin from "html-webpack-plugin";
import path from "path";
import webpack from "webpack";
import {BuildOptions} from "./types/config";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export function buildPlugins({paths}: BuildOptions): webpack.WebpackPluginInstance[] {
    return [
        new HTMLWebpackPlugin({
            template: paths.html
        }),
        new webpack.ProgressPlugin(),
        new MiniCssExtractPlugin({
            // Какие названия будут у файлов и где будут располагаться
            // Шаблон для получения файлов и содержимого. Делается дла кэширования
            filename: 'css/[name].[contenthash:8].css',
            // Название для чанк. Когда будем разбивать на асинхронные чанки
            chunkFilename: 'css/[name].[contenthash:8].css'
        })
    ]
}