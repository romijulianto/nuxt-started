<script setup>
import { ref } from 'vue';

const email = ref('');
const password = ref('');

const handleSubmit = () => {
    console.log('Email:', email.value);
    console.log('Password:', password.value);
};
</script>

<style scoped>
/* Tambahkan styling Tailwind CSS atau Daisy UI di sini */
</style>
<template>
    <div class="flex items-center justify-center min-h-screen bg-gray-100">
        <div class="w-full max-w-md p-8 space-y-6 bg-white rounded shadow-md">
            <h2 class="text-2xl font-bold text-center">Login</h2>
            <form @submit.prevent="handleSubmit">
                <div class="form-control">
                    <label class="label">
                        <span class="label-text">Email</span>
                    </label>
                    <input type="email" v-model="email" class="input input-bordered" required />
                </div>
                <div class="form-control">
                    <label class="label">
                        <span class="label-text">Password</span>
                    </label>
                    <input type="password" v-model="password" class="input input-bordered" required />
                </div>
                <div class="form-control mt-6">
                    <button type="submit" class="btn btn-primary w-full">Login</button>
                </div>
            </form>
        </div>
    </div>
</template>