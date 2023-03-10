<template>
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

   fetch('https://www.melivecode.com/api/users')
      .then(res => res.json())
      .then((result) => {
         items.value = result
         console.log(items);
      })
</script>