import { createRouter, createWebHashHistory } from 'vue-router';

import SpiritedAway from './views/SpiritedAway.vue';
import MyNeightbourTotoro from './views/MyNeightbourTotoro.vue';
import GraveOfTheFireflies from './views/GraveOfTheFireflies.vue';
import Test from './components/Particules.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: SpiritedAway,
    meta: {
      theme: 'light',
      previousPage: 'Grave Of The Fire flies',
      nextPage: 'My Neightbour Totoro'
    }
  },
  {
    path: '/SpiritedAway',
    name: 'SpiritedAway',
    component: SpiritedAway,
    meta: {
      theme: 'light',
      previousPage: 'Grave Of The Fireflies',
      nextPage: 'My Neightbour Totoro'
    }
  },
  {
    path: '/MyNeightbourTotoro',
    name: 'MyNeightbourTotoro',
    component: MyNeightbourTotoro,
    meta: {
      theme: 'dark',
      previousPage: 'Spirited Away',
      nextPage: 'Grave Of The Fireflies'
    }
  },
  {
    path: '/GraveOfTheFireflies',
    name: 'GraveOfTheFireflies',
    component: GraveOfTheFireflies,
    meta: {
      theme: 'dark',
      previousPage: 'My Neightbour Totoro',
      nextPage: 'Spirited Away'
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
  history: createWebHashHistory(),
  routes,
})

export default router;
