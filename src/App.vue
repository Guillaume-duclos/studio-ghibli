<template>
  <TopNavigation class="top-navigation" @showMenu="update" />
  <SpiritedAway class="content" />
  <BottomNavigation class="bottom-navigation" />
</template>

<script setup lang="ts">
import SpiritedAway from './views/SpiritedAway.vue';
import BottomNavigation from './components/BottomNavigation.vue';
import TopNavigation from "./components/TopNavigation.vue";

const update = (value: boolean) => {
  console.log(value);
}
</script>

<style scoped lang="sass">
.top-navigation
  padding: 25px 40px
  position: absolute
  top: 0
  left: 0
  right: 0

.content
  margin-bottom: calc(35px * 2 + 36px)

.bottom-navigation
  position: absolute
  bottom: 0
  left: 0
  right: 0
  padding: 35px 40px
  border: 0px solid black
</style>
