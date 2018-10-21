<template>
  <div class="field">
    <div class="select">
      <select
        v-model="selected"
      >
        <option
          name="layer"
          value="VIIRS_SNPP_Brightness_Temp_BandI5_Day"
        >Blight</option>
        <option
          name="layer"
          value="MODIS_Terra_Cloud_Top_Height_Day"
        >Cloud</option>
        <option
          name="layer"
          value="grand-v1-dams-rev01"
        >Dams</option>
        <option
          name="layer"
          value="MODIS_Water_Mask"
        >Water</option>
        <option
          name="layer"
          value="ASTER_GDEM_Color_Index"
        >Height</option>
        <option
          name="layer"
          value="NDH_Landslide_Hazard_Distribution_2000"
        >LandSlides</option>
        <option
          name="layer"
          value="Particulate_Matter_Below_2.5micrometers_2001-2010"

        >PM2.5(01-10)</option>
        <option
          name="layer"
          value="GPW_Population_Density_2020"
        >Poplation</option>
        <option
          name="layer"
          value="energy-pop-exposure-nuclear-plants-locations_plants"
        >Nuclear Plants</option>
        <option
          name="layer"
          value="grump-v1-settlement-points,Human_Footprint_1995-2004"
        >human footplant(95-04)</option>
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
        this.updateParams({ key: 'layer', value: this.selected })
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
