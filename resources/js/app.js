import './bootstrap';
import App from '../components/App.vue'
import router from './router/router.js'


import { createApp } from "vue";



createApp(App).use(router).mount('#app')
