<template>
  <div >
    <v-container v-for="produit in produits" :key="produit.id">
      <v-row>
        <v-col>
          <h2>Produits</h2>
        </v-col>
      </v-row>
      <v-row>
        <v-col >
          <v-card :title="produit.nom" :img-src="produit.img" class="mb-2" tag="article">
            <v-card-text>Prix : {{produit.prix}}</v-card-text>
            <v-btn
              v-if="!produit"
              @click="Ajout(produit)"
              href="#"
              variant="primary"
            >Ajouter au panier</v-btn>
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-table bordered hover :items="cart" :fields="fields">
            <template slot="#" slot-scope="data">{{data.index +1}}</template>
            <template slot="prix" slot-scope="data">{{data.item.prix * data.item.quantite}}</template>
            <template slot="quntite" slot-scope="data">
              <v-row>
                <v-col cols="5">
                  <v-btn variant="primary" @click="increment(data.item.id)" class="mr-2"></v-btn>
                  <h4>{{data.item.quantite}}</h4>
                </v-col>
              </v-row>
            </template>
            <template slot="image" >
              <v-img style="max-width: 5rem" :src="produit.img" fluid ></v-img>
            </template>
          </v-table>
        </v-col>
      </v-row>
      <v-row v-if="cart.length >0">
        <v-col>
          <h3>Toltal</h3>
        </v-col>
        <v-col>{{total}}.00 DH</v-col>
      </v-row>
      <v-modal>
        <p>Produits:</p>
        <ul >
          <li>Nom Du Produit :{{produit.nom}}</li>
          <li>Quantité : {{produit.quantite}}</li>
          <li>Prix : {{produit.prix}}</li>
          <li>Total : {{produit.prix * produit.quantite}}</li>
          <hr />
        </ul>
        <h2 class="my-4">Total: {{ticket.total}}.00 DH</h2>
      </v-modal>
    </v-container>
  </div>
</template>

<script>
export default {
    name:'chariot',
    
    data(){
        return{
            ticket:{
                produits:null,
                total:0
            },
            counter:0,
            produits:[],
            cart:[],
            fields:['#','image','nom','quantite','prix']
        }
    },
    methods:{
        ajout(produit){
            this.produits[produit.id-1].cart=true
            this.cart.push(produit)
            this.counter++
        },
        increment(id){
            for(let index=0;index<this.cart.lenght;index++){
                if(this.cart[index].id ==id){
                    this.cart[index].quantite++
                }
            }
        },

    },
    computed:{
        total(){
            let t=0;
            for(let index=0;index<this.cart.lenght;index++){
                t+= this.cart[index].prix*this.cart[index].quantite
            }
            return t
        }
    }
};
</script>

<style>
</style>