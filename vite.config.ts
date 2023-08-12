import type { UserConfig } from 'vite';
import path from 'path';

const config: UserConfig = {
  root: 'src/',
  base: '/modules/fvtt-wfrp4e-add-xp/',
  publicDir: path.resolve(__dirname, 'public'),
  server: {
    port: 30001,
    open: true,
    proxy: {
      '^(?!/modules/fvtt-wfrp4e-add-xp)': 'http://localhost:30000/',
      '/socket.io': {
        target: 'ws://localhost:30000',
        ws: true,
      },
    },
  },
  build: {
    outDir: path.resolve(__dirname, 'dist'),
    emptyOutDir: true,
    sourcemap: true,
    lib: {
      name: 'fvtt-wfrp4e-add-xp',
      entry: path.resolve(__dirname, 'src/fvtt-wfrp4e-add-xp.ts'),
      formats: ['es'],
      fileName: 'fvtt-wfrp4e-add-xp',
    },
  },
};

export default config;
