import { defineStore } from 'pinia';
import { ref, inject } from 'vue';
import Project from '@/models/project';
import HttpClient from '@/utilities/httpClient';
import API from '@/api/routes';
import { useRouter } from 'vue-router';

const useProjectsStore = defineStore('projects', () => {
  const router = useRouter();
  const httpClient = inject<HttpClient>('httpClient')!;
  const projects = ref<Project[]>([]);
  const selectedProject = ref<Project | null>(null);
  const loading = ref(false);
  const error = ref<Error | null>(null);

  const fetchProjects = async (): Promise<void> => {
    console.log('fetching projects');
    loading.value = true;
    try {
      projects.value = await httpClient.get<Project[]>(API.projects);
    } catch (e) {
      console.log(e);
    } finally {
      loading.value = false;
    }
  };

  const addProject = async (): Promise<void> => {
    selectedProject.value = new Project();
  };

  const updateProjectState = (project: Project): void => {
    // check if the project is already in the state
    const index = projects.value.findIndex((p) => p.id === project.id);
    if (index > -1) {
      projects.value.splice(index, 1, project);
    } else {
      projects.value.push(project);
    }
  };

  const saveSelectedProject = async (): Promise<void> => {
    if (selectedProject.value?.isValid()) {
      try {
        let project: Project;
        if (selectedProject.value.id) {
          project = await httpClient.put<Project>(
            `${API.projects}/${selectedProject.value.id}`,
            selectedProject.value
          );
        } else {
          project = await httpClient.post<Project>(API.projects, selectedProject.value);
        }
        updateProjectState(project);
        router.push({ name: 'projects-list', query: { noFetch: 'true' } });
      } catch (e) {
        console.log(e);
      }
    }
  };

  return {
    projects,
    selectedProject,
    loading,
    error,
    fetchProjects,
    addProject,
    saveSelectedProject
  };
});

export default useProjectsStore;
