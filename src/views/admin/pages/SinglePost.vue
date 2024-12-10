
<script setup>
import { useQueryPostStore } from '@/stores/post';
import { storeToRefs } from 'pinia';
import { inject, onMounted } from 'vue';
import PostList from './components/PostList.vue';
import { useRoute } from 'vue-router';

const themeStore=inject('themeStore');

const queryPostStore=useQueryPostStore()

const {loading,post}=storeToRefs(queryPostStore)

const route=useRoute()
const slug=route?.params?.slug

onMounted(async()=>{
  queryPostStore.viewSinglePost(slug)
})
</script>
<template>
  <div class="flex flex-col h-screen ">
    <h1 :class="'mb-5 text-3xl '+themeStore.textClass  ">Single-post </h1>
    <div class="grid grid-cols-1 md:grid-cols-12 gap-2"    >
    <div v-if="!queryPostStore.threshold"  :class="'col-span-6 shadow-md rounded-md p-4 mb-2 ' + themeStore.bgClass">
      <h1 :class="'text-2xl mb-2 font-bold ' + themeStore.textClass">{{ post.title }}</h1>
      <p :class="'text-gray-700 ' + themeStore.textClass">
        {{ post.content }}
      </p>
    </div>
    <div :class="'col-span-6 bg-red-500 shadow-md rounded-md p-4 mb-2 ' + themeStore.textClass" v-else>
      You already reached the threshold
    </div>
  </div>
  </div>
</template>
