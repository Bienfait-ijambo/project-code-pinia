<script setup>
defineProps(['posts', 'themeStore'])

</script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-12 gap-2"    >
    <div v-for="post in posts" :key="post.id"  :class="'col-span-4 shadow-md rounded-md p-4 mb-2 ' + themeStore.bgClass">
      <h1 :class="'text-2xl mb-2 font-bold ' + themeStore.textClass">{{ post.title }}</h1>
      <p :class="'text-gray-700 ' + themeStore.textClass">
        {{ post.content }}
      </p>
      <RouterLink class="text-indigo-700 hover:underline font-semibold" :to="'single-post/'+post.slug">Read more</RouterLink>
    </div>
  </div>
</template>
