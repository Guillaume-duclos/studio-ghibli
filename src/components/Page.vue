<template>
  <section class="page">
    <slot name="background"/>

    <div class="page-overlay">
      <Overlay :screenWidth="width" :screenHeight="height" :color="props.overlayColor"/>
    </div>

    <main class="page-content">
      <div class="movie-content-container movie-title-container">
        <div class="movie-title-content">
          <time class="movie-creation-date">{{ props.year }}</time>
          <h1 class="movie-title">
            <slot name="title"/>
          </h1>
          <div class="movie-button-container">
            <Button label="Watch trailer" iconName="play"/>
            <a class="imdb-link" :href="props.link">IMDB</a>
          </div>
        </div>
      </div>

      <div class="movie-character-container">
        <img class="movie-character" src="../assets/images/chihiro.png" alt="Chihiro">
      </div>

      <div class="movie-content-container movie-description-container">
        <p class="movie-description">{{ props.description }}</p>
        <p class="movie-author"><span>Director:</span> {{ props.author }}</p>
      </div>
    </main>
  </section>
</template>

<script setup lang="ts">
import { gsap } from 'gsap';
import { onMounted } from 'vue';
import { CustomEase } from 'gsap/CustomEase';
import { useWindowSize } from '@vueuse/core';
import Button from './Button.vue';
import Overlay from './Overlay.vue';

const props = defineProps({
  year: Number,
  illustration: String,
  overlayColor: String,
  link: String,
  description: String,
  author: String,
});

const { width, height } = useWindowSize();

onMounted(() => {
  gsap.registerPlugin(CustomEase);
});
</script>

<style scoped lang="sass">
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@600&display=swap')
@import url('https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,400;0,700;1,400&display=swap')

.page
  display: flex
  flex-direction: column
  justify-content: space-between
  position: relative
  padding: 90px 40px 106px 40px
  height: calc(100vh - 90px - 106px)
  background-size: cover
  overflow: hidden

  ::selection
    background: v-bind(overlayColor)

  .page-overlay
    position: absolute
    top: 0
    bottom: 0
    left: -100%
    right: 100%
    width: 300vw

  .page-content
    display: flex
    justify-content: space-between
    flex: 1
    transform: scale(.9)
    opacity: 0

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
          font-size: 90px
          line-height: 90px
          font-weight: 600

          @media all and (min-width: 1441px)
            font-size: calc(8000vw / 1018)
            line-height: calc(8000vw / 1018)

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
