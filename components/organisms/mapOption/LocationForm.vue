<template>
  <div>【Location】<br>
    <span>
      <label>Lat: <input
        v-model="lat"
        type="text" 
        name="lat" 
        size="13"></label>
    </span>
    <span>
      <label>Lon: <input
        v-model="lon"
        type="text" 
        name="lon" 
        size="13"></label>
    </span>
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
      let lat = parseInt(this.lat)
      if (typeof lat === 'number') {
        this.updateParams({ key: 'lat', value: lat })
      }
    },
    lon: function() {
      let lon = parseInt(this.lon)
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
