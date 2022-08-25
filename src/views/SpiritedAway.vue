<template>
  <section class="spirited-away">
    <div class="overlay" />

    <main class="spirited-away-content">
      <div class="movie-content-container movie-title-container">
        <div class="movie-title-content">
          <time class="movie-creation-date">2001</time>
          <h1 class="movie-title">Spirited <br/>Away</h1>
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
import Button from '../components/Button.vue';
import { gsap } from 'gsap';
import { CustomEase } from 'gsap/CustomEase';
import { onMounted, watch } from 'vue';

const props = defineProps({
  showingMenu: {}
});

onMounted(() => {
  gsap.registerPlugin(CustomEase);
});

watch(() => props.showingMenu, (value) => {
  const backgroundGradient1 = 'linear-gradient(115deg, rgba(0, 0, 0, 0) 49.95%, rgba(232, 97, 94, .5) 50%)';
  const backgroundGradient2 = 'linear-gradient(65deg, rgba(0, 0, 0, 0) 29.95%, rgba(232, 97, 94, .5) 30%)';

  if (value) {
    gsap.to('.spirited-away-content', {
      x: '-25%',
      duration: .5,
      ease: 'power3.inOut'
    });

    gsap.fromTo(
      '.overlay',
      {
        background: backgroundGradient1,
      },
      {
        background: backgroundGradient2,
        duration: .45,
        ease: 'power3.inOut'
      }
    );
  } else {
    gsap.to('.spirited-away-content', {
      x: 0,
      duration: .6,
      ease: 'power3.inOut',
      delay: .4
    });

    gsap.to('.overlay', {
      background: backgroundGradient1,
      duration: .45,
      ease: 'power3.inOut',
      delay: .4
    });
  }
});
</script>

<style scoped lang="sass">
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@600&display=swap')
@import url('https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,400;0,700;1,400&display=swap')

.spirited-away
  display: flex
  flex-direction: column
  justify-content: space-between
  position: relative
  padding: 90px 40px 106px 40px
  height: calc(100vh - 90px - 106px)
  background-size: cover
  overflow: hidden

  &:before
    content: ''
    position: absolute
    inset: -10px
    z-index: -1
    display: block
    background: url('../assets/images/spirited-away-landscape.jpeg') no-repeat center
    background-size: cover
    filter: blur(6px)

  .overlay
    position: absolute
    inset: 0
    background: linear-gradient(115deg, rgba(0, 0, 0, 0) 49.95%, rgba(232, 97, 94, .5) 50%)
    z-index: -1

  .spirited-away-content
    display: flex
    justify-content: space-between
    flex: 1
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
            color: #000000
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
