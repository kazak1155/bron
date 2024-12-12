import './bootstrap';
import App from '../components/App.vue'
import router from './router/router.js'
import store from './store'
import 'bootstrap-icons/font/bootstrap-icons.css'

import { createApp } from "vue";

createApp(App).use(router).use(store).mount('#app')
