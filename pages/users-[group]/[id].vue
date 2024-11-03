<script setup lang="ts">
const route = useRoute()

if (route.params.group === 'admins') {
    console.log('Warning! Make sure user is authenticated!')
}
</script>

<template>
    <p>{{ $route.params.group }} - {{ $route.params.id }}</p>
</template>