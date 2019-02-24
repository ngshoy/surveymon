import Vue from 'vue';
import Router from 'vue-router';
import store from './store';
import Login from './views/Login.vue';

Vue.use(Router);

const accessGuard = (to, from, next) => {
  store.commit('updatePrevPath', to.fullPath);
  if (!store.state.access_token) {
    next('/login');
  }
};

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('./views/Register.vue'),
    },
    {
      path: '/CreatePoll',
      name: 'create-poll',
      component: () => import('./views/CreatePoll.vue'),
      beforeEnter: accessGuard,
    },
    {
      path: '/ViewPoll/:id',
      name: 'view-poll',
      component: () => import('./views/ViewPoll.vue'),
      props: true,
    },
    {
      path: '/PollResults/:id',
      name: 'poll-results',
      component: () => import('./views/PollResults.vue'),
      props: true,
    },
  ],
});
