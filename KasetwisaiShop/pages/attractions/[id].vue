<template>
    <div>
      <h1>Name: {{item.fname}}</h1>
      <p>Username: {{item.username}}</p>
      <img :src="item.avatar" width="100" height="100">
    </div>
</template>

<script setup>
    import { ref } from 'vue';
    const item = ref({})
    const route = useRoute()

    const id = route.params.id
    fetch('https://www.melivecode.com/api/users/'+id)
        .then(res => res.json())
        .then((result) => {
            item.value = result.user
        })
    console.log(route.params.id)
</script>
