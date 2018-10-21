<template>
  <form class="map-form form">
    <fieldset>
      <legend>Options</legend>
      <label class="label">【Location】</label>
      <location-form />
      <label class="label">【Layer】</label>
      <layer-option />
      <label class="label">【Cities】(optional)</label>
      <city-option />
    </fieldset>
  </form>
</template>

<script>
import LocationForm from './mapOption/LocationForm.vue'
import LayerOption from './mapOption/LayerOption.vue'
import CityOption from './mapOption/CityOption.vue'

export default {
  components: {
    LocationForm,
    LayerOption,
    CityOption
  },
  props: {},
  data() {
    return {}
  }
}
</script>

<style scoped>
.map-form {
  padding: 5px;
}
</style>
