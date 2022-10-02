<template>
  <TopNavigation class="top-navigation" @showMenu="update" />
  <router-view v-slot="{ Component }">
    <transition name="slide">
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

// Au changement de page
watch(() => route.name, (value) => {
  console.log('Go to', value);

  const backgroundGradient1 = 'linear-gradient(115deg, rgba(232, 97, 94, 0) 49.95%, rgba(232, 97, 94, .5) 50%)';
  const backgroundGradient2 = 'linear-gradient(90deg, rgba(232, 97, 94, 0) 0%, rgba(232, 97, 94, .5) 0%)';
  const backgroundGradient3 = 'linear-gradient(90deg, rgba(232, 97, 94, .5) 100%, rgba(232, 97, 94, 0) 100%)';
  const backgroundGradient4 = 'linear-gradient(90deg, rgba(232, 97, 94, .5) 0%, rgba(232, 97, 94, 0) 0%)';

  setTimeout(() => {
    gsap.to('.slide-leave-active .spirited-away-content', {
      opacity: 0,
      scale: .98,
      duration: .3,
      ease: 'power3.inOut'
    });
  }, 50);

  let timeline = gsap.timeline({ delay: .3 });

  timeline.set('.overlay', { background: backgroundGradient1 })

  timeline.to(
    '.overlay',
    {
      background: backgroundGradient2,
      duration: .6,
      ease: 'power3.inOut'
    }
  );

  timeline.set('.overlay', { background: backgroundGradient3 })

  timeline.to(
    '.overlay',
    {
      background: backgroundGradient4,
      duration: .6,
      ease: 'power3.inOut'
    }
  );

  /*gsap.to('.spirited-away', {
    xPercent: -100,
    delay: .3,
    duration: .3,
    ease: 'power3.inOut'
  });*/
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

.spirited-away
  width: 100%

.slide-enter-active, .slide-leave-active
  transition: all 5s ease-out

.slide-enter-to
  opacity: 1

.slide-leave-to
  opacity: 1

// .slide-enter-active, .slide-leave-active
  transition: all 5s ease-out
  border: 2px solid red

// .slide-enter-to
  position: absolute
  right: 0

// .slide-enter-from
  position: absolute
  right: -100%

// .slide-leave-to
  position: absolute
  left: -100%

// .slide-leave-from
  position: absolute
  left: 0

</style>
