import Main from '@/components/pages/Main.vue';
import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: '/',
      name: 'main',
      component: Main
    }
  ],
  mode: 'hash'
});
