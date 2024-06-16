import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

const useAuthStore = defineStore('auth', () => {

  //state
  const isAuthenticated = ref(false);
  const token = ref<string | null>(null);

  //getters
  const authHeader = computed(() => {
    if (isAuthenticated.value && token.value) {
      return { Authorization: `Bearer ${token.value}` };
    }
    return {};
  });

  //actions
  function login() {
    isAuthenticated.value = true;
    token.value = 'fake token';
  }

  function logout() {
    isAuthenticated.value = false;
    token.value = null;
  }

  return { isAuthenticated, token, login, logout, authHeader };
});

export default useAuthStore;