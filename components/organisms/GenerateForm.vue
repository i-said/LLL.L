<template>
  <form class="map-form">
    <fieldset>
      <legend>Choose Your Map!</legend>
      <!-- さらに子に -->
      <!--
        <select-layer-form />
        <major-city-select-form />
      -->
      <location-form />
      <layer-option />
      <!--
      <city-option />
      -->
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
