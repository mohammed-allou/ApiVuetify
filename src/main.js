import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';
import axios from 'axios'

Vue.config.productionTip = false


new Vue({
  router,
  vuetify,
  axios,
  render: h => h(App)
}).$mount('#app')
 const auth = axios.create({
   baseURL: "https://cddf91f5-abd8-4055-9f24-5e852da192c6.mock.pstmn.io/produits"
 })
 auth.defaults.headers.common['auth']='produits'
 export default auth