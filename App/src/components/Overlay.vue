<template>
  <svg :viewBox="`0 0 ${props.screenWidth * 3} ${props.screenHeight}`" preserveAspectRatio="xMidYMid meet" fill="none" xmlns="http://www.w3.org/2000/svg">
    <polygon
      :points="`${props.screenWidth + props.screenWidth * 0.65},0 ${props.screenWidth * 2 + props.screenWidth * 0.65 - props.screenWidth * 0.35},0 ${props.screenWidth * 2},${props.screenHeight} ${props.screenWidth + props.screenWidth * 0.35},${props.screenHeight}`"
      :fill="props.color"
      fill-opacity=".5"
    />
  </svg>
</template>

<script setup lang="ts">
const props = defineProps({
  screenWidth: Number,
  screenHeight: Number,
  color: String
});
</script>
