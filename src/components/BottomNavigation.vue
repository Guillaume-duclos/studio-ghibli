<template>
  <footer>
    <button v-on:click="previousPage">
      <img src="../assets/icons/arrow-left.svg" alt="Arrow left" />
      My Neightbour Totoro
    </button>
    <button v-on:click="nextPage">
      Castle In The Sky
      <img src="../assets/icons/arrow-right.svg" alt="Arrow right" />
    </button>
  </footer>
</template>

<script setup lang="ts">
import router from '../router';

const props = defineProps({

})

const previousPage = () => {
  router.push('SpiritedAway');
}

const nextPage = () => {
  router.push('MyNeightbourTotoro');
}
</script>

<style scoped lang="sass">
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@600&display=swap')

footer
  display: flex
  justify-content: space-between
  border: 0px solid red

  button
    position: relative
    display: flex
    align-items: center
    padding: 0
    border: none
    background: none
    font-family: 'Nunito', sans-serif
    font-size: 14px
    overflow: hidden

    &:after
      content: ''
      position: absolute
      top: 0
      bottom: 0
      z-index: -1
      background: rgba(#FFFFFF, .6)
      transform: rotate(180deg)
      transition: .35s cubic-bezier(.8, 0, .58, 1)

    &:first-child:after, &:last-child:after
      width: calc(36px + 5px)

    &:first-child:after
      left: -5px

    &:last-child:after
      right: -5px

    &:hover:after
      width: calc(100% + 5px)
      background: rgba(#FFFFFF, 1)
      transition: all .35s cubic-bezier(.8, 0, .58, 1)

    &:hover:first-child img
      margin-right: 2px
      transition: margin-right .35s cubic-bezier(.8, 0, .58, 1)

    &:hover:last-child img
      margin-left: 2px
      transition: margin-left .35s cubic-bezier(.8, 0, .58, 1)

    img
      width: 16px
      height: 16px
      padding: 10px

    &:first-child
      padding-right: 10px

      img
        margin-right: 12px
        transition: margin-right .35s cubic-bezier(.8, 0, .58, 1)

    &:last-child
      padding-left: 10px

      img
        margin-left: 12px
        transition: margin-left .35s cubic-bezier(.8, 0, .58, 1)

</style>
