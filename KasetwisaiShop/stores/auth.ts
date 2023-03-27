import { defineStore } from 'pinia'
import { fetchWrapper } from '@/helpers/fetch-wrapper'

const baseUrl = 'http://127.0.0.1:8082' //process.env.BASE_SERVICE_URL 

export const useAuthStore = defineStore({
  id: 'auth',
  state: () => ({
    /* Initialize state from local storage to enable user to stay logged in */
    //username: JSON.parse(localStorage.getItem('username') || ""),
    //access_token: JSON.parse(localStorage.getItem('access_token') || ""),
    username: null,
    access_token:null
  }),
  actions: {
    async login(loginForm: any) {
      await fetchWrapper.post(`${baseUrl}/api/auth/login`, loginForm)
      //.then(data => console.log('Success!', data.access_token))
  
      .then(response => {
           console.log("response username => "+response.username)
           console.log("response access_token =>"+response.access_token)
           this.username = response.username;
           this.access_token = response.access_token;
           localStorage.setItem('username', JSON.stringify(this.username))
           localStorage.setItem('access_token', JSON.stringify(this.access_token))
      })
      .catch(error => { throw error });
       /*await $fetch(`${baseUrl}/api/auth/login`, {
        method: 'POST',
        body: loginForm
      })
        .then(response => {
          
          console.log("response => "+JSON.stringify(response))
          this.username = response
          this.access_token = username.access_token
          localStorage.setItem('username', JSON.stringify(this.username))
          localStorage.setItem('access_token', JSON.stringify(this.access_token))
        })
        .catch(error => { throw error })*/
    },
    logout() {
      console.log("logged out")
      this.username = null
      this.access_token = null
      localStorage.removeItem('username')
      localStorage.removeItem('access_token')
    }
  }
})