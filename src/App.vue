<template>
  <TopNavigation class="top-navigation" @showMenu="update" />
  <router-view v-slot="{ Component }">
    <transition name="slide" v-on:enter="enter" v-on:leave="leave">
      <component :is="Component" :showingMenu="showingMenu" />
    </transition>
  </router-view>
  <BottomNavigation class="bottom-navigation" />
</template>

<script setup lang="ts">
import { gsap } from 'gsap';
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import BottomNavigation from './components/BottomNavigation.vue';
import TopNavigation from './components/TopNavigation.vue';

const route = useRoute();

const showingMenu = ref(false);

const update = (value: boolean) => {
  showingMenu.value = value;
}

const enter = (element: any, done: any) => {
  console.log(element);

  element.style.position = 'absolute';
  element.style.inset = 0;
}

const leave = (element: any, done: any) => {
  const backgroundGradient1 = 'linear-gradient(115deg, rgba(232, 97, 94, 0) 49.95%, rgba(232, 97, 94, .5) 50%)';
  const backgroundGradient2 = 'linear-gradient(90deg, rgba(232, 97, 94, 0) 0%, rgba(232, 97, 94, .5) 0%)';
  const backgroundGradient3 = 'linear-gradient(90deg, rgba(232, 97, 94, .5) 100%, rgba(232, 97, 94, 0) 100%)';
  const backgroundGradient4 = 'linear-gradient(90deg, rgba(232, 97, 94, .5) 0%, rgba(232, 97, 94, 0) 0%)';

  console.log(element.children[1]);

  element.style.zIndex = 1;

  // On cache le personnage au 1er plan
  gsap.to(element.children[1], {
    opacity: 0,
    scale: .98,
    duration: .3,
    ease: 'power3.inOut'
  });

  // On créer la timeline
  let timeline = gsap.timeline({ delay: .3, onComplete: done });

  // On set l'overlay à son état de base
  timeline.set(element.children[0], { background: backgroundGradient1 });

  timeline.to(
    element.children[0],
    {
      background: backgroundGradient2,
      duration: .6,
      ease: 'power3.inOut'
    }
  );

  timeline.set(element.children[0], { background: backgroundGradient3 });

  timeline.to(
    element.children[0],
    {
      background: backgroundGradient4,
      duration: .6,
      ease: 'power3.inOut'
    }
  );

  timeline.to(
    element,
    {
      opacity: 0,
      duration: .6,
      ease: 'power3.inOut'
    }
  );
}

// Change le thème de couleur si besoin
const updateColorScheme = () => {
  if (route.meta.theme === 'dark') {
    document.body.setAttribute('data-theme', 'dark');
  } else {
    document.body.removeAttribute('data-theme');
  }
};

// Au changement de page
watch(() => route.name, () => {
  updateColorScheme();
});
</script>

<style scoped lang="sass">
.top-navigation
  padding: 0 40px
  height: 90px
  position: absolute
  top: 0
  left: 0
  right: 0
  border: 0px solid

.content
  border: 0px solid red

.bottom-navigation
  position: absolute
  bottom: 0
  left: 0
  right: 0
  padding: 35px 40px
  border: 0px solid

</style>
