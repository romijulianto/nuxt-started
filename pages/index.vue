<script setup lang="ts">
const route = useRoute()
const appConfig = useAppConfig()

console.log(appConfig.theme)
</script>



<template>
  <div>
    <h1>Nuxt Routing set up successfully! {{ appConfig.title }}</h1>
    <p>Current route: {{ route.path }}</p>
    <a href="https://nuxt.com/docs/getting-started/routing" target="_blank">Learn more about Nuxt Routing</a>
  </div>
</template>
