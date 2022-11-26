<template>
  <Page
    :year="1988"
    description="Japon, été 1945. Les bombardiers américains arrosent Kobé de plusieurs milliers de tonnes de bombes incendiaires. Un jeune adolescent et sa petite soeur perdent leurs parents. Ils se réfugient dans leur famille proche mais cruelle. Leur quête désespérée d'un monde meilleur les amènera à traverser autant les ruines du Japon ensanglanté par la fin de cette guerre qu'à affronter l'indifférence et la cruauté des adultes..."
    author="Isao Takahata"
    link=""
    overlayColor="#AD5B4D"
  >
    <template v-slot:title>
      Grave of the<br>Fireflies
    </template>

    <template v-slot:background>
      <Particules/>
    </template>
  </Page>
</template>

<script setup lang="ts">
import Page from '../components/Page.vue';
import Landscape from "../components/Landscape.vue";
import Particules from "../components/Particules.vue";
</script>

<style scoped lang="sass">
</style>
