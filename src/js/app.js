import App from './components/App.vue';
import router from './router';
import store from './store';
import Vue from 'vue';

new Vue({
  render: (h) => h(App),
  router,
  store
}).$mount('#app');
