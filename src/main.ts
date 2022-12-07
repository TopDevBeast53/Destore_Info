import Vue from 'vue'
import Buefy from "buefy";
import "buefy/dist/buefy.css";
import App from './App.vue'
import VueCompositionApi from '@vue/composition-api'
Vue.use(Buefy, {
    defaultIconPack: "fas",
    defaultIconComponent: "vue-fontawesome",
    defaultFieldLabelPosition: "inside",
  });
Vue.use(VueCompositionApi)

new Vue(App).$mount('#app')
