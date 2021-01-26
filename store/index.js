import authenticated from '../middleware/authenticated'

export const state = () => ({
  counter: 0,
  authenticated: false,
  selected: 3,
  postList: [],
})

export const mutations = {
  increment(state) {
    state.counter++
  },
  setAuth(state) {
    state.authenticated = !state.authenticated
  },
  setSelected(state, data) {
    state.selected = data
  },
  setPostList(state, data) {
    state.postList = data
  },
}
