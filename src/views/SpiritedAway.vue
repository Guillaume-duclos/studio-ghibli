<template>
  <Page
    :year="2001"
    description="La petite Chihiro accompagne ses parents dans une promenade sylvestre qui doit les conduire vers leur nouvelle maison en banlieue. Alors qu'elle prend un raccourci à travers un tunnel peu emprunté, la petite famille se retrouve soudain en territoire inconnu. Le temps de retrouver leur chemin, ils font une halte dans un gigantesque restaurant en plein air, totalement déserté."
    author="Hayao Miyazaki"
    link=""
    overlayColor="#E8615E"
  >
    <template v-slot:title>
      Spirited<br>Away
    </template>

    <template v-slot:background>
      <Landscape/>
    </template>
  </Page>
</template>

<script setup lang="ts">
import Page from '../components/Page.vue';
import Landscape from "../components/Landscape.vue";
</script>

<style scoped lang="sass">
</style>
