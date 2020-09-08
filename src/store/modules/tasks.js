import axios from 'axios'
const state = {}
const mutations = {}
const actions = {
  postTask({state}, payload) {
    axios.post('https://vue-project-eb46e.firebaseio.com/tasks/' + this.state.localId + '.json'
      , {
        title: payload.title,
        subject: payload.subject
      }).then(response => {
      console.log(response);
    })
  }
}
const getters = {}

export default {
  state,
  mutations,
  actions,
  getters
}
