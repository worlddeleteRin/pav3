import { createApp } from 'vue'
import { createRouter, createWebHistory} from 'vue-router'
import PrimeVue from 'primevue/config';

import 'primevue/resources/themes/saga-blue/theme.css';
/* /* import 'primevue/resources/primevue.min.css'; */ /* //import 'primeicons/primeicons.css'; */
import './assets/css/style.css';

import { store } from './store.js';
// mask plugin 
import Maska from 'maska';

// ELement plus import 
import ElementPlus from "element-plus";
import "element-plus/lib/theme-chalk/index.css";

import App from './App.vue'
import MainPage from './components/MainPage.vue';
import CategoryPage from './components/CategoryPage.vue';
import ProductPage from './components/ProductPage.vue';


const app = createApp(App)

const routes = [
  {
    path: '/',
    name: 'MainPage',
    component: MainPage,
  },
  {
	path: '/category/:category_id',
	name: 'CategoryPage',
	component: CategoryPage,
	props: true,
  },
  {
	path: '/product/:product_id',
	name: 'ProductPage',
	component: ProductPage,
	props: true,
  },
];

const router = createRouter({
  history: createWebHistory('/app'),
  routes,
});


/* initialize everything to app */
app.use(store)
app.use(router)
app.use(PrimeVue)
app.use(ElementPlus)
app.use(Maska)

app.mount('#app')
