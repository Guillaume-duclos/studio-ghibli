<template>
  <div class="container">
    <div class="background"/>
    <canvas ref='canvas' :width='width + 20' :height='height + 20'/>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useWindowSize, useMouse } from '@vueuse/core';
import { useRandomRange } from '../composables/randomRange';

const { width, height } = useWindowSize();
const { y } = useMouse();
const canvas = ref();

const particules: any[] = []
const minParticuleRadius: number = 6;
const maxParticuleRadius: number = 12;
const density = 100;
const colorPanel = ['#FFDE94', '#F4B400', '#F0A629'];
let minXPosition: number;
let maxXPosition: number;
let minYPosition: number;
let maxYPosition: number;
let context: any;
let particulesCount: number;

onMounted(() => {
  context = canvas.value.getContext('2d');

  minXPosition = -20;
  maxXPosition = canvas.value.width + 20;
  minYPosition = -20;
  maxYPosition = canvas.value.height + 20;

  // On set la densité de particules présent dans la page en fonction de la taille de la fenêtre
  particulesCount = canvas.value.width * canvas.value.height / (density * 100);

  init();
  animate();
});

// Initialisation des particules
const init = () => {
  for (let i = 0; i < particulesCount; i++) {
    particules.push({
      x: useRandomRange(minXPosition, maxXPosition).result.value,
      y: useRandomRange(minYPosition, maxYPosition).result.value,
      dx: (Math.random() - 0.2) * 0.2,
      dy: (Math.random() - 0.2) * 0.2,
      radiusX: useRandomRange(minParticuleRadius, maxParticuleRadius).result.value,
      radiusY: useRandomRange(minParticuleRadius, maxParticuleRadius).result.value,
      color: colorPanel[useRandomRange(0, colorPanel.length - 1).result.value],
      shadowColor: colorPanel[useRandomRange(0, colorPanel.length - 1).result.value],
    });
  }
};

// On dessine les particules
const draw = () => {
  context.clearRect(0, 0, canvas.value.width, canvas.value.height);

  // On dessine le fond noir
  context.beginPath()
  context.rect(0, 0, canvas.value.width, canvas.value.height);
  context.fillStyle = `rgba(0, 0, 0, ${y.value * 100 / canvas.value.height / 1000 + 0.9})`;
  context.fill();
  context.closePath();

  for (let i = 0; i < particules.length; i++) {
    // On dessine la nouvelle position de la particule
    context.beginPath();
    context.ellipse(
      particules[i].x,
      particules[i].y,
      Math.abs(Math.sin(particules[i].radiusX)) * 5 + 5,
      Math.abs(Math.sin(particules[i].radiusY)) * 5 + 5,
      0,
      0,
      2 * Math.PI
    );
    context.fillStyle = particules[i].color;
    context.shadowColor = particules[i].shadowColor;
    context.shadowBlur = Math.abs(Math.sin(particules[i].radius)) * 5 + 5;
    context.fill();
    context.closePath();

    // On update le radius
    particules[i].radiusX += 0.005;
    particules[i].radiusY += 0.005;

    // On vérifie si la particule sort de l'écran sur l'axe horizontal
    if (particules[i].x + (particules[i].radiusX * 4) < 0 || particules[i].x - (particules[i].radiusX * 4) > canvas.value.width) {
      particules[i].dx = -particules[i].dx;
    }

    // On vérifie si la particule sort de l'écran sur l'axe vertical
    if (particules[i].y + (particules[i].radiusY * 4) < 0 || particules[i].y - (particules[i].radiusY * 4) > canvas.value.height) {
      particules[i].dy = -particules[i].dy;
    }

    particules[i].x += particules[i].dx;
    particules[i].y += particules[i].dy;
  }
};

// Animation du canvas
const animate = () => {
  if (canvas.value) draw();
  window.requestAnimationFrame(animate);
};
</script>

<style scoped lang="sass">
.container
  position: absolute
  inset: 0
  filter: blur(6px)

  canvas
    margin: -10px 0 0 -10px

  .background
    position: absolute
    inset: -10px
    background: url('../assets/images/grave-of-the-fireflies-landscape.png') no-repeat bottom
    background-size: cover

</style>
