<template>
  <header>
    <!-- TITRE ET LOGO -->
    <router-link to="SpiritedAway">
      <h1>Studio Ghibli <Totoro /></h1>
    </router-link>

    <!-- BOUTON D'OUVERTURE / FERMETURE -->
    <button @click="toggleShowingMenu" :class="{ 'active-menu': showMenu}">
      <span class="burger">
        <span/>
      </span>

      <span class="exit">
        <span/>
        <span/>
      </span>
    </button>

    <!-- LIENS -->
    <nav class="menu">
      <h2 class="menu-title">Movie list</h2>

      <ul ref="menu">
        <li
          v-for="(item, index) in menuContent"
          :key="`item-menu-${index}`"
          :class="`menu-item-${index}`"
          class="menu-item"
        >
          {{ item.label }}
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Totoro from './Totoro.vue';

const emit = defineEmits(['showMenu']);

const showMenu = ref(false);
const menu = ref('menu');
const menuContent = ref([
  { label: 'Spirited Away', isActive: false },
  { label: 'Castel In The Sky', isActive: false },
  { label: 'Princess Mononoke', isActive: false },
  { label: 'Princess Mononoke 1', isActive: false },
  { label: 'Princess Mononoke 2', isActive: false },
  { label: 'Princess Mononoke 3', isActive: false },
  { label: 'Princess Mononoke 4', isActive: false },
  { label: 'Princess Mononoke 5', isActive: false },
]);

const toggleShowingMenu = () => {
  showMenu.value = !showMenu.value;

  emit('showMenu', {
    show: showMenu.value,
    menuContent: menuContent.value
  });
}
</script>

<style scoped lang="sass">
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600&display=swap')

header
  display: flex
  align-items: center
  justify-content: space-between
  z-index: 10

  a
    color: unset
    text-decoration: none

  h1
    margin: 0
    font-family: 'Cormorant Garamond', sans-serif
    font-size: 32px

    svg
      width: 30px
      fill: var(--text)
      transition: fill .3s ease-in-out

  button
    position: relative
    width: 25px
    height: 21px
    padding: 0
    border: none
    background: none

    &.active-menu

      .burger
        opacity: 0

      .exit
        opacity: 1

    .burger, .exit
      // transition: opacity .2s ease-in-out
      position: absolute
      height: 100%
      inset: 0

    .burger
      display: flex
      align-items: center

      span
        display: block
        width: 100%
        height: 3px
        border-radius: 2px
        background-color: var(--text)
        transition: background-color .3s ease-in-out

      &:before, &:after
        content: ''
        position: absolute
        left: 0
        width: 100%
        height: 3px
        border-radius: 2px
        background-color: var(--text)
        transition: background-color .3s ease-in-out

      &:before
        top: 0

      &:after
        bottom: 0

    .exit
      opacity: 0

      span
        position: absolute
        display: block
        width: 100%
        height: 3px
        top: 8px
        border-radius: 2px
        background-color: var(--text)
        transition: background-color .3s ease-in-out

        &:first-child
          transform: rotate(45deg)

        &:last-child
          transform: rotate(-45deg)

  .menu
    display: flex
    position: fixed
    flex-direction: column
    justify-content: center
    align-items: self-start
    visibility: hidden
    top: 90px
    left: 10%
    right: 0
    bottom: 106px

    .menu-title
      margin-bottom: 40px
      font-family: 'Nunito', sans-serif
      font-weight: 700

    ul
      display: grid
      grid-template-rows: repeat(5, 1fr)
      grid-auto-flow: column
      grid-auto-rows: 36px
      grid-auto-columns: auto
      grid-row-gap: 36px
      grid-column-gap: 180px
      margin: 0
      padding: 0
      list-style-type: none

      li
        font-family: 'Cormorant Garamond', sans-serif
        font-size: calc(2400vw / 1018)
        margin-top: 0
        opacity: 0
        transform: scale(.94)
        transform-origin: 0 0
        cursor: pointer

</style>
