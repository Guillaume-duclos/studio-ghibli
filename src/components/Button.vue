<template>
  <button class="button">
    <img :src="`src/assets/icons/${iconName}.svg`" alt="Icon" />
    <p>{{ label }}</p>
  </button>
</template>

<script setup lang="ts">
const props = defineProps({
  label: String,
  iconName: String
})
</script>

<style scoped lang="sass">
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@600&display=swap')

.button
  display: flex
  align-items: center
  padding: 14px 22px
  height: fit-content
  border: none
  background: #FFFFFF
  border-radius: 3px
  text-transform: uppercase
  font-family: 'Nunito', sans-serif
  font-weight: 600

  img
    width: 12px
    margin-right: 10px

  p
    margin: 0
    height: 20px
    line-height: 22px

</style>
