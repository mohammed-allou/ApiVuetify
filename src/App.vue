<template>
  <v-app>
    <v-app-bar app color="yellow darken-4" dark>
      <v-spacer></v-spacer>
      <v-row>
        <v-col class="pa-2" outlined tile>
          <router-link to="/">
            <v-icon>mdi-home-city</v-icon>
          </router-link>
        </v-col>

        <v-spacer></v-spacer>

        <v-col class="pa-2" outlined tile>
          <router-link to="/produits">
            <h2>Listes des produits</h2>
          </router-link>
        </v-col>
      </v-row>
    </v-app-bar>

    <router-view></router-view>
  </v-app>
</template>

<script>
export default {
  name: "App",
};
</script>
