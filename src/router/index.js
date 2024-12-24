import {createRouter, createWebHistory} from "vue-router";
import Home from "../pages/Home.vue";
import Cart from "../pages/Cart.vue";
import NotFound from "../pages/NotFound.vue";
import Catalog from "../pages/Catalog.vue";

const routes = [
  {
    paht: '/', name: 'Home', component: Home
  },
  {
    path: '/cart', name: 'Cart', component: Cart
  },
  {
    path: '/catalog', name: 'Catalog', component: Catalog
  },
  {
    path: '/:pathMatch(.*)*', // Ловит все несуществующие маршруты
    name: 'NotFound',
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;