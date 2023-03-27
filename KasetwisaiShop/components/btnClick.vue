<template>
    <div>
        <button class="bg-blue-600 rounded text-white p-2 m-2 outline hover:outline-blue-400"><slot/></button>
       
    </div>
</template>
<script setup>
    import { defineProps } from "vue";

    const props = defineProps({
        color: String,
    });
</script>