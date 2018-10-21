<template>
  <div class="field">
    <div class="select">
      <select
        v-model="selected"
      >
        <option
          name="city"
          value="35.652832,139.839478"

        >Tokyo</option>
        <option
          name="city"
          value="51.509865,-0.118092"
        >London</option>
        <option
          name="city"
          value="40.730610,-73.935242"
        >New York City</option>
      </select>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  props: {},
  data() {
    return {
      selected: 'VIIRS_SNPP_Brightness_Temp_BandI5_Day'
    }
  },
  watch: {
    selected: function() {
      if (this.selected) {
        const ll = this.selected.split(',')

        let lat = parseFloat(ll[0])
        if (typeof lat === 'number') {
          this.updateParams({ key: 'lat', value: lat })
        }
        let lon = parseFloat(ll[1])
        if (typeof lon === 'number') {
          this.updateParams({ key: 'lon', value: lon })
        }

        this.updateParams({ key: 'city', value: this.selected })
      }
    }
  },
  methods: {
    // TODO: radioボタンを押したときにstoreにlat,lonをparseして反映
    ...mapMutations('nasa', ['updateParams'])
  }
}
</script>

<style scoped>
input {
  border: 2px #ccc solid;
}
</style>
