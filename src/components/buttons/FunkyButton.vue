<template>
  <a class="group relative inline-block focus:outline-none focus:ring" href="#">
    <span
      class="absolute inset-0 translate-x-1.5 translate-y-1.5 bg-blue-300 transition-transform group-hover:translate-x-0 group-hover:translate-y-0"
    ></span>

    <span
      class="relative inline-block border-2 border-current px-8 py-3 text-sm font-bold uppercase tracking-widest text-black group-active:text-opacity-75"
      ><span class="text-white">{{ label }}</span>
    </span>
  </a>
</template>

<script setup lang="ts">
defineProps({
  label: String
});
</script>
