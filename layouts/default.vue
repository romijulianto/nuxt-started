<script setup lang="ts">
const route = useRoute()

useHead({
    meta: [{ property: 'og:title', content: `App Name - ${route.meta.title}` }]
})
</script>

<template>
    <div>
        <div>Header</div>
        <slot />
        <div>Footer</div>
    </div>
</template>
