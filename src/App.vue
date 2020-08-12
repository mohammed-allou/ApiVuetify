<template>
  <v-app>
    <navbar />
    <!-- <v-app-bar app color="yellow darken-4" dark>
      
      <v-row>
        <v-col class="pa-2" outlined tile>
          <router-link to="/">
            <v-icon>mdi-home</v-icon>
          </router-link>
        </v-col>
        <v-text-field         
          append-icon="mdi-magnify"
          hide-details
          type="search"
          id="search"
          placeholder="Rechercher ..."
          autocomplete="on"
        ></v-text-field>

        <v-spacer></v-spacer>
        <v-tab>
          <router-link to="chariot">
          <v-badge color="green" content="6">
            <v-icon>mdi-cart</v-icon>
            
          </v-badge>
          </router-link>
        </v-tab>
        <chariot/>

        <v-col class="pa-2" outlined tile>
          <router-link to="/produits">
            <h2>Listes des produits</h2>
          </router-link>
        </v-col>
      </v-row>
    </v-app-bar>-->

    <router-view></router-view>
  </v-app>
</template>

<script>
import navbar from "./components/navbar";
export default {
  name: "App",
  components: {
    navbar,
  },
};
</script>
