<script setup>
import { ref } from 'vue';
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import { useRouter } from 'vue-router';
import axiosInstance from '@/axiosinstance';
import { useToast } from 'primevue/usetoast';

import { useAuthStore } from '@/stores/auth';



const auth = useAuthStore();
const router = useRouter()

const toast = useToast()

const password = ref('');
const email = ref('')

const onFormSubmit = async(e) => {

  console.log("button clicked")
    e.preventDefault();
  const formdata = {
    email: email.value,
    password:password.value
  }
  try{
   const response = await axiosInstance.post('/api/user/login',formdata);
   const data= response.data;

  
   auth.setUser({
    username: data.username,
    email:data.email,
    password:data.password
   })


   console.log(auth);

   toast.add({
      severity: 'success',
      summary: 'Success',
      detail: 'Login Successful',
      life: 3000
    });


   router.push('/dashboard')
   console.log("data is",data)
  }

  catch(error) {
    console.log("error is", error)

    toast.add({
      severity: 'error',
      summary: 'Error',
      detail: 'Login failed',
      life: 3000
    });

  }
  
};


const gotosignup = () =>{

  router.push('/signup')
}
</script>

<template>
  <div class="h-screen flex items-center justify-center">
    <div class="border-t-orange-200 p-8 rounded-lg shadow-lg w-full max-w-md">
      <!-- Use a plain HTML form element -->
      <form @submit.prevent="onFormSubmit" class="flex flex-col gap-6">
        <h1 class="text-2xl font-bold text-center">Login</h1>
        <div class="flex flex-col gap-4">
         
          <InputText
            v-model="email"
            type="email"
            placeholder="Email"
            class="p-2 border rounded"
            required
          />
          <InputText
            v-model="password"
            type="password"
            placeholder="Password"
            class="p-2 border rounded"
            required
          />
        </div>
        <div class="flex flex-col w-full gap-3">

            <Button type="submit" severity="success" label="Log in" class="mt-2" />
            <Button @click="gotosignup"  severity="help" raised variant="text" label="Signup" class="" />
        </div>
      </form>
    </div>
  </div>
</template>
