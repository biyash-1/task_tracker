<script setup>

import { useRouter } from 'vue-router'

const router = useRouter()

const handleStart = () => {
  router.push('/login')
}
import Button from 'primevue/button'
</script>

<template>
  <section class="min-h-screen flex items-center justify-center p-8">
    <!-- Changed gap to gap-2 for mobile and kept md:gap-8 -->
    <div class="container grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-1">
      
      <!-- Left Column: Description -->
      <div class="flex flex-col justify-center space-y-6">
        <h1 class="text-4xl font-bold">Restaurant Name</h1>
        <p class="text-lg text-gray-700 dark:text-gray-600">
          Welcome to our restaurant! Enjoy the finest meals crafted just for you.
        </p>
        <p class="text-gray-500">
          Whether you're here for a casual bite or a gourmet experience, our menu is sure to delight.
        </p>
        <Button
          @click="handleStart"
          class="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition"
        >
          Get Started
        </Button>
      </div>

      <!-- Right Column: Burger Image -->
      <div class="flex items-center justify-center">
        <img
          src="/src/assets/taskimage.jpg"
          alt="Delicious burger"
          class="w-full max-w-md rounded-lg shadow-lg"
        />
      </div>
      
    </div>
  </section>

  <section class="todays special">

  </section>
</template>