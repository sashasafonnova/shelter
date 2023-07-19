import webpack, { DefinePlugin } from 'webpack';
import { BuildOptions } from './types/config';
import { buildDevServer } from './buildDevServer';
import HTMLWebpackPlugin from 'html-webpack-plugin';
import { buildWebpackLoaders } from './buildWebpackLoaders';

export function buildWebpackConfig (options: BuildOptions): webpack.Configuration {

   const {paths, mode, isDev, project} = options;

   return {
      mode,
      entry: paths.entry,
      output: {
         filename: '[name].[contenthash].js',
         path: paths.build,
         clean: true,
         publicPath: '/',
      },
      devtool: isDev ? 'inline-source-map': undefined,
      module: {
         rules: buildWebpackLoaders(options)
      },
      plugins: [
         new HTMLWebpackPlugin({
            template: paths.html
         }),
         new webpack.ProgressPlugin(),
         new webpack.HotModuleReplacementPlugin(),
         new DefinePlugin({
            __IS_DEV__: JSON.stringify(isDev),
            __PROJECT__: JSON.stringify(project),
         })
      ],
      resolve: {
         extensions: ['.tsx', '.ts', '.js'],
         preferAbsolute: true,
         modules: [paths.src, 'node_modules'],
         mainFiles: ['index'],
         alias: {},
      },
      devServer: isDev ? buildDevServer(options) : undefined,
   };
}