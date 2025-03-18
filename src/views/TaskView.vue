<template>
    <div class="max-w-3xl mx-auto py-10 px-4">
      <h1 class="text-3xl font-bold mb-6 text-center">My Tasks</h1>
      <div class=" shadow rounded-lg p-4">
        <ul>
          <li 
            v-for="task in tasks" 
            :key="task._id" 
            class="border-b last:border-none py-4 flex justify-between items-center"
          >
            <div>
              <p 
                class="text-lg font-medium" 
                :class="{ 'line-through text-gray-500': task.completed }"
              >
                {{ task.text }}
              </p>
              <p class="text-sm text-gray-400">
                {{ new Date(task.addedTime).toLocaleString() }}
              </p>
            </div>
            <div class="flex space-x-2">
              <button 
                class="bg-blue-500 hover:bg-blue-600 text-white text-sm px-4 py-2 rounded"
                @click="toggleTask(task)"
              >
                {{ task.completed ? 'Undo' : 'Complete' }}
              </button>
              <button 
                class="bg-red-500 hover:bg-red-600 text-white text-sm px-4 py-2 rounded"
                @click="deleteTask(task._id)"
              >
                Delete
              </button>
            </div>
          </li>
        </ul>
        <!-- Optionally show a message if no tasks exist -->
        <div v-if="tasks.length === 0" class="text-center text-gray-500 py-8">
          No tasks found.
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import axiosInstance from '@/axiosinstance';
  import { onMounted, ref } from 'vue';
  
  const tasks = ref([]);
  
  // Toggle task completion status
  const toggleTask = async (task) => {
    try {
      await axiosInstance.patch(`/api/task/${task._id}/checked`, { completed: !task.completed });
      task.completed = !task.completed;
    } catch (error) {
      console.error("Error toggling task", error);
    }
  };
  
  // Delete a task
  const deleteTask = async (taskId) => {
    try {
      await axiosInstance.delete(`/api/task/${taskId}`);
      tasks.value = tasks.value.filter(t => t._id !== taskId);
    } catch (error) {
      console.error("Error deleting task", error);
    }
  };
  
  
  onMounted(async () => {
    try {
      const response = await axiosInstance.get('/api/task/getalltasks');
      tasks.value = response.data.tasks || [];
    } catch (error) {
      console.error("Error fetching tasks", error);
    }
  });
  </script>
  