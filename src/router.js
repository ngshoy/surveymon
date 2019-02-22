import Vue from 'vue';
import Router from 'vue-router';

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
    {
      path: '*',
      redirect: '/login',
    },
  ],
});
