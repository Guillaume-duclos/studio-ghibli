<template>
  <header>
    <p>Studio Ghibli</p>

    <button @click="toggleShowingMenu">
      <span :class="{ 'open': showMenu }" />
    </button>

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
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { gsap } from 'gsap';
import { CustomEase } from 'gsap/CustomEase';

const emit = defineEmits(['showMenu']);

const showMenu = ref(false);
const menu = ref('menu');
const menuContent = ref([
  { label: 'Home', isActive: false },
  { label: 'Spirited Away', isActive: false },
  { label: 'Castel In The Sky', isActive: false },
  { label: 'Princess Mononoke', isActive: false },
  { label: 'Credit', isActive: false },
]);

const toggleShowingMenu = () => {
  showMenu.value = !showMenu.value;
  emit('showMenu', showMenu.value);

  const timeline = gsap.timeline({});

  if (showMenu.value) {
    menuContent.value.forEach((item, index) => {
      timeline.to(`.menu-item-${index}`, {
        scale: 1,
        opacity: 1,
        duration: .15,
        ease: 'power3.inOut'
      });
    });
  } else {
    timeline.to('.menu-item', {
      scale: .97,
      opacity: 0,
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

  p
    margin: 0
    font-family: 'Cormorant Garamond', sans-serif
    font-size: 28px

  button
    position: relative
    width: 25px
    height: 21px
    padding: 0
    border: 0px solid
    background: none

    span
      display: block
      width: 100%
      height: 3px
      border-radius: 2px
      background-color: #000000
      transition: background-color .2s cubic-bezier(.8, 0, .58, 1)
      transition-delay: .2s

      &:before, &:after
        content: ''
        position: absolute
        left: 0
        width: 100%
        height: 3px
        border-radius: 2px
        background-color: #000000

      &:before
        top: 0
        transition: top .2s cubic-bezier(.8, 0, .58, 1)
        transition-delay: .2s
        animation: .2s ease-in forwards resetFirstElement

      &:after
        bottom: 0
        transition: bottom .2s cubic-bezier(.8, 0, .58, 1)
        transition-delay: .2s
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

  ul
    display: flex
    flex-direction: column
    justify-content: center
    gap: 36px
    position: fixed
    top: 90px
    right: 0
    bottom: 106px
    width: 25%
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
