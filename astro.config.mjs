// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
    integrations: [tailwind(), react()],
    devToolbar:{
        enabled: false
    }, 
    output: 'server',
    vite: {                                         
        resolve: {
            alias: {
                '@': './src/components'
            }
        }            
    },   

});
