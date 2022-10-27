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
const drops: any[] = [];
const density: number = 16;
let minXPosition: number;
let maxXPosition: number;
let context: any;
let rainCount: number;

let thunderstormTemp = 0;
let thunderstormTime = Date.now() + Math.random() * 4000;
let activeThunderstorm = false;

onMounted(() => {
  // Récupération du context du canvas
  context = canvas.value.getContext('2d');

  // On set les positions maximales des particules
  minXPosition = -canvas.value.width * 0.1;
  maxXPosition = canvas.value.width + canvas.value.width * 0.1;

  // On set la densité de particules présent dans la page en fonction de la taille de la fenêtre
  rainCount = canvas.value.width * canvas.value.height / (density * 100);

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
      y: useRandomRange(0, canvas.value.height).result.value,
      speed: Math.random() * 20 + 20,
      height: useRandomRange(50, 100).result.value
    });
  }
};

// On dessine les particules
const draw = () => {
  context.clearRect(0, 0, canvas.value.width, canvas.value.height);

  if (Date.now() > thunderstormTime) {
    activeThunderstorm = true;
  }

  if (activeThunderstorm) {
    thunderstormTemp++;

    let light;

    if (thunderstormTemp < 5 + Math.random() * 10) {
      light = thunderstormTemp / 30;
    } else {
      light = (thunderstormTemp - 10) / 30;
    }

    if (thunderstormTemp > 20) {
      thunderstormTemp = 0;
      activeThunderstorm = false;
      thunderstormTime = Date.now() + Math.random() * 8000 + 2000;
    }

    context.beginPath();
    context.rect(0, 0, canvas.value.width, canvas.value.height);
    context.fillStyle = `rgba(255, 255, 255, ${light})`;
    context.fill();
    context.closePath();
  }

  for (let i = 0; i < drops.length; i++) {
    // On dessine la nouvelle position de la goutte
    context.beginPath();
    context.moveTo(drops[i].x, drops[i].y);
    context.lineTo(drops[i].x + getDropAngle.value, drops[i].y + drops[i].height);
    context.strokeStyle = '#FFFFFF';
    context.stroke();
    context.closePath();

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
  background: url('../assets/images/totoro-landscape.jpg') no-repeat center
  background-size: cover
  filter: blur(6px)

</style>
