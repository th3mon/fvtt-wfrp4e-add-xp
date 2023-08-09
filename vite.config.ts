import type { UserConfig } from 'vite';
const config: UserConfig = {
  publicDir: 'public',
  base: '/modules/fvtt-wfrp4e-add-xp/',
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
    outDir: 'dist',
    emptyOutDir: true,
    sourcemap: true,
    lib: {
      name: 'fvtt-wfrp4e-add-xp',
      entry: 'src/fvtt-wfrp4e-add-xp.ts',
      formats: ['es'],
      fileName: 'fvtt-wfrp4e-add-xp',
    },
  },
};

export default config;
