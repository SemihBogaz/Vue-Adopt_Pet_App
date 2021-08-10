<template>
  <div>
    <h1>{{ speciesStr }} for Adoption</h1>
    <b-table stripped hover :items="pets">
      <template #cell(name)="data">
        <router-link :to="`/pets/${species}/${data.index}`">{{ data.value }}</router-link>
      </template>
    </b-table>
  </div>
</template>

<script>
export default {
  props: {
    species: String,
    pets: Array
  },
  data() {
    return {
      speciesStr: null
    }
  },
  mounted() {
    this.speciesStr = this.species.toString().replace(/^\w/, (c) => c.toUpperCase())
  }
}
</script>
