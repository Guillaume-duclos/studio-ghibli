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
const rainCount = 100;
const drops: any[] = [];
let context: any;

onMounted(() => {
  context = canvas.value.getContext('2d');

  init();
  animate();
});

const init = () => {
  for (let i = 0; i < rainCount; i++) {
    drops.push({
      x: Math.random() * canvas.value.width,
      y: 0,
      speed: Math.random() * 10 + 10,
      height: randomIntFromInterval(20, 60)
    });
  }
};

const randomIntFromInterval = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const draw = () => {
  context.clearRect(0, 0, canvas.value.width, canvas.value.height);

  for (let i = 0; i < drops.length; i++) {
    // On dessine la nouvelle position de la goutte
    context.beginPath();
    context.moveTo(drops[i].x, drops[i].y);
    context.lineTo(drops[i].x, drops[i].y + drops[i].height);
    context.fillStyle = 'round';
    context.stroke();

    // On met à jour la position de la goutte
    drops[i].y += drops[i].speed;

    // Si la goutte sort du canvas, on recalcule sa nouvelle position
    if (drops[i].x > canvas.value.width || drops[i].y > canvas.value.width) {
      drops[i].x = Math.random() * canvas.value.width;
      drops[i].y = 0;
    }
  }
};

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
</style>
