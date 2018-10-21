<template>
  <div class="getting-btn">
    <a
      :href="url"
      class="button is-link is-large is-fullwidth"
    >Getting </a>
  </div>
</template>

<script>
import LocationForm from './mapOption/LocationForm.vue'
import LayerOption from './mapOption/LayerOption.vue'
import CityOption from './mapOption/CityOption.vue'
import { mapState } from 'vuex'

export default {
  components: {
    LocationForm,
    LayerOption,
    CityOption
  },
  props: {},
  data() {
    return {}
  },
  computed: {
    ...mapState('nasa', ['url'])
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
