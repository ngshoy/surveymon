import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  routes: [
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
  ],
});
