<script setup>

import { Button } from 'primevue';
import { useAuthStore } from '@/stores/auth';
import { RouterLink } from 'vue-router';

function toggleDarkMode() {
    document.documentElement.classList.toggle('my-app-dark');
}

const gotologin = () =>{
  router.push('/login')
}
const auth = useAuthStore();

const handlelogout = () =>{
  auth.logout();
}

</script>

<template>
  <nav class="bg-gray-900  shadow">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16">
        <!-- Left: Logo and Navigation Links -->
        <div class="flex">
          <!-- Brand/Logo -->
          <div class="flex-shrink-0 flex items-center">
            <span class="font-bold text-xl text-gray-900 dark:text-white">Task Tracker</span>
          </div>
          <!-- Navigation Menu -->
          <div class="hidden sm:ml-6 sm:flex sm:space-x-8">
            <RouterLink
              to="/"
              class="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:border-blue-500 hover:text-gray-700 dark:text-gray-300 dark:hover:text-white"
            >
              Home
            </RouterLink>
            <RouterLink
              to="/about"
              class="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:border-blue-500 hover:text-gray-700 dark:text-gray-300 dark:hover:text-white"
            >
              About
            </RouterLink>
            <RouterLink
              to="/dashboard"
              class="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:border-blue-500 hover:text-gray-700 dark:text-gray-300 dark:hover:text-white"
            >
              Dashboard
            </RouterLink>
            <RouterLink
              to="/tasks"
              class="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:border-blue-500 hover:text-gray-700 dark:text-gray-300 dark:hover:text-white"
            >
              Tasks
            </RouterLink>
          </div>
        </div>
        <!-- Right: Login Button & Dark Mode Toggle -->
        <div class="flex items-center">
          <RouterLink to ="/login" v-if="!auth.isLoggedIn" class="px-4 py-2 mr-4 bg-blue-500 text-white rounded hover:bg-blue-600">
            Login
          </RouterLink>
          <RouterLink  to ="/" v-if="auth.isLoggedIn" @click = "handlelogout" class="px-4 py-2 mr-4 bg-red-400 text-white rounded hover:bg-blue-600">
            logout
          </RouterLink>
    
<Button label="Toggle Dark Mode" @click="toggleDarkMode()" >

            <!-- Sun icon (when dark mode is off) -->
          
          </button>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped>
/* Add any additional styles if necessary */
</style>
