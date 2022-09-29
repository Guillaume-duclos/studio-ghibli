import { createRouter, createWebHistory } from 'vue-router';

import SpiritedAway from './views/SpiritedAway.vue';
import SpiritedAway2 from './views/SpiritedAway2.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: SpiritedAway
  },
  {
    path: '/SpiritedAway',
    name: 'SpiritedAway',
    component: SpiritedAway
  },
  {
    path: '/SpiritedAway2',
    name: 'SpiritedAway2',
    component: SpiritedAway2
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;
