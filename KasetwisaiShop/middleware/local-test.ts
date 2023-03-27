export default defineNuxtRouteMiddleware((to, from) => {
    console.log('this local middleware was added in a plugin folder.')
})