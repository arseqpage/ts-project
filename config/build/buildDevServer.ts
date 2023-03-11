import { type BuildOptions } from './types/config';

export function buildDevServer(options: BuildOptions) {
    const { port, open } = options;

    return {
        port,
        open,
        historyApiFallback: true,
        hot: true,
    };
}
