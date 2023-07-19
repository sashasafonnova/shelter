import webpack from 'webpack';
import { BuildOptions } from './types/config';

export const buildWebpackLoaders = (options: BuildOptions): webpack.RuleSetRule[] => {
   
   const tsLoader = {
      test: /\.tsx?$/,
      use: 'ts-loader',
      exclude: /node_modules/,
   };   

   return [
      tsLoader,
   ];
};