<template>
  <section class="spirited-away">
    <div class="overlay"/>

    <nav>
      <p>Studio Ghibli</p>
      <button>
        <span />
      </button>
    </nav>

    <main>
      <div class="movie-content-container movie-title-container">
        <div class="movie-title-content">
          <time class="movie-creation-date">2001</time>
          <h1 class="movie-title">Spirited <br/>Away</h1>
          <div class="movie-button-container">
            <Button label="Watch trailer" iconName="play" />
            <p>IMDB</p>
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

    <footer>
      <button>
        <img src="../assets/icons/arrow-left.svg" alt="Arrow left" />
        My Neightbour Totoro
      </button>
      <button>
        Castle In The Sky
        <img src="../assets/icons/arrow-right.svg" alt="Arrow right" />
      </button>
    </footer>
  </section>
</template>

<script setup lang="ts">
import Button from '../components/Button.vue';
</script>

<style scoped lang="sass">
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@600&display=swap')
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;700&display=swap')

.spirited-away
  display: flex
  flex-direction: column
  justify-content: space-between
  position: relative
  padding: 35px 40px
  height: calc(100vh - 70px)
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
    background: linear-gradient(115deg, rgba(0, 0, 0, 0) 49.95%, rgba(#E8615E, .5) 50%)
    z-index: -1

  nav
    display: flex
    justify-content: space-between
    border: 0px solid

    p
      margin: 0
      font-family: 'Cormorant Garamond', sans-serif
      font-size: 28px

    button
      position: relative
      width: 25px
      height: 21px
      padding: 0
      border: 0px solid
      background: none

      span
        display: block
        width: 100%
        height: 3px
        border-radius: 2px
        background-color: #000000

        &:before, &:after
          content: ''
          position: absolute
          left: 0
          width: 100%
          height: 3px
          border-radius: 2px
          background-color: #000000

        &:before
          top: 0

        &:after
          bottom: 0

  main
    display: flex
    justify-content: space-between
    flex: 1
    border: 0px solid black

    .movie-content-container
      display: flex
      flex-direction: column
      justify-content: center
      border: 0px solid black
      width: calc(50% - 150px)
      box-sizing: border-box

    .movie-title-container
      padding-right: 50px

      .movie-title-content
        border: 0px solid black
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
          font-weight: 500

        .movie-button-container
          display: flex
          gap: 50px
          margin-top: 50px
          font-family: 'Nunito', sans-serif

    .movie-character-container
      border: 0px solid red
      width: 300px

      img
        position: absolute
        width: 300px
        bottom: 0
        left: calc(50% - 150px)
        box-sizing: border-box
        border: 0px solid red

    .movie-description-container
      padding-left: 50px

      .movie-description, .movie-author
        margin: 0
        font-family: 'Nunito', sans-serif

      .movie-description
        max-width: 350px

      .movie-author
        margin-top: 35px

        span
          font-weight: 700

  footer
    display: flex
    justify-content: space-between
    border: 0px solid red

    button
      position: relative
      display: flex
      align-items: center
      padding: 0
      border: none
      background: none
      font-family: 'Nunito', sans-serif
      font-size: 14px
      overflow: hidden

      &:after
        content: ''
        position: absolute
        top: 0
        bottom: 0
        z-index: -1
        background: rgba(#FFFFFF, .6)
        transform: rotate(180deg)
        transition: .3s ease-in-out

      &:first-child:after, &:last-child:after
        width: calc(36px + 5px)

      &:first-child:after
        left: -5px

      &:last-child:after
        right: -5px

      &:hover:after
        width: calc(100% + 5px)
        transition: all .3s ease-in-out

      &:hover:first-child img
        margin-right: 2px
        transition: margin-right .3s ease-in-out

      &:hover:last-child img
        margin-left: 2px
        transition: margin-left .3s ease-in-out

      img
        width: 16px
        height: 16px
        padding: 10px

      &:first-child
        padding-right: 10px

        img
          margin-right: 12px
          transition: margin-right .3s ease-in-out

      &:last-child
        padding-left: 10px

        img
          margin-left: 12px
          transition: margin-left .3s ease-in-out

</style>
