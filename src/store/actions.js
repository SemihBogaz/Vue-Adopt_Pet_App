export default {
  addPet: ({ commit }, payload) => { // context.commit
    commit('appendPet', payload)
  }
}
