<template>
  <div class="home">
    <h1>Adopt a New Best Friend</h1>
    <h6>There are {{ animalsCount }} of them</h6>
    <h6>{{ getCatCount.length }} of them are cats</h6>
    <h6>{{ getDogCount.length }} of them are dogs</h6>
    <button id="addBtn" class="btn btn-primary" @click="togglePetForm">Add New Pet</button>

    <template>
      <div>
        <b-form @submit.prevent="onSubmit" v-if="showPetForm">

          <b-form-group id="input-group-1" label="Pet Name:" label-for="input-1" >
            <b-form-input id="input-1" v-model="petData.name" placeholder="Enter pet's name" required />
          </b-form-group>

          <b-form-group id="input-group-2" label="Pet Age:" label-for="input-2" >
            <b-form-input id="input-2" v-model="petData.age" type="number" placeholder="Enter pet's age" required />
          </b-form-group>

          <b-form-group id="input-group-3" label="Species:" label-for="input-3">
            <b-form-select id="input-3" v-model="petData.species" :options="[ 'cats', 'dogs' ]" required />
          </b-form-group>

          <b-button type="submit" variant="primary">Submit</b-button>
          <b-button type="reset" variant="danger">Reset</b-button>
        </b-form>
        <!--
        <b-card class="mt-3" header="Form Data Result">
          <pre class="m-0">{{ form }}</pre>
        </b-card>-->
      </div>
    </template>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'Home',
  data() {
    return {
      showPetForm: false,
      petData: {
        name: '',
        age: 0,
        species: null
      }
    }
  },
  computed: {
    ...mapGetters([
      'animalsCount',
      'getCatCount',
      'getDogCount'
    ])
  },
  methods: {
    ...mapActions([
      'addPet'
    ]),
    togglePetForm() {
      this.showPetForm = !this.showPetForm
      if (this.showPetForm) {
        document.getElementById('addBtn').innerHTML = 'Cancel'
      } else {
        document.getElementById('addBtn').innerHTML = 'Add New Pet'
      }
    },
    onSubmit() {
      const { name, age, species } = this.petData
      const payload = {
        species,
        pet: {
          name,
          age
        }
      }
      this.addPet(payload)
    }
  }
}
</script>
