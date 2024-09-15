// main.js 或 app.js
import { createApp } from 'vue';
import App from './App.vue';

const app = createApp(App);

app.config.compilerOptions.isCustomElement = tag => tag === 'meting-js';

app.mount('#app');
