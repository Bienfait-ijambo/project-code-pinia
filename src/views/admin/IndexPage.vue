

<script setup>
import { useThemeStore } from '@/stores/theme/theme-store';
import DarkIcon from './components/DarkIcon.vue';
import LightIcon from './components/LightIcon.vue';
import {  onMounted, provide } from 'vue';
import Links from './components/Links.vue';
const themeStore=useThemeStore()

provide('themeStore',themeStore)


onMounted(()=>{
  themeStore.getThemeDataFromLocalStorage()
})

</script>
<template>
  <div :class=" 'h-screen '+themeStore.bgClass">
   
    <div class="pt-20 mr-28 ml-28">
      <nav :class="' rounded-md shadow-md flex justify-between mb-10 '+themeStore.bgClass">
        <Links :themeStore="themeStore" />
        <div class="p-2">
          <button @click="themeStore.changeAppTheme" :class="'p-2 rounded-full hover:text-gray-700 hover:bg-slate-200 '+themeStore.textClass">
        
          <span v-if="themeStore.toggleTheme">
            <LightIcon/>
          </span>
          <span v-else>
            <DarkIcon/>
          </span>
          </button>
        </div>
      </nav>
    
    </div>

    <div :class=" ' '+themeStore.bgClass">
      <div class=" mr-28 ml-28">
        <RouterView />
      </div>
    </div>

      

   
  </div>
</template>
