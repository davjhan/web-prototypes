import adapter from '@sveltejs/adapter-static'
import path from 'path'
import preprocess from 'svelte-preprocess'

/** @type {import('@sveltejs/kit').Config} */
const config = {
    // Consult https://github.com/sveltejs/svelte-preprocess
    // for more information about preprocessors
    preprocess: [
        preprocess({
            postcss: true
        }),
    ],
    kit: {
        files: {
            routes: path.resolve('../app', 'routes'),
            assets: path.resolve('../app', 'static')
        },
        adapter: adapter({
            fallback: '404.html'
        }),
    },
}

export default config