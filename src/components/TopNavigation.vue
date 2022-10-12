<template>
  <header>
    <h1>Studio Ghibli <Totoro /></h1>

    <button @click="toggleShowingMenu" :class="{ activeMenu: showMenu}">
      <span :class="{ open: showMenu }" />
    </button>

    <nav class="menu" :class="{ 'menu-active': showMenu }">
      <ul ref="menu">
        <li
          v-for="(item, index) in menuContent"
          :key="`item-menu-${index}`"
          class="menu-item"
          :class="`menu-item-${index}`"
        >
          {{ item.label }}
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { gsap } from 'gsap';
import Totoro from './Totoro.vue';

const emit = defineEmits(['showMenu']);

const showMenu = ref(false);
const menu = ref('menu');
const menuContent = ref([
  { label: 'Home', isActive: false },
  { label: 'Spirited Away', isActive: false },
  { label: 'Castel In The Sky', isActive: false },
  { label: 'Princess Mononoke', isActive: false },
  { label: 'Princess Mononoke 1', isActive: false },
  { label: 'Princess Mononoke 2', isActive: false },
  { label: 'Princess Mononoke 3', isActive: false },
  { label: 'Princess Mononoke 4', isActive: false },
  { label: 'Princess Mononoke 5', isActive: false },
  { label: 'Credit', isActive: false },
]);

const toggleShowingMenu = () => {
  showMenu.value = !showMenu.value;
  emit('showMenu', showMenu.value);

  const timeline = gsap.timeline({});

  if (showMenu.value) {
    menuContent.value.forEach((item, index) => {
      timeline.to(`.menu-item-${index}`, {
        opacity: 1,
        scale: 1,
        duration: .1,
        ease: 'power3.inOut'
      });
    });
  } else {
    gsap.to('.menu-item', {
      opacity: 0,
      scale: .97,
      duration: .2,
      ease: 'power3.inOut'
    });
  }
}
</script>

<style scoped lang="sass">
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600&display=swap')

header
  display: flex
  align-items: center
  justify-content: space-between
  z-index: 10

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
        animation: .2s ease-in forwards resetFirstElement

      &:after
        bottom: 0
        animation: .2s ease-in forwards resetLastElement

      &.open
        background-color: transparent
        transition: background-color .2s cubic-bezier(.8, 0, .58, 1)

        &:before
          top: 9px
          transition-delay: 0s
          animation: .2s ease-in .2s forwards rotateFirstElement

        &:after
          bottom: 9px
          transition-delay: 0s
          animation: .2s ease-in .2s forwards rotateLastElement

    &.activeMenu

      span

        &:before
          transition: top .2s cubic-bezier(.8, 0, .58, 1)
          transition-delay: .2s

        &:after
          transition: bottom .2s cubic-bezier(.8, 0, .58, 1)
          transition-delay: .2s

    @keyframes rotateFirstElement
      from
        transform: rotate(0)
      to
        transform: rotate(45deg)

    @keyframes rotateLastElement
      from
        transform: rotate(0)
      to
        transform: rotate(-45deg)

    @keyframes resetFirstElement
      from
        transform: rotate(45deg)
      to
        transform: rotate(0)

    @keyframes resetLastElement
      from
        transform: rotate(-45deg)
      to
        transform: rotate(0)

  .menu
    position: fixed
    display: flex
    visibility: hidden
    align-items: center
    top: 90px
    left: 10%
    right: 0
    bottom: 106px
    border: 0px solid red

    &.menu-active
      visibility: visible

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
      border: 0px solid red

      li
        font-family: 'Cormorant Garamond', sans-serif
        font-size: 28px
        opacity: 0
        margin-top: 0
        transform: scale(.97)
        transition: .3s cubic-bezier(.8, 0, .25, 1)
        transform-origin: 0 0
        border: 0px solid
        cursor: pointer

</style>
