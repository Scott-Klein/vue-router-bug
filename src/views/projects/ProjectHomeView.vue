<template>
  <div>
    <h1>Projects</h1>
    <FunkyButton @click="router.push('/projects/new')" label="New Project" />
    <RouterLink
      to="/projects/new"
      class="hover:bg-gray-100 transition duration-1000 p-10"
      activeClass="bg-gray-50"
      >Project
    </RouterLink>
    <ul>
      <li v-for="p in projects.projects" :key="p.id">{{ p.name }}</li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import FunkyButton from '@/components/buttons/FunkyButton.vue';
import useProjectStore from '@/stores/projects';
import { useRoute, useRouter } from 'vue-router';
const router = useRouter();
const route = useRoute();
const projects = useProjectStore();

if (!route.query?.noFetch) {
  projects.fetchProjects();
}

const addProject = async  () => {
  router.push('/projects/new')
};
</script>
