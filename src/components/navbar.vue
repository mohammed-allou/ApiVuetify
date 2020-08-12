<template>
  <nav>
    <v-app-bar color="white" dark app class="line">
      <!-- <v-app-bar-nav-icon>

      </v-app-bar-nav-icon>-->
      <v-toolbar-title class="text-uppercase red--text">
        <span class="font-weight-light">boulangerie-</span>
        <span>colombo</span>
      </v-toolbar-title>
      <v-row>
        <v-spacer></v-spacer>
        <v-col cols="12" md="4">
          <v-text-field
            append-icon="mdi-magnify"
            type="search"
            id="search"
            placeholder="Rechercher ..."
            red--text
            color="red"
            dark
          ></v-text-field>
        </v-col>
      </v-row>

      <template>
        <v-btn color="red" dark smal absolute botton right fab>
          <v-icon>mdi-baguette</v-icon>
        </v-btn>
      </template>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" dark app mini-variant class="red">
      <v-list flat>
        <v-list-item class="mb-12">
          <v-list-item-action>
            <v-icon big left fab>mdi-baguette</v-icon>
          </v-list-item-action>
        </v-list-item>
        <v-list-item router to="/">
          <v-list-item-action>
            <v-icon>mdi-home</v-icon>
          </v-list-item-action>
        </v-list-item>

        <v-list-item router to="/produits">
          <v-list-item-action>
            <v-icon>mdi-city</v-icon>
          </v-list-item-action>
        </v-list-item>
        <v-list-item router to="/">
          <v-list-item-action>
            <v-badge color="green">
              <!-- <template v-slot:badge>{{this.cart.length}}</template> -->
              <v-icon>mdi-cart</v-icon>
            </v-badge>
          </v-list-item-action>
        </v-list-item>
        <v-list-item router to="/">
          <v-list-item-action>
            <v-icon>mdi-bio</v-icon>
          </v-list-item-action>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
export default {
  name: "navbar",
  props: ["this.cart.length"],
  data: () => ({
    drawer: true,
  }),
};
</script>

<style>
</style>