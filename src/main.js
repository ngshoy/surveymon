import Vue from 'vue';
import Vuetify from 'vuetify';
import colors from 'vuetify/es5/util/colors';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';

Vue.use(Vuetify, {
  iconfont: 'mdi',
  theme: {
    primary: colors.deepPurple.lighten1,
    secondary: colors.red.darken3,
    tertiary: '#ffffff',
    accent: colors.blue.accent2,
    error: '#FF5252',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FFC107',
  },
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
