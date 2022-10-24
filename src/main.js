import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import bootstrap from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import axios from 'axios';
window.axios = axios

createApp(App)
    .use(store)
    .use(router)
    // .use(axios)
    .mount('#app')
