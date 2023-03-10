// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ['@nuxtjs/tailwindcss'],
    css:[
        '@/assets/css/default.css'
    ],
    components: {
        global: true,
        dirs: ['~/components']
    },
})
