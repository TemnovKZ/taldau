import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import Router from './router';
import VueSplide from '@splidejs/vue-splide';
import { createPinia } from 'pinia'
import { Grid } from '@splidejs/splide-extension-grid';

const app = createApp(App);
const pinia = createPinia()

app.use(VueSplide, {
    extensions: { Grid },
});
app.use(pinia);
app.use(Router);
app.mount('#app');