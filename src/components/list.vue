<template>
  <v-app>
    <v-row>
      <v-col cols="12">
        <v-hover v-slot:default="{ hover }" v-for="produit in produits" :key="produit.id">
          <v-card class="ma-4 pa-3 mx-auto" color="grey lighten-4" max-width="700">
            <v-img :aspect-ratio="16/9" :src="produit.img">
              <v-expand-transition>
                <div
                  v-if="hover"
                  class="d-flex transition-fast-in-fast-out orange darken-2 v-card--reveal display-3 white--text"
                  style="height: 100%;"
                >Prix: {{produit.prix}} DH</div>
              </v-expand-transition>
            </v-img>
            <v-card-text class="pt-6" style="position: relative;">
                <router-link :to="produit.route">

              <v-btn absolute color="orange" class="white--text" fab large right top>
                  <v-icon>mdi-cart</v-icon>
              </v-btn>
                </router-link>

              <h3
                class="display-1 font-weight-light orange--text mb-2 text-uppercase"
              >{{produit.nom}}</h3>
            </v-card-text>
          </v-card>
        </v-hover>
      </v-col>
    </v-row>
    
    
   
  </v-app>
</template>
    

  


<script lang="js">
import Vue from "vue";
import axios from "axios";


// import voir from "./views/voir"

export default Vue.extend({
  name: "list",
  components:{
    
  },
  data() {
    return {
      produits: [],
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