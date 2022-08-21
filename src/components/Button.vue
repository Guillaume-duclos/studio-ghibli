<template>
  <button class="button">
    <img :src="`src/assets/icons/${iconName}.svg`" alt="Icon" />
    {{ label }}
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
  padding: 10px 24px
  border: none
  background: #FFFFFF
  border-radius: 3px
  text-transform: uppercase
  font-family: 'Nunito', sans-serif
  font-weight: 600

  img
    width: 12px
    margin-right: 10px

</style>
