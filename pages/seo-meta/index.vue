<script setup lang="ts">
const title = ref('Hello World')
</script>

<template>
    <div>

        <Head>
            <Title>{{ title }}</Title>
            <Meta name="description" :content="title" />
            <Style type="text/css" children="body { background-color: green; }"></Style>
        </Head>

        <h1>{{ title }}</h1>
    </div>
</template>
