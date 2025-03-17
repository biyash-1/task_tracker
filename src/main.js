import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import persistedstate from 'pinia-plugin-persistedstate'
import PrimeVue from 'primevue/config'
import { VueSpinnersPlugin } from 'vue3-spinners'
// import Vue3Toastify from 'vue3-toastify'
// import 'vue3-toastify/dist/index.css'
import Aura from '@primeuix/themes/aura'
import 'primeicons/primeicons.css'

import ToastService from 'primevue/toastservice';

import App from './App.vue'
import router from './router'

const app = createApp(App)
app.use(ToastService);

const pinia = createPinia()
pinia.use(persistedstate)  
app.use(pinia)
app.use(router)
app.use(Vue3Toastify, {
  autoClose: 3000, 
  position: 'top-right' 
})
app.use(VueSpinnersPlugin)
app.use(PrimeVue, {
  theme: {
    preset: Aura,
    options: {
      darkModeSelector: '.my-app-dark'
    }
  }
})

app.mount('#app')
