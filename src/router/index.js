import Vue from 'vue'
import Router from 'vue-router'
import store from "../store/store";
import Auth from "../components/Auth";
import MainPage from "../components/MainPage";
import Tasks from "../components/Task/TasksMain";
import router from "vue-router";
import TasksMain from "../components/Task/TasksMain";
import CompleteTasks from "../components/Task/CompleteTasks";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'AuthPage',
      component: Auth,
      beforeEnter(to, from, next) {
        if (localStorage.getItem('token')) {
          next({name: 'Panel'});
        } else {
          next();
        }
        /*if (store.state.token) {
          next();
        } else {
          next('/');
        }*/
      },
    },
    {
      path: '/panel',
      component: MainPage,
      name: 'Panel'
    },
    {
      path: '/panel/gorevlerim',
      component: TasksMain
    },
    {
      path: '/panel/tamamlanmis-gorevlerim',
      component: CompleteTasks
    }
  ],

  mode: 'history'
})
