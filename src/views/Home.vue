<template>
  <div class="home">
    <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-img :src="require('../assets/boulangerie.png')" class="my-3" contain height="200" />
      </v-col>

      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">Bienvenu chez Colombo</h1>

        <p class="subheading font-weight-regular">"Boulanger" C'est notre métier</p>
      </v-col>
    </v-row>
  </v-container>
  </div>
</template>

<script>
// @ is an alias to /src
import pain from '../components/pain'

export default {
  name: 'Home',
  components: {
   pain
  }
}
</script>