<template>
  <v-app>
    <v-app-bar app color="primary" dark >
      <v-spacer></v-spacer>

      <router-link to="/produits">
        <h2 class="text-center white">Listes des produits</h2>
      </router-link>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App"
}
</script>
