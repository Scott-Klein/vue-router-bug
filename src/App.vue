<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
  <nav class="flex">
    <RouterLink
      to="/"
      class="hover:bg-gray-100 transition duration-1000 p-10"
      activeClass="bg-gray-50"
      >Home</RouterLink
    >
    <RouterLink
      to="/projects"
      class="hover:bg-gray-100 transition duration-1000 p-10"
      activeClass="bg-gray-50"
      >Project
    </RouterLink>
  </nav>

  <RouterView />
</template>
