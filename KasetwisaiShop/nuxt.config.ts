// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
    app: {
        head: {
          title: 'Nuxt Dojo',
          meta: [
            { name: 'description', content: 'Everything about - Nuxt-3' }
          ],
          link: [
            { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons' }
          ]
        }
      },
    runtimeConfig: {
        currencyKey: process.env.BASE_SERVICE_URL
    },
    modules: ['@nuxtjs/tailwindcss','@pinia/nuxt',],
    css:[
        '@/assets/css/default.css'
    ],
    components: {
        global: true,
        dirs: ['~/components']
    },
    
    
})
