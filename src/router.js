import Vue from 'vue';
import Router from 'vue-router';
import CreatePoll from './views/CreatePoll.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/CreatePoll',
      name: 'create-poll',
      component: CreatePoll,
    },
    {
      path: '/ViewPoll/:id',
      name: 'view-poll',
      component: () => import('./views/ViewPoll.vue'),
      props: true,
    },
  ],
});
