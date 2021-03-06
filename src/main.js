// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuelidate from "vuelidate"
import store from './store/store'

Vue.filter("upperCase", value => {
  return value.charAt(0).toUpperCase() + value.substr(1);
})
Vue.use(Vuelidate);
export const EventBus = new Vue();

Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {App},
  template: '<App/>',

})
