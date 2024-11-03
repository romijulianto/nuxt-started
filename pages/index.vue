<script setup lang="ts">
const route = useRoute()
const appConfig = useAppConfig()

console.log(appConfig.theme)
</script>



<template>
  <div>
    <h1>Nuxt Routing set up successfully! {{ appConfig.title }}</h1>
    <p class="bg-black">Current route: {{ route.path }}</p>
    <a href="https://nuxt.com/docs/getting-started/routing" target="_blank">Learn more about Nuxt Routing</a>
    <button class="btn">Button</button>
    <button class="btn btn-neutral">Neutral</button>
    <button class="btn btn-primary">Primary</button>
    <button class="btn btn-secondary">Secondary</button>
    <button class="btn btn-accent">Accent</button>
    <button class="btn btn-ghost">Ghost</button>
    <button class="btn btn-link">Link</button>
  </div>
</template>
