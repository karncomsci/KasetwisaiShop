<template>
  <nav class="flex items-center bg-blue-600 p-3 flex-wrap">
    <a href="#" class="p-2 mr-4 inline-flex items-center">
        <img :src="$getIcon('icons-store.png')" width="32" height="32" class="img-brand mr-2"  />
        <span class="text-xl text-white font-bold uppercase tracking-wide"
          >Kasetwisai  Shop</span
        >
      </a>
  </nav>
  <slot />
</template>

<style scoped>
    .img-brand {
      -webkit-filter: invert(1);
      filter: invert(1);
    }
</style>
