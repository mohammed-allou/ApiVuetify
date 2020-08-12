import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import light from './theme';
import '@mdi/font/css/materialdesignicons.css'

Vue.use(Vuetify);

export default new Vuetify({
    icons: {
        iconfont: 'mdi' ||'fa', 
    },
    theme: {
        themes: { light }
    }
});
