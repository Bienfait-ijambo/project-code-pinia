

<script setup>
import { useQueryPostStore } from '@/stores/post';
import { useThemeStore } from '@/stores/theme/theme-store';


const themeStore=useThemeStore()
const postStore=useQueryPostStore()
const userName="ben"
</script>
<template>
    <div class="flex flex-col">
        <h1 :class="'mb-5 text-3xl '+themeStore.textClass">Dashboard</h1>
        <div  class="grid grid-cols-1 md:grid-cols-12 gap-2">
        <div :class="'col-span-4 shadow-md rounded-md p-4 mb-2 ' + themeStore.bgClass">
            <h1 :class="'text-2xl mb-2 '+themeStore.textClass">Read VS Max</h1>
            <div :class="'text-2xl ' +themeStore.textClass">
                {{ postStore.userActions[userName] }} - {{ postStore.MAX_POST_TO_READ }}
            </div>
        </div>
      
    </div>
    </div>
</template>