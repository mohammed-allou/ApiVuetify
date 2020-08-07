<template>
  <div class="home">
    <v-container>
      <v-row class="text-center">
        <v-col cols="12">
          <v-img :src="require('../assets/boulang.jpg')" class="my-3" contain height="600" />
        </v-col>

        <v-col class="mb-4">
          <h1 class="display-2 font-weight-bold mb-3">Bienvenu chez Colombo</h1>

          <p class="subheading font-weight-regular">"Boulanger" C'est notre métier</p>
        </v-col>
      </v-row>
    </v-container>
    <div>
      <v-footer padless>
        <v-card class="flex">
          <v-card-title class="yellow darken-4">
            <strong class="subheading"></strong>

            <v-spacer></v-spacer>

            <v-btn v-for="icon in icons" :key="icon" class="mx-4" dark icon>
              <v-icon size="24px">{{ icon }}</v-icon>
            </v-btn>
          </v-card-title>
        </v-card>
      </v-footer>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  data: () => ({
    icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"],
  }),
  name: "Home",
  components: {},
};
</script>