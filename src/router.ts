import { createRouter, createWebHistory } from 'vue-router';

import SpiritedAway from './views/SpiritedAway.vue';
import MyNeightbourTotoro from './views/MyNeightbourTotoro.vue';
import Test from './views/Test.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: SpiritedAway,
    meta: {
      theme: 'light'
    }
  },
  {
    path: '/SpiritedAway',
    name: 'SpiritedAway',
    component: SpiritedAway,
    meta: {
      theme: 'light'
    }
  },
  {
    path: '/MyNeightbourTotoro',
    name: 'MyNeightbourTotoro',
    component: MyNeightbourTotoro,
    meta: {
      theme: 'dark'
    }
  },
  {
    path: '/Test',
    name: 'Test',
    component: Test,
    meta: {
      pageType: 'test'
    }
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;
