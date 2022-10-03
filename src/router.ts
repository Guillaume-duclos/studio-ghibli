import { createRouter, createWebHistory } from 'vue-router';

import SpiritedAway from './views/SpiritedAway.vue';
import MyNeightbourTotoro from './views/MyNeightbourTotoro.vue';

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
    path: '/MyNeightbourTotoro',
    name: 'MyNeightbourTotoro',
    component: MyNeightbourTotoro
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;
