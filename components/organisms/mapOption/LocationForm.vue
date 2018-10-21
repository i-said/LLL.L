<template>
  <div class="field is-grouped">
    <p class="control is-expanded">
      <input
        v-model="lat"
        class="input"
        type="text" 
        name="lat" 
        size="13"
        placeholder="lat"
      >
      <input
        v-model="lon"
        class="input"
        type="text" 
        name="lon" 
        size="13"
        placeholder="lon"
      >
    </p>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  props: {},
  data() {
    return {
      lat: 35,
      lon: 138
    }
  },
  watch: {
    lat: function() {
      let lat = parseFloat(this.lat)
      if (typeof lat === 'number') {
        this.updateParams({ key: 'lat', value: lat })
      }
    },
    lon: function() {
      let lon = parseFloat(this.lon)
      if (typeof lon === 'number') {
        this.updateParams({ key: 'lon', value: lon })
      }
    }
  },
  methods: {
    ...mapMutations('nasa', ['updateParams'])
  }
}
</script>

<style scoped>
input {
  border: 2px #ccc solid;
}
</style>
