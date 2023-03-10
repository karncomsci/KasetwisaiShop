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
  })
