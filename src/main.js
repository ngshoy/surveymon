import Vue from 'vue';
import {
  MdButton, MdCard, MdRadio, MdMenu, MdField, MdBottomBar, MdList, MdContent,
} from 'vue-material/dist/components';
import 'vue-material/dist/vue-material.min.css';
// import 'vue-material/dist/theme/default-dark.css';
import App from './App.vue';
import router from './router';
import './registerServiceWorker';

Vue.use(MdButton);
Vue.use(MdCard);
Vue.use(MdRadio);
Vue.use(MdMenu);
Vue.use(MdField);
Vue.use(MdBottomBar);
Vue.use(MdList);
Vue.use(MdContent);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
