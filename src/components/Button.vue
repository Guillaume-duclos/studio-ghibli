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
.button
  display: flex
  align-items: center
  padding: 14px 24px
  border: none
  background: #FFFFFF
  border-radius: 3px
  text-transform: uppercase

  img
    width: 12px
    margin-right: 10px

</style>
