const nrwlConfig = require('@nrwl/react/plugins/bundle-rollup');
const typescript = require('@rollup/plugin-typescript');
const path = require('path');

module.exports = (config) => {
  const nxConfig = nrwlConfig(config);

  const tsconfigPath = nxConfig.input.replace('/src/index.ts', '');

  return {
    ...nxConfig,
    output: {
      ...nxConfig.output,
    },
    plugins: [
      typescript({
        tsconfig: path.join(tsconfigPath, 'tsconfig.lib.json'),
        compilerOptions: {
          outDir: nxConfig.output.dir,
          rootDir: './src',
          declaration: true,
        },
        // exclude: ['file-name.ext']
      }),
      ...nxConfig.plugins,
    ],
  };
};
