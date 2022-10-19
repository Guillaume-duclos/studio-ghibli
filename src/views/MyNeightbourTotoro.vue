<template>
  <section class="my-neightbour-totoro">
    <div class="my-neightbour-totoro-background"/>

    <div class="my-neightbour-totoro-overlay">
      <Overlay :screenWidth="width" :screenHeight="height" color="#191919"/>
    </div>

    <main class="my-neightbour-totoro-content">
      <div class="movie-content-container movie-title-container">
        <div class="movie-title-content">
          <time class="movie-creation-date">2001</time>
          <h1 class="movie-title">Spirited <br/>Away 2</h1>
          <div class="movie-button-container">
            <Button label="Watch trailer" iconName="play" />
            <a class="imdb-link" href="">IMDB</a>
          </div>
        </div>
      </div>

      <div class="movie-character-container">
        <img class="movie-character" src="../assets/images/chihiro.png" alt="Chihiro">
      </div>

      <div class="movie-content-container movie-description-container">
        <p class="movie-description">La petite Chihiro accompagne ses parents dans une promenade sylvestre qui doit les conduire vers leur nouvelle maison en banlieue. Alors qu'elle prend un raccourci à travers un tunnel peu emprunté, la petite famille se retrouve soudain en territoire inconnu. Le temps de retrouver leur chemin, ils font une halte dans un gigantesque restaurant en plein air, totalement déserté.</p>
        <p class="movie-author"><span>Director:</span> Hayao Miyazaki</p>
      </div>
    </main>
  </section>
</template>

<script setup lang="ts">
import { gsap } from 'gsap';
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { CustomEase } from 'gsap/CustomEase';
import { useWindowSize } from '@vueuse/core';
import Button from '../components/Button.vue';
import Overlay from '../components/Overlay.vue';

const route = useRoute();
const { width, height } = useWindowSize();

const props = defineProps({
  showingMenu: {}
});

onMounted(() => {
  gsap.registerPlugin(CustomEase);
});

/*watch(() => props.showingMenu, (value) => {
  const backgroundGradient1 = 'linear-gradient(115deg, rgba(0, 0, 0, 0) 49.95%, rgba(232, 97, 94, .5) 50%)';
  const backgroundGradient2 = 'linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(232, 97, 94, .5) 0%)';

  if (value) {
    gsap.to('.spirited-away-content', {
      opacity: 0,
      scale: .98,
      duration: .3,
      ease: 'power3.inOut'
    });

    gsap.fromTo(
      '.overlay',
      {
        background: backgroundGradient1,
      },
      {
        background: backgroundGradient2,
        delay: .3,
        duration: .6,
        ease: 'power3.inOut'
      }
    );
  } else {
    gsap.fromTo(
      '.overlay',
      {
        background: backgroundGradient2,
      },
      {
        background: backgroundGradient1,
        duration: .6,
        ease: 'power3.inOut'
      }
    );

    gsap.to('.spirited-away-content', {
      opacity: 1,
      scale: 1,
      duration: .3,
      delay: .6,
      ease: 'power3.inOut'
    });
  }
});*/

// Au changement de page
/*watch(() => route.name, (value) => {
  console.log('Update n°2 : ', value);

  const backgroundGradient1 = 'linear-gradient(115deg, rgba(0, 0, 0, 0) 49.95%, rgba(232, 97, 94, .5) 50%)';
  const backgroundGradient2 = 'linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(232, 97, 94, .5) 0%)';

  gsap.to('.spirited-away2-content', {
    opacity: 0,
    scale: .98,
    duration: .3,
    ease: 'power3.inOut'
  });

  gsap.fromTo(
    '.overlay',
    {
      background: backgroundGradient1,
    },
    {
      background: backgroundGradient2,
      delay: .3,
      duration: .6,
      ease: 'power3.inOut'
    }
  );

  gsap.to('.spirited-away2', {
    xPercent: -100,
    delay: .3,
    duration: .3,
    ease: 'power3.inOut'
  });
});*/
</script>

<style scoped lang="sass">
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@600&display=swap')
@import url('https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,400;0,700;1,400&display=swap')

.my-neightbour-totoro
  display: flex
  flex-direction: column
  justify-content: space-between
  position: relative
  padding: 90px 40px 106px 40px
  height: calc(100vh - 90px - 106px)
  background-size: cover
  overflow: hidden

  .my-neightbour-totoro-background

    &:before
      content: ''
      position: absolute
      inset: -10px
      z-index: -1
      display: block
      background: url('../assets/images/totoro-landscape.jpg') no-repeat center
      background-size: cover
      filter: blur(6px)

  .my-neightbour-totoro-overlay
    position: absolute
    top: 0
    bottom: 0
    left: -100%
    right: 100%
    width: 300vw
    z-index: -1
    border: 2px solid red

  .my-neightbour-totoro-content
    display: flex
    justify-content: space-between
    flex: 1
    opacity: 0
    border: 0px solid

    .movie-content-container
      display: flex
      flex-direction: column
      justify-content: center
      width: calc(50% - 150px)
      box-sizing: border-box

    .movie-title-container
      padding-right: 50px

      .movie-title-content
        align-self: flex-end

        .movie-creation-date, .movie-title
          margin: 0
          font-family: 'Cormorant Garamond', serif

        .movie-creation-date
          font-size: 36px

        .movie-title
          margin-top: 16px
          font-size: 120px
          line-height: 120px
          font-weight: 600

        .movie-button-container
          display: flex
          align-items: center
          gap: 50px
          margin-top: 50px
          font-family: 'Nunito', sans-serif

          .imdb-link
            margin: 0
            height: 20px
            color: var(--text)
            line-height: 22px
            font-size: 14px
            text-decoration: none

    .movie-character-container
      display: flex
      flex-direction: column
      justify-content: flex-end
      width: 300px
      margin-bottom: -106px
      left: calc(50% - 150px)

      img
        display: block
        width: 100%
        box-sizing: border-box

    .movie-description-container
      padding-left: 50px

      .movie-description, .movie-author
        margin: 0
        font-family: 'Nunito', sans-serif

      .movie-description
        max-width: 350px
        font-size: 16px
        line-height: 24px
        font-style: italic

      .movie-author
        margin-top: 35px

        span
          font-weight: 700

</style>
