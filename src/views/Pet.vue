<template>
  <div>
    <h1>{{ animal.name}} ({{ species}})</h1>
    <p>Age: {{ animal.age}} years old</p>
    <p>Breed: {{ animal.breed}}</p>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data() {
    return {
      animal: {},
      species: ''
    }
  },
  computed: {
    ...mapState([
      'dogs',
      'cats'
    ])
  },
  mounted() {
    const animal = this[this.$route.params.species][this.$route.params.id]
    this.animal = animal
    this.species = this.$route.params.species.toString().substr(0, 3)
  }
}
</script>
