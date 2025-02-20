// import App from './components/App.vue'
// import router from './router/router.js'
// import store from './store/index.js'
// import { createApp } from "vue";
//
// createApp(App).use(router).use(store).mount('#app')


import App from './components/App.vue'
import router from './router/router.js'
import store from './store'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css'

import { createApp } from "vue";

createApp(App).use(router).use(store).mount('#app')
