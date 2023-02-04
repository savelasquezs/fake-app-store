const path = require('path');
/** @type {import('vite').UserConfig} */

import { defineConfig, loadEnv } from 'vite';
export default defineConfig(({ command, mode }) => {
	const envVariable = loadEnv(mode, process.cwd());
	console.log(envVariable);
	return {
		server: {
			port: 8080,
		},
		resolve: {
			    alias: {
			      '~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap'),
			    }
			  },
		
		
	};
});

// const path = require('path')
// const envVariable = loadEnv(mode, process.cwd());
// console.log(envVariable);
// export default {
//   root: path.resolve(__dirname, 'src'),
//   resolve: {
//     alias: {
//       '~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap'),
//     }
//   },
//   server: {
//     port: 8080,
//     hot: true
//   }
// }
