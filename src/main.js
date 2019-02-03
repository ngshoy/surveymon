import Vue from 'vue';
import Vuetify from 'vuetify';
import colors from 'vuetify/es5/util/colors';
// import 'vue-material/dist/theme/default-dark.css';
import App from './App.vue';
import router from './router';
import './registerServiceWorker';

Vue.use(Vuetify, {
  iconfont: 'mdi',
  theme: {
    primary: colors.deepPurple.lighten1,
    secondary: colors.red.darken1,
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
  render: h => h(App),
}).$mount('#app');
