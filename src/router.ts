import { createRouter, createWebHistory } from 'vue-router';

import SpiritedAway from './views/SpiritedAway.vue';
import MyNeightbourTotoro from './views/MyNeightbourTotoro.vue';
import Test from './components/Rain.vue';
import Test2 from './components/Particules.vue';

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
  {
    path: '/Test2',
    name: 'Test2',
    component: Test2,
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
