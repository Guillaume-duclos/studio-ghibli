<template>
  <div class="container">
    <canvas ref='canvas' :width='width' :height='height'/>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
import { useWindowSize, useMouse } from '@vueuse/core';
import { useRandomRange } from '../composables/randomRange';

const { width, height } = useWindowSize();
const { x } = useMouse();

const canvas = ref();
const rainCount = 200;
const drops: any[] = [];
let minXPosition: number;
let maxXPosition: number;
let context: any;

onMounted(() => {
  // Récupération du context du canvas
  context = canvas.value.getContext('2d');

  // On set les positions maximales des particules
  minXPosition = -canvas.value.width * 0.1;
  maxXPosition = canvas.value.width + canvas.value.width * 0.1;

  init();
  animate();
});

// Calcule du sens des particules en fonction de la position du curseur
const getDropAngle = computed(() => {
  return parseFloat((Math.round((8 / (width.value / 2)) * (x.value - (width.value / 2)) * 100) / 100).toFixed(2));
});

// Initialisation des particules
const init = () => {
  for (let i = 0; i < rainCount; i++) {
    drops.push({
      x: useRandomRange(minXPosition, maxXPosition).result.value,
      y: 0,
      speed: Math.random() * 20 + 20,
      height: useRandomRange(50, 100).result.value
    });
  }
};

// On dessine les particules
const draw = () => {
  context.clearRect(0, 0, canvas.value.width, canvas.value.height);

  for (let i = 0; i < drops.length; i++) {
    // On dessine la nouvelle position de la goutte
    context.beginPath();
    context.moveTo(drops[i].x, drops[i].y);
    context.lineTo(drops[i].x + getDropAngle.value, drops[i].y + drops[i].height);
    context.strokeStyle = '#FFFFFF';
    context.stroke();

    // On met à jour la position de la goutte
    drops[i].x += getDropAngle.value;
    drops[i].y += drops[i].speed;

    // Si la goutte sort du canvas, on recalcule sa nouvelle position
    if (drops[i].x < minXPosition || drops[i].x > maxXPosition || drops[i].y > canvas.value.width) {
      drops[i].x = useRandomRange(minXPosition, maxXPosition).result.value;
      drops[i].y = 0;
    }
  }
};

// Animation du canvas
const animate = () => {
  draw();
  window.requestAnimationFrame(animate);
};
</script>

<style scoped lang="sass">
.container
  content: ''
  position: absolute
  inset: -10px
  z-index: -1
  display: block
  background: url('../assets/images/spirited-away-landscape.jpeg') no-repeat center
  background-size: cover
  filter: blur(6px)

</style>
