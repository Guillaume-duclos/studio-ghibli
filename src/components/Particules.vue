<template>
  <div class="test">
    <div class="mouse-infos">
      <p>x: {{ x }}</p>
      <p>y: {{ y }}</p>
    </div>
    <canvas ref='canvas' :width='width' :height='height'/>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useWindowSize, useMouse } from '@vueuse/core';
import { useRandomRange } from '../composables/randomRange';
import ParticuleShadowBlurDirectionEnum from '../enums/particule-shadow-blur-direction.enum';

const { width, height } = useWindowSize();
const { x, y } = useMouse();

const canvas = ref();
const particulesCount = 200;
const particules: any[] = []
const minParticuleRadius: number = 6;
const maxParticuleRadius: number = 12;
const minShadowBlur: number = 6;
const maxShadowBlur: number = 12;
const density = 2;
let minXPosition: number;
let maxXPosition: number;
let minYPosition: number;
let maxYPosition: number;
let context: any;

onMounted(() => {
  context = canvas.value.getContext('2d');

  minXPosition = -20;
  maxXPosition = canvas.value.width + 20;
  minYPosition = -20;
  maxYPosition = canvas.value.height + 20;

  init();
  animate();
});

// Initialisation des particules
const init = () => {
  for (let i = 0; i < particulesCount; i++) {
    particules.push({
      x: useRandomRange(minXPosition, maxXPosition).result.value,
      y: useRandomRange(minYPosition, maxYPosition).result.value,
      dx: (Math.random() - 0.5) * 0.5,
      dy: (Math.random() - 0.5) * 0.5,
      radius: useRandomRange(minParticuleRadius, maxParticuleRadius).result.value,
      shadowBlur: useRandomRange(minShadowBlur, maxShadowBlur).result.value,
      shadowBlurDirection: useRandomRange(0, 1).result.value ? ParticuleShadowBlurDirectionEnum.DOWN : ParticuleShadowBlurDirectionEnum.UP
    });
  }
};

// On dessine les particules
const draw = () => {
  context.clearRect(0, 0, canvas.value.width, canvas.value.height);

  for (let i = 0; i < particules.length; i++) {
    // On dessine la nouvelle position de la particule
    context.beginPath();
    context.arc(particules[i].x, particules[i].y, particules[i].radius, 0, 2 * Math.PI);
    context.fillStyle = '#FFDE94';
    context.shadowColor = '#FFDE94';
    context.shadowBlur = particules[i].radius;
    context.closePath();
    context.fill();

    // On vérifie si la taille du shadow de la particule est inférieure ou supérieure aux niveaux voulus
    if (particules[i].radius <= minParticuleRadius) {
      particules[i].shadowBlurDirection = ParticuleShadowBlurDirectionEnum.UP;
    } else if (particules[i].radius >= maxParticuleRadius) {
      particules[i].shadowBlurDirection = ParticuleShadowBlurDirectionEnum.DOWN;
    }

    // On met à jour la taille du shadow de la particule
    if (particules[i].shadowBlurDirection === ParticuleShadowBlurDirectionEnum.DOWN) {
      particules[i].radius -= 0.01;
      // particules[i].shadowBlur -= 0.07;
    } else {
      particules[i].radius += 0.01;
      // particules[i].shadowBlur += 0.07;
    }

    // On vérifie si la particule sort de l'écran sur l'axe horizontal
    if (particules[i].x + (particules[i].radius * 4) < 0 || particules[i].x - (particules[i].radius * 4) > canvas.value.width) {
      particules[i].dx = -particules[i].dx;
    }

    // On vérifie si la particule sort de l'écran sur l'axe vertical
    if (particules[i].y + (particules[i].radius * 4) < 0 || particules[i].y - (particules[i].radius * 4) > canvas.value.height) {
      particules[i].dy = -particules[i].dy;
    }

    particules[i].x += particules[i].dx;
    particules[i].y += particules[i].dy;
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
  background: #000000
  //filter: blur(6px)

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
