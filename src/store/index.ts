import { createStore } from 'vuex'

export default createStore({
  state: {
    selectAddress: null,
    loadding: false //全局loading
  },
  mutations: {
    setSelectAddress(state, payload) {
      state.selectAddress = payload
    },
    showloadding(state, load) {
      state.loadding = load;
    }
  },
  actions: {
    setloadding(context, load) {
      context.commit("showloadding", load);
    }
  },
  getters: {
    isloading: state => {
      return state.loadding;
    }
  },
  modules: {
  }
})