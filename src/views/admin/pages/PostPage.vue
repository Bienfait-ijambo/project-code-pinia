
<script setup>
import { useQueryPostStore } from '@/stores/post';
import { storeToRefs } from 'pinia';
import { inject, onMounted } from 'vue';
import PostList from './components/PostList.vue';

const themeStore=inject('themeStore');

const queryPostStore=useQueryPostStore()

const {loading,posts}=storeToRefs(queryPostStore)

onMounted(async()=>{
  queryPostStore.fetchPostData()
})
</script>
<template>
  <div class="flex flex-col h-screen ">
    <h1 :class="'mb-5 text-3xl '+themeStore.textClass  ">List of posts </h1>
   <PostList :posts="posts" :theme-store="themeStore"/>
  </div>
</template>
