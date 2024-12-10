<template>
  <div class="bg-slate-100 h-screen">
    <div class="pt-32" align="center">
      <div class="flex flex-col w-[300px]">
        <input
          type="text"
          class="mb-2 py-2 text-sm px-2 rounded-md shadow-sm"
          value="Ben"
          placeholder="Enter name"
        />
        <input
          type="text"
          class="mb-2 py-2 text-sm px-2 rounded-md shadow-sm"
          placeholder="Enter Email"
          value="ben@gmail.com"
        />

        <router-link to="/admin" class="bg-indigo-700 text-white py-1 rounded-md shadow-md font-semibold">
          Click to login
        </router-link>
      </div>
    </div>
  </div>
</template>
