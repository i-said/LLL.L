<template>
  <form class="map-form form">
    <fieldset class="fieldset-no-border">
      <legend>Categories</legend>
      <layer-option />
    </fieldset>
    <fieldset class="fieldset-no-border">
      <legend>Location</legend>
      <location-form />
    </fieldset>
    <!--
    <fieldset>
      <legend>Cities (Optional)</legend>
      <city-option />
    </fieldset>
    -->
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
  margin: 15px;
}

.fieldset-no-border {
  border: 0 none;
}
</style>
