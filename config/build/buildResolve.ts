import { type ResolveOptions } from 'webpack';
import { type BuildOptions } from './types/config';

export function buildResolve(options: BuildOptions): ResolveOptions {
    return {
        extensions: ['.tsx', '.ts', '.js'],
        preferAbsolute: true,
        modules: [options.paths.src, 'node_modules'],
        alias: {},
        mainFiles: ['index'],
    };
}
