export default {
  animalsCount: (state) => {
    return state.cats.length + state.dogs.length
  },
  getCatCount: (state) => {
    return state.pets.filter((pet) => {
      return pet.species === 'cat'
    })
  },
  getDogCount: (state) => {
    return state.pets.filter((pet) => {
      return pet.species === 'dog'
    })
  }
}
