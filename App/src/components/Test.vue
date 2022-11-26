<template>
  <div class="test">
    <canvas ref='canvas' :width='width' :height='height'/>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useWindowSize } from '@vueuse/core';

const { width, height } = useWindowSize();

const canvas = ref();
let particules: any;
let context: any;

onMounted(() => {
  context = canvas.value.getContext('2d');

  init();
  animate();
});

// Initialisation des particules
const init = () => {
  particules = {
    x: 200,
    y: 200,
    radius: 1
  };
};

// On dessine les particules
const draw = () => {
  context.clearRect(0, 0, canvas.value.width, canvas.value.height);

  // On dessine la nouvelle position de la particule
  context.beginPath();
  context.arc(particules.x, particules.y, Math.abs(Math.sin(particules.radius)) * 10 + 10, 0, 2 * Math.PI);
  context.fillStyle = '#FFDE94';
  context.shadowColor = '#FFDE94';
  context.shadowBlur = particules.radius;
  context.closePath();
  context.fill();

  particules.radius += 0.01;

  // On met à jour la taille de la particule
};

// Animation du canvas
const animate = () => {
  draw();
  window.requestAnimationFrame(animate);
};
</script>

<style scoped lang="sass">
.test
  background: #000000
  //filter: blur(6px)
</style>
