import { defineConfig } from 'vite';
import { resolve } from 'path';
import react from '@vitejs/plugin-react-swc';
import svgr from 'vite-plugin-svgr';
import tsconfigPaths from 'vite-tsconfig-paths';
import typescript from '@rollup/plugin-typescript';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr({
      svgrOptions: {
        dimensions: false,
        svgProps: {
          focusable: '{false}',
        },
      },
    }),
    tsconfigPaths(),
    typescript({
      noEmit: false,
      declaration: true,
      emitDeclarationOnly: true,
      noForceEmit: true,
      declarationDir: resolve(__dirname, 'dist'),
      rootDir: resolve(__dirname, 'src'),
      exclude: ['*/**/*.stories.*'],
    }),
  ],
  build: {
    // use vite library mode to build the package
    // https://vitejs.dev/guide/build.html#library-mode
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      formats: ['cjs', 'es'],
      fileName: (format, entryName) => `${entryName}.${format}.js`,
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['react'],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          react: 'React',
        },
      },
    },
  },
});
