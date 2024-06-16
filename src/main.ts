import './assets/main.css';
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import HttpClient from '@/utilities/httpClient';

import App from './App.vue';
import router from './router';

const app = createApp(App);

app.use(createPinia());
app.use(router);
const httpClient = new HttpClient(import.meta.env.VITE_BASE_URL);
app.provide('httpClient', httpClient);

app.mount('#app');
