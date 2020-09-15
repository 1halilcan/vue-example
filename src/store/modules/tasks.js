import axios from 'axios'

const state = {
  tasks: []
}
const mutations = {
  pushTasks(state, payload) {
    state.tasks.push(payload);
  },
  addTasks(state, payload) {
    //hatalı burası
    let oldTasks = JSON.stringify(state.tasks[0]);
    console.log(oldTasks.length);
   let newOldTasks= oldTasks.substring(1).substring(0,oldTasks.length-1);
    let newTask = {'keykeykeykeykeykey': [{'title': payload.data.title, 'subject': payload.data.subject, 'status': '0'}]};
    state.tasks[0] =newTask;
    console.log(state.tasks[0]);
    console.log(newOldTasks);
  }
}
const actions = {
  postTask({commit}, payload) {
    axios.post('https://vue-project-eb46e.firebaseio.com/tasks/' + this.state.localId + '.json'
      , {
        title: payload.title,
        subject: payload.subject,
        status: '0'
      }).then(response => {
      commit('addTasks', {key: response.data.name, data: JSON.parse(response.config.data)});
    })
  },
  getTasksRequest({state, commit}) {
    //created olduğunad yapmada sıkıntı var!
    if (localStorage.getItem('token')) {
      axios.get('https://vue-project-eb46e.firebaseio.com/tasks/' + this.state.localId + '.json')
        .then(response => {
          console.log("get işlemi gerçekleşti!")
          commit("pushTasks", response.data);
        })
    }
  }
}
const getters = {
  getTasks(state) {
    return state.tasks;
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
