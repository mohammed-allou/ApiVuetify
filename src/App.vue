<template>
  <v-app>
    <v-app-bar app color="yellow darken-4" dark>
      <v-spacer></v-spacer>

      <router-link to="/produit">
        <h2 class="text-center">Listes des produits</h2>
      </router-link>
      <v-divider></v-divider>
      <router-link to="/">
        <v-icon>mdi-home-city</v-icon>
      </router-link>
    </v-app-bar>

    <v-main>
      <Home />
    </v-main>
    <router-view></router-view>
  </v-app>
</template>

<script>
export default {
  name: "App",
};
</script>
