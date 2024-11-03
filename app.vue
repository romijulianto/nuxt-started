<script setup lang="ts">
const runtimeConfig = useRuntimeConfig()
console.log(runtimeConfig.apiSecret)
</script>

<template>
  <div>
    <NuxtRouteAnnouncer />

  </div>
  <NuxtPage />
</template>
