import livereload from 'rollup-plugin-livereload';
import { terser } from 'rollup-plugin-terser';
import typescript from 'rollup-plugin-typescript2'
import path from 'path';

const production = !process.env.ROLLUP_WATCH;

export default {
	input: path.resolve(__dirname, '../../src/main.tsx'),
	output: {
		name: 'app',
		format: 'iife',
		file: path.resolve(__dirname, '../../dist/main.js'),
		globals: {
			'react': 'React',
			'react-dom': 'ReactDOM',
		},
		sourcemap: true,
	},
	external: ['react', 'react-dom'],
	plugins: [
		typescript(),
		// live reload if dev
		!production && livereload(),
		// minify if prod
		production && terser()
	],
	watch: {
		clearScreen: true
	}
};