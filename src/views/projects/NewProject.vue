<template>
  <h1 class="font-semibold text-xl mb-4">Project Creation</h1>
  <div class="p-10">
    <div class="flex flex-col">
      <label class="mb-2" for="name">Project Name</label>
      <input class="w-96 border border-gray-200" v-model="name" type="text" />

      <!-- Base -->
    </div>
    <div class="mt-4"><FunkyButton @click="createProject()" label="Create Project!" /></div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import useProjectsStore from '@/stores/projects';
import FunkyButton from '@/components/buttons/FunkyButton.vue';
import Project from '@/models/project';
const name = ref<string>('');

const projects = useProjectsStore();

projects.addProject();
projects.selectedProject = new Project();
const createProject = async () => {
  projects.selectedProject!.name = name.value;
  await projects.saveSelectedProject();
};
</script>
