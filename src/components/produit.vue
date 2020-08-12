<template v-for="produit in produits" :key="produit.id">
  <div class="pain">
    <v-card v-if="!produit" class="mx-auto my-12" max-width="400">
      <v-card-title>Produit introuvable</v-card-title>
    </v-card>
    <v-card v-else class="mx-auto my-12" max-width="400">
      <v-img height="250" :src="produit.img"></v-img>
      <v-card-title>{{produit.nom}}</v-card-title>
      <v-card-text>
        <v-row align="center" class="mx-0">
          <v-rating :value="4.5" color="amber" dense half-increments readonly size="14"></v-rating>
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
      <div class="cart">
        <!-- <v-btn class="cart_bouton">-</v-btn>
          <span class="cart_quantite">0</span>
        <v-btn class="cart_bouton">+</v-btn>-->
        <v-btn @click="ajoutAuPanier(produit)">
          <v-icon>mdi-cart</v-icon>
        </v-btn>
        <div>:{{this.cart.length}} Articles dans le panier</div>
      </div>
      

      <!-- <v-card-actions>
        <div>
          <v-btn @click="addToAchat(produit)">
            <v-icon>
              mdi-cart
              <span>Panier</span>
            </v-icon>
          </v-btn>

         
          <div class="nom">
            <h4>{{produit.nom}}</h4>
            <p>{{produit.prix}}</p>
          </div>
          
        </div>
      </v-card-actions>-->
    </v-card>
    
  </div>
</template>
<script>
import axios from "axios";

export default {
  props:["this.cart.length"],
   
  data: () => ({
    produit: [],
    cart: [],
    quantite: [],
  }),
  methods: {
   
    // ajoutAuPanier(produit) {
    //   for (let i = 0; i < this.cart.length; i++) {
    //     if (this.cart[i].id === produit.id) {
    //       return this.cart[i].quantite++;
    //     }
    //   }
    //   this.cart.push({
    //     id: produit.id,
    //     img: produit.img,
    //     description: produit.description,
    //     prix: produit.prix,
    //     quantite: 1,
    //   });
    // },
    // computed: {
    //   cart() {
    //     return this.produits.filter((produit) => produit.quantite > 0);
    //   },
    // },
    ajoutAuPanier(produit) {
      this.cart.push(produit);
      console.log(produit);
      console.log(this.cart);
    },

    mounted() {
      axios
        .get(
          "https://cddf91f5-abd8-4055-9f24-5e852da192c6.mock.pstmn.io/produits"
        )
        .then((response) => {
          let result = response.data.filter(
            (prod) => prod.id == this.$route.params.id
          );
          this.produit = result[0];
        });
    },
  },
};
</script>
     