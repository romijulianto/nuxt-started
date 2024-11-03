<script setup lang="ts">
const runtimeConfig = useRuntimeConfig()
console.log(runtimeConfig.apiSecret)
console.log(runtimeConfig.public.apiBase)
</script>

<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtWelcome />
  </div>
</template>
