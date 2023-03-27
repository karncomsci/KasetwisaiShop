export default defineNuxtRouteMiddleware((to, from) => {
    console.log('this global middleware was added in a plugin and will be run on every route change')
  })