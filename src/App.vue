<template>
  <v-app>
    <v-app-bar app color="primary" dark >
      <v-spacer></v-spacer>

      <h2 class="text-center">Listes des produits</h2>
    </v-app-bar>

    <v-main>
      <HelloWorld />
      <list/>
      
    </v-main>
  </v-app>
</template>

<script>
import HelloWorld from "./components/HelloWorld";
import list from "./components/list"

export default {
  name: "App",

  components: {
    HelloWorld,
    list,
},
// mounted(){
//   produits.listes().then(Response =>{
//     console.log(Response)
//   })
// }
}
</script>
