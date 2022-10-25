<template>
  <Page
    :year="1999"
    description="Deux petites filles, Mei, 4 ans, et Satsuki, 10 ans, s'installent dans une grande maison à la campagne avec leur père pour se rapprocher de l'hôpital où séjourne leur mère. Elles découvrent la nature tout autour de la maison et, surtout, l'existence de créatures merveilleuses, les Totoros, avec qui elles deviennent très amies."
    author="Hayao Miyazaki"
    link=""
    overlayColor="#191919"
  >
    <template v-slot:title>
      My<br>Neightbour<br>Totoro
    </template>

    <template v-slot:background>
      <Rain/>
    </template>
  </Page>
</template>

<script setup lang="ts">
import Page from '../components/Page.vue';
import Rain from '../components/Rain.vue';
</script>

<style scoped lang="sass">
</style>
