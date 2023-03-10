<template>
    <div>
        <h1>about</h1>
        <img :src="$getImage('doll-2.jpg')" alt="" srcset="">

        <div>
            <h2 class="custom-red">this is red</h2>
            <p  class="custom-sky">this is sky</p>
        </div>
       <BtnClick @click="btnClick++">Click</BtnClick>
       {{btnClick}}
    </div>
</template>
<script setup>
    import {ref} from 'vue'
    const btnClick = ref(0)

  
</script>