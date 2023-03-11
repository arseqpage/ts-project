import { type RuleSetRule } from 'webpack';
import webpack from 'webpack';
import path from 'path';
import { buildCssLoaders } from '../build/loaders/buildCssLoaders';
import { type BuildPaths } from '../build/types/config';

export default ({ config }: { config: webpack.Configuration }) => {
    const paths: BuildPaths = {
        build: '',
        html: '',
        entry: '',
        src: path.resolve(__dirname, '..', '..', 'src'),
    };
    config.resolve?.modules?.push(paths.src);
    config.resolve?.extensions?.push('.ts', '.tsx');

    if ((config.module?.rules) != null) {
    // eslint-disable-next-line no-param-reassign
        config.module.rules = config.module?.rules?.map(
            (rule: webpack.RuleSetRule | '...') => {
                if (rule !== '...' && (rule.test as string).includes('svg')) {
                    return { ...rule, exclude: /\.svg$/i };
                }

                return rule;
            },
        );
    }

    config.module?.rules?.push({
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    });
    config.module?.rules?.push(buildCssLoaders(true));

    return config;
};
