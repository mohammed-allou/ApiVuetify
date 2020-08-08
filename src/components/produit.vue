<template>
  <div class="pain" >
   
      <v-card v-if="!produit" class="mx-auto my-12" max-width="374">
        <v-card-title>Produit introuvable</v-card-title>
      </v-card>
      <v-card v-else class="mx-auto my-12" max-width="374">
        <v-img height="250" :src="produit.img"></v-img>
        <v-card-title>{{produit.nom}} {{$route.params.id}}</v-card-title>
        <v-card-text>
          <v-row align="center" class="mx-0">
            <v-rating :value="4.5" color="amber" dense half-increments readonly size="14"></v-rating>
            <div class="grey--text ml-4">4.5 (413)</div>
          </v-row>
          <div class="my-4 subtitle-1">DH • {{produit.prix}}</div>
          <div>{{produit.description}}</div>
        </v-card-text>
        <v-divider class="mx-4"></v-divider>
        <v-card-title>Personnaliser</v-card-title>
        <v-card-text>
          <v-chip-group active-class="deep-purple accent-4 white--text" column>
            <v-chip>Au chocolat</v-chip>
            <v-chip>Au amendes</v-chip>
            <v-chip>Au pommes</v-chip>
            <v-chip>Au fruits sec</v-chip>
          </v-chip-group>
        </v-card-text>

        <v-card-actions>
          <v-btn color="deep-purple lighten-2" text>Acheter</v-btn>
        </v-card-actions>
      </v-card>
   
  </div>
</template>
<script>
import axios from "axios";

export default {
  data: () => ({
    produit: {},
  }),

  mounted() {
    axios
      .get(
        "https://cddf91f5-abd8-4055-9f24-5e852da192c6.mock.pstmn.io/produits"
      )
      .then((response) => {
        let result = response.data.filter(prod => prod.id == this.$route.params.id);
        this.produit = result[0]
      });
  },
};
</script>
     
  

