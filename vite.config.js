import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite'
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react'
export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/js/app.jsx','resources/js/app.css'],
            refresh: true,
        }),
        react(),
        tailwindcss(),
    ],
});
