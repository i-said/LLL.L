<template>
  <div class="getting-btn">
    <a class="button is-link is-large is-fullwidth">Getting </a>
  </div>
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
.getting-btn {
  position: fixed;
  bottom: 0;
  width: 100%;
  padding: 5px;
}
</style>
