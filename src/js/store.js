
import { createStore } from 'framework7';

const store = createStore({
  state: {
    user: []
  },
  getters: {
    user({ state }) {
      return state.user;
    }
  },
  actions: {
    setUser({ state }, currentUser) {
      state.user = currentUser;
    },
  },
})
export default store;
