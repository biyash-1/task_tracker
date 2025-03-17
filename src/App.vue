<script setup>
import Navbar from './components/Navbar.vue';
import {RouterView}   from 'vue-router'


import Toast from 'primevue/toast';

import { useCounterStore } from './stores/counter';

const counter = useCounterStore();

</script>

<template>
 <Navbar/>

<Toast/>

  <RouterView/>
</template>