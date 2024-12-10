
<script setup>
import { useQueryPostStore } from '@/stores/post';
import { storeToRefs } from 'pinia';
import { inject, onMounted } from 'vue';

const themeStore=inject('themeStore');

const queryPostStore=useQueryPostStore()


</script>
<template>
  <div class="flex flex-col h-screen ">
    <h1 :class="'mb-5 text-3xl '+themeStore.textClass  ">User-activities </h1>
    <div class="grid grid-cols-1 md:grid-cols-12 gap-2"    >
   
    <div v-for="userActivity  in queryPostStore.userActivities"
    :key="userActivity.id"
     :class="'col-span-6 bg-red-500 shadow-md rounded-md p-4 mb-2 ' + themeStore.textClass" >
      {{userActivity.funcName}} - {{ userActivity.date }}
    </div>
  </div>
  </div>
</template>
