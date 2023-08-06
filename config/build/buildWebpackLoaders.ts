import webpack from 'webpack';
import { BuildOptions } from './types/config';
import { buildCssLoader } from './loaders/buildCssLoader';

export const buildWebpackLoaders = (options: BuildOptions): webpack.RuleSetRule[] => {
   
   const tsLoader = {
      test: /\.tsx?$/,
      use: 'ts-loader',
      exclude: /node_modules/,
   };   

   const cssLoader = buildCssLoader(options.isDev);

   return [
      cssLoader,
      tsLoader,
   ];
};