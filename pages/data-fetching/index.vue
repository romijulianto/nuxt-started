<script setup lang="ts">

const { data } = await useFetch('/api/user?id=2');

</script>

<template>

    <div>
        <pre>{{ data }}</pre>
    </div>
</template>
