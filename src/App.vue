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

/*const enter = (element: any, done: any) => {
  element.style.position = 'absolute';
  element.style.inset = 0;

  // On set l'overlay à l'extérieur de la page
  gsap.set(
    element.children[1].children[0].children[0],
    {
      attr: { points: `
        ${window.innerWidth * 2 + window.innerWidth * 0.4},0
        ${window.innerWidth * 3},0
        ${window.innerWidth * 2 + window.innerWidth * 0.65},${window.innerHeight}
        ${window.innerWidth * 2},${window.innerHeight}
      `}
    }
  );

  // Animation de l'overlay pour qu'il entre dans la page
  gsap.to(
    element.children[1].children[0].children[0],
    {
      attr: { points: `
        ${window.innerWidth + window.innerWidth * 0.65},0
        ${window.innerWidth * 2 + window.innerWidth * 0.65 - window.innerWidth * 0.35},0
        ${window.innerWidth * 2},${window.innerHeight}
        ${window.innerWidth + window.innerWidth * 0.35},${window.innerHeight}
      `},
      delay: 1.5,
      duration: .6,
      ease: 'power3.inOut'
    }
  );
}*/

/*const leave = (element: any, done: any) => {
  element.style.zIndex = 1;

  // On cache le personnage du 1er plan
  gsap.to(element.children[2], {
    opacity: 0,
    scale: .98,
    duration: .3,
    ease: 'power3.inOut'
  });

  // On créer la timeline
  let timeline = gsap.timeline({ delay: .3, onComplete: done });

  // Animation de l'overlay en full screen
  timeline.to(
    element.children[1].children[0].children[0],
    {
      attr: { points: `
        ${window.innerWidth},0
        ${window.innerWidth * 2 + window.innerWidth * 0.65 - window.innerWidth * 0.35},0
        ${window.innerWidth * 2},${window.innerHeight}
        ${window.innerWidth * 0.7},${window.innerHeight}
      `},
      duration: .6,
      ease: 'power3.inOut'
    }
  );

  // Animation de l'overlay pour qu'il sorte de la page
  timeline.to(
    element.children[1].children[0].children[0],
    {
      attr: { points: `
        ${window.innerWidth * 0.35},0
        ${window.innerWidth},0
        ${window.innerWidth * 0.7},${window.innerHeight}
        0,${window.innerHeight}
      `},
      duration: .6,
      ease: 'power3.inOut'
    }
  );

  // Animation du fond pour qu'il sorte de la fenêtre
  timeline.to(
    element.children[0],
    {
      opacity: 0,
      duration: .6,
      ease: 'power3.inOut'
    }
  );

  /!*timeline.to(
    element.children[0],
    {
      background: backgroundGradient2,
      duration: .6,
      ease: 'power3.inOut'
    }
  );*!/

  // timeline.set(element.children[0], { background: backgroundGradient3 });

  /!*timeline.to(
    element.children[0],
    {
      background: backgroundGradient4,
      duration: .6,
      ease: 'power3.inOut'
    }
  );*!/

  /!*timeline.to(
    element,
    {
      opacity: 0,
      duration: .6,
      ease: 'power3.inOut'
    }
  );*!/
}*/

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
