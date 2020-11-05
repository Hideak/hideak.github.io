import { createApp } from 'vue';
import { registerPages } from '@/plugins/register-pages';
import App from './App.vue';
import router from './router';
import './registerServiceWorker';

const app = createApp(App).use(router);

registerPages(app);

app.mount('#app');
