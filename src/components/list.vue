<template>
  <v-app>
    <v-card class="mx-auto" max-width="344" v-for="produit in produits" :key="produit.id">
      <v-card-text >
        <div>Word of the Day</div>
        <p class="display-1 text--primary">{{produit.nom}}</p>
        <p>{{produit.id}}</p>
        <div class="text--primary">
          {{produit.prix}}
          
        </div>
        <p>{{produit.Libelle}}</p>
      </v-card-text>
      <v-card-actions>
        <v-btn text color="deep-purple accent-4">Description</v-btn>
      </v-card-actions>
    </v-card>
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
   
    };
  },
  mounted() {
    
      axios
        .get(
          "https://cddf91f5-abd8-4055-9f24-5e852da192c6.mock.pstmn.io/produits"
        )
        .then((response) => {
         
          console.log(response)
          this.produits = response.data;
          
        });

  },
   
});
</script>