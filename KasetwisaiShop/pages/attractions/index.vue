<template>
  <h1>attractions</h1>

  <BtnClick @click="enableCustomLayout">Update layout</BtnClick>
  <BtnClick @click="doingLogout">Logout</BtnClick>
</template>

<script setup>
import { useAuthStore } from "@/stores/auth";
const authStore = useAuthStore();
    

function enableCustomLayout () {
  setPageLayout('custom')
}
definePageMeta({
  layout: 'default',
});

const doingLogout = () => {
      authStore
      .logout()
      //.then((_response) => console.log(_response))
      //.catch((error) => console.log("API error", error));
}
</script>