export interface BuildPaths {
   entry: string,
   build: string,
   html: string,
   src: string,
}

export type BuildMode = 'development' | 'production';

export interface BuildEnv {
   mode: BuildMode;
   port: number;
}

export interface BuildOptions {
   paths: BuildPaths,
   mode: BuildMode,
   isDev: boolean,
   port: number,
   project: 'storybook' | 'frontend' | 'jest';
}