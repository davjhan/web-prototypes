import { sveltekit } from '@sveltejs/kit/vite'
import path from 'path'

/** @type {import('vite').UserConfig} */
const config = {
    plugins: [sveltekit()],
    optimizeDeps: {
        exclude: ['broth-css']
    },
    resolve: {
        alias: {
            $static: path.resolve('/static'),
            $views: path.resolve('src/lib/views')
        }
    },
    server: {
        host: '0.0.0.0',
        watch: {
            followSymlinks: true
        }
    }
}

export default config