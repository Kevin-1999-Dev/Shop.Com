import { createStore } from 'vuex'

export default createStore({
  state: {
     email : '',
  },
  getters: {
    getEmail: state => state.email,
    // getPhone : state => state.email,
  },
  mutations: {
  },
  actions: {
    setEmail: ({ state }, value) => state.email = value
  },
  modules: {
  }
})
