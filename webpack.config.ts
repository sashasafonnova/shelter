import { buildWebpackConfig } from './config/build/buildWebpackConfig';
import path from 'path';
import { BuildPaths, BuildMode, BuildEnv } from './config/build/types/config';
import webpack from 'webpack';


export default (env: BuildEnv): webpack.Configuration => {

   const paths: BuildPaths = {
      entry: path.resolve(__dirname, 'src', 'index.ts'),
      build: path.resolve(__dirname, 'dist'),
      html: path.resolve(__dirname, 'public', 'index.html'),
      src: path.resolve(__dirname, 'src'),
   };

   const mode: BuildMode = env.mode || 'development';

   const isDev = mode === 'development';
   const port = env.port || 3000;


   const config = buildWebpackConfig({
      paths, 
      mode,
      isDev,
      port,
      project: 'frontend'
   });

   return config;
};