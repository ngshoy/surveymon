import Vue from 'vue';
import Router from 'vue-router';
import store from './store';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/login',
      name: 'login',
      component: () => import('./views/Login.vue'),
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
      beforeEnter: (to, from, next) => {
        console.log(to);
        if (!store.state.access_token) {
          next('/login');
        }
      },
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
