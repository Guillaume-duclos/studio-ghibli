<template>
  <div class="test">
    <div class="mouse-infos">
      <p>x: {{ x }}</p>
      <p>y: {{ y }}</p>
      <p>angle: {{ getDropAngle }}</p>
    </div>
    <canvas ref='canvas' :width='width' :height='height'/>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
import { useWindowSize, useMouse } from '@vueuse/core';

const { width, height } = useWindowSize();
const { x, y } = useMouse();

const canvas = ref();
const rainCount = 160;
const drops: any[] = [];
let minXPosition: number;
let maxXPosition: number;
let context: any;

onMounted(() => {
  context = canvas.value.getContext('2d');

  minXPosition = -canvas.value.width * 0.1;
  maxXPosition = canvas.value.width + canvas.value.width * 0.1;

  init();
  animate();
});

// Calcule du sens des particules en fonction de la position du curseur
const getDropAngle = computed(() => {
  return parseFloat((Math.round((5 / (width.value / 2)) * (x.value - (width.value / 2)) * 100) / 100).toFixed(2));
});

// Initialisation des particules
const init = () => {
  for (let i = 0; i < rainCount; i++) {
    drops.push({
      x: randomIntFromInterval(minXPosition, maxXPosition),
      y: 0,
      speed: Math.random() * 20 + 20,
      height: randomIntFromInterval(40, 80)
    });
  }
};

// Calcule un nombre aléatoire entre 2 valeurs
const randomIntFromInterval = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// On dessine les particules
const draw = () => {
  context.clearRect(0, 0, canvas.value.width, canvas.value.height);

  for (let i = 0; i < drops.length; i++) {
    // On dessine la nouvelle position de la goutte
    context.beginPath();
    context.moveTo(drops[i].x, drops[i].y);
    context.lineTo(drops[i].x + getDropAngle.value, drops[i].y + drops[i].height);
    context.fillStyle = 'round';
    context.stroke();

    // On met à jour la position de la goutte
    drops[i].x += getDropAngle.value;
    drops[i].y += drops[i].speed;

    // Si la goutte sort du canvas, on recalcule sa nouvelle position
    if (drops[i].x < minXPosition || drops[i].x > maxXPosition || drops[i].y > canvas.value.width) {
      drops[i].x = randomIntFromInterval(minXPosition, maxXPosition);
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
.test
  // background: url('../assets/images/spirited-away-landscape.jpeg')
  background-size: cover
  background-repeat: no-repeat

  .mouse-infos
    position: absolute
    top: 0
    right: 0
    padding: 10px
    width: 120px
    background-color: #CCCCCC
    color: #000000
    z-index: 20

    p
      margin: 0
</style>
