<template>
  <v-app>
    <v-data-table
     
      :id="id"
      :nom="nom"
      :prix="prix"
      :Libellé="Libellé"
      :description="description"
    ></v-data-table>
  </v-app>
</template>
<script lang="ts">
import Vue from "vue";
import axios from "axios";


const baseURL =
  "https://cddf91f5-abd8-4055-9f24-5e852da192c6.mock.pstmn.io/produits";
export default {
  name: "list",
  data() {
    return {
      produits: [],
      headers: [
        { text: " numero de produit", value: "id" },
        { text: " nom de produit", value: "nom" },
        { text: " prix de produit", value: "prix" },
        { text: " libellé", value: "Libellé" },
        { text: " description de produit", value: "description" },
      ],
    };
  },
  methods: {
    ajoutAPI() {
      axios.get(baseURL).then((res) => {
        this.id = res.data.id;
        this.nom = res.data.nom;
        this.prix = res.data.prix;
        this.Libellé = res.data.Libellé;
        this.description = res.data.description;
      });
    },
  },
  mounted(){
      this.ajoutAPI();
  }
};
</script>