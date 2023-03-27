/*export default defineNuxtPlugin(() => {
    return {
      provide: {
        getImage: (name: string) => '/images/'+ name,
        getIcon: (name: string) => '/icons/'+ name
      }
    }
  })*/
  export default defineNuxtPlugin((NuxtApp) => {
    NuxtApp.provide('getImage', (name: string) => '/images/'+ name)
    NuxtApp.provide('getIcon', (name: string) => '/icons/'+ name)

    
    addRouteMiddleware('global-test', () => {
        console.log('this global middleware was added in a plugin folder.')
    }, { global: true })
    addRouteMiddleware('local-test', () => {
        console.log('this local middleware was added in a plugin folder.')
    })
  })

  
