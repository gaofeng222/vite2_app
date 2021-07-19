import { createStore } from "vuex";

export default createStore({
  state() {
    return {
      age: 20,
    };
  },
  mutations: {
    addAge(state) {
      state.age++;
    },
  },
  actions: {
    increment(context) {
      context.commit("addAge");
    },
  },
});
