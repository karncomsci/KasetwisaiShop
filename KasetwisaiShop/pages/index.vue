<!--<template>
   <div>
      <h1>Home</h1>
      <li v-for="(item, index) in items" :key="index">
         {{ item.fname }}
         <img :src="item.avatar" width="50" height="50" >
         <NuxtLink :to="'/attractions/'+item.id">Read More</NuxtLink>
      </li>
      
   </div>
</template>

<script setup>
   import { ref } from 'vue';
   const items = ref([])
   definePageMeta({
      middleware: ["local-test"]
      // or middleware: 'auth'
   })

   fetch('https://www.melivecode.com/api/users')
      .then(res => res.json())
      .then((result) => {
         items.value = result
         console.log(items);
      })
</script> -->

<template>
  <div>
      <h1>Index Page</h1>
      <BtnClick @click="doingLogin">Login</BtnClick>
      <BtnClick @click="doingLogout">Logout</BtnClick>
      <BtnClick @click="doingFetch">Fetch Product</BtnClick>

      <BtnClick @click="FetchUser">FetchUser</BtnClick>
      <!--<ul v-for="(item, index) in products" :key="index">
         <li>{{item.name}}</li>
      </ul> -->

      <ul v-for="(item, index) in items" :key="index">
         <li>{{item}}</li>
      </ul>
  </div>
</template>

<script setup>
   import { ref, onBeforeMount,onMounted } from 'vue'
   import { useAuthStore } from "@/stores/auth";
   definePageMeta({
      //middleware: ["auth"]
      // or middleware: 'auth'   
   })

   const authStore = useAuthStore();
   const router = useRouter();

   const runtimeConfig = useRuntimeConfig()

   onBeforeMount(()=>{
      console.log('before mount')
   })
   onMounted(()=>{
      console.log("username "+localStorage.getItem('username'))
      console.log('mount')
     /*axios.get('http://127.0.0.1:8082/api/users/getUser/a77575d1-8225-4273-a2b1-c468803e92c1').then((response) =>{
         console.log('response', response.data)
     })*/
     /*axios.get('/api/users/getUser/a77575d1-8225-4273-a2b1-c468803e92c1').then((response)=>{
       console.log('response', response.data)
     })*/
   })
   const items = ref([])
   const doingLogin = () => {
      $fetch('/api/login',{
         method: 'POST',
         body: {
            user:'aiyakarn',
            password:12345
         }
      })
   }

   const doingLogout = () => {
      authStore
      .logout()
      //.then((_response) => console.log(_response))
      //.catch((error) => console.log("API error", error));
   }
   
   const products = useState("products", () => [])
   const doingFetch = async () => {
      await $fetch('/api/products')
      .catch(error => {
         console.error(error)
      })
      .then((result) => {
         products.value = result
      })
   }

   const FetchUser = async () => {
      await $fetch('http://127.0.0.1:8082/api/users/getUser/a77575d1-8225-4273-a2b1-c468803e92c1')
      .catch(error => {
         console.error(error)
      })
      .then((result) => {
         items.value = result
      })
   }

</script>

<style>

</style>