<template>
  <v-app>
    <v-hover v-slot:default="{ hover }"  v-for="produit in produits" :key="produit.id">
      <v-card class="ma-3 pa-6" color="grey lighten-4" max-width="600">
        <v-img :aspect-ratio="16/9" src="boulang.jpg">
          <v-expand-transition>
            <div
              v-if="hover"
              class="d-flex transition-fast-in-fast-out orange darken-2 v-card--reveal display-3 white--text"
              style="height: 100%;"
            >Prix: {{produit.prix}} DH</div>
          </v-expand-transition>
        </v-img>
        <v-card-text class="pt-6" style="position: relative;">
          
          
      <router-link to="/voir">
        <v-btn absolute color="orange" class="white--text" fab large right top>
            <v-icon>mdi-cart</v-icon>
          </v-btn>
          
       
      </router-link>
          <!-- <div class="font-weight-light grey--text title mb-2">For the perfect meal</div> -->
          <h3 class="display-1 font-weight-light orange--text mb-2 text-uppercase">{{produit.nom}}</h3>
          <!-- <div class="font-weight-light title mb-2"> -->
            <!-- Our Vintage kitchen utensils delight any chef.
            <br />Made of bamboo by hand -->
          <!-- </div> -->
        </v-card-text>
      </v-card>
    </v-hover>
  </v-app>
</template>
  


<script lang="ts">
import Vue from "vue";
import axios from "axios";

export default Vue.extend({
  name: "list",
  data() {
    return {
      produits: [],
      images:[
          {
              nom:'peti-pain',
              img:'petit-pain.jpg',
            
          },
          {
              nom:'baguette',
              img:'baguette.jpg'
          },
          {
              nom:'Chocolat',
              img:'Chocolat.jpg'
          },
      ]
    };
  },
  mounted() {
    axios
      .get(
        "https://cddf91f5-abd8-4055-9f24-5e852da192c6.mock.pstmn.io/produits"
      )
      .then((response) => {
        console.log(response);
        this.produits = response.data;
      });
  },
});
</script>
<style>
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: 0.5;
  position: absolute;
  width: 100%;
}
</style>