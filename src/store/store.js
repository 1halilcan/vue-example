import Vue from "vue";
import Vuex from "vuex";
import tasks from "./modules/tasks";
import axios from 'axios'
import router from '../router'

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    apiKey: "AIzaSyDYl7v6u4McOkS0wFYXFydTNJ5uUbWdnPo",
    token: '',
    localId: '',
    routerComponent: ''
  },
  mutations: {
    setToken(state, payload) {
      state.token = payload;
    },
    setLocalId(state, payload) {
      state.localId = payload;
    },
    logout(state) {
      localStorage.removeItem('time');
      localStorage.removeItem('token');
      localStorage.removeItem('localId');
      router.push({name: 'AuthPage'});
    },
  },
  actions: {
    tokenSession({state, commit, dispatch}) {
      let time = localStorage.getItem('time');
      if (time > new Date().getSeconds()) {
        let token = localStorage.getItem('token');
        if (token) {
          commit('setToken', token);
          commit('setLocalId', localStorage.getItem('localId'))
        } else {
          state.token = '';
          router.push({name: 'AuthPage'});
        }
      } else {
        commit('logout');
      }

    },
    loginAndRegister({state, dispatch, commit}, payload) {
      let apiLink = '';
      if (payload.register) {
        apiLink = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=' + state.apiKey;
      } else {
        apiLink = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=' + state.apiKey;
      }
      axios.post(apiLink, {
        email: payload.email,
        password: payload.password,
        returnSecureToken: true
      })
        .then(response => {
          console.log(response.data);
          commit('setLocalId', response.data.localId);
          localStorage.setItem('localId', response.data.localId);

          //12 saatte bir yeniden giriş yapsın.
          localStorage.setItem('time', new Date().getSeconds() + 12 * 60 * 60);
          commit('setToken', response.data.idToken);
          localStorage.setItem('token', response.data.idToken);


          router.push('/panel');
          //kayıt olma veya giriş başarılı işlemler.
        })
        .catch(response => {
          console.log(response)
        });
    }
  },
  getters: {
    getToken(state) {
      return state.token !== '';
    }
  },
  modules: {
    tasks
  }
});

export default store
