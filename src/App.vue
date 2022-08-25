<template>
  <TopNavigation class="top-navigation" @showMenu="update" />
  <SpiritedAway class="content" :showingMenu="showingMenu" />
  <BottomNavigation class="bottom-navigation" />
</template>

<script setup lang="ts">
import SpiritedAway from './views/SpiritedAway.vue';
import BottomNavigation from './components/BottomNavigation.vue';
import TopNavigation from "./components/TopNavigation.vue";
import { ref } from 'vue';

const showingMenu = ref(false);

const update = (value: boolean) => {
  showingMenu.value = value;
}
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
