import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    authorithe: {
      username: '',
      password: ''
    },
    tasks: [
      // {
      //   id: "task0001",
      //   caption: "Задача 1",
      //   description: "описание задачи",
      //   date: new Date(2021, 2, 21),
      //   performer: {
      //     username: "admin",
      //   },
      // },
      // {
      //   id: "task0002",
      //   caption: "Задача 2",
      //   description: "описание задачи",
      //   date: new Date(2021, 4, 22),
      //   performer: {
      //     username: "admin",
      //   },
      // },
    ],
    createForm: {
      caption: '',
      description: '',
      date: '',
      performer: {
        id: 0
      }

    }
  },
  getters: {
    getAuthorithe(state) {
      return state.authorithe
    },
    getTasks(state) {
      return state.tasks
    },
    getCreateForm(state) {
      return state.createForm
    }
  },
  mutations: {
    inputLog(state, payload) {
      state.authorithe.username = payload
    },
    inputPass(state, payload) {
      state.authorithe.password = payload
    }
  },
  actions: {
    login({ getters }) {
      let data = getters.getAuthorithe;

      console.log(data)
      return fetch('api/login_check', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(data)
      })
    },
    loadTask({ getters }) {
      return fetch('api/tasks').then(response => response.json()).then((tasks) => { getters.getTasks.tasks = tasks })
    },
    createTask({ getters }) {
      let data = getters.getCreateForm
      return fetch('api/tasks', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(data)
      })
    }
  },
  modules: {
  }
})
