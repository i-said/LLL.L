<template>
  <div>【Layer】<br> 
    <div>select: {{ selected.slice(10) }}</div>
    <span>
      <label><input 
        v-model="selected"
        type="radio" 
        name="layer"
        value="VIIRS_SNPP_Brightness_Temp_BandI5_Day"
      ></label>Blight
    </span>
    <span>
      <label><input 
        v-model="selected"
        type="radio" 
        name="layer" 
        value="MODIS_Terra_Cloud_Top_Height_Day"
      ></label>
      Clouds
    </span>
    <span>
      <label><input 
        v-model="selected"
        type="radio" 
        name="layer" 
        value="grand-v1-dams-rev01"
      ></label>
      Dams
    </span>
    <span>
      <label>Water: <input 
        v-model="selected"
        type="radio" 
        name="layer" 
        value="MODIS_Water_Mask"
      ></label>
      Water
    </span>
    <span>
      <label><input 
        v-model="selected"
        type="radio" 
        name="layer" 
        value="ASTER_GDEM_Color_Index"
      ></label>
      Height
    </span>
    <span>
      <label><input 
        v-model="selected"
        type="radio" 
        name="layer" 
        value="NDH_Landslide_Hazard_Distribution_2000"
      ></label>
      LandSlides
    </span>
    <span>
      <label><input 
        v-model="selected"
        type="radio" 
        name="layer" 
        value="Particulate_Matter_Below_2.5micrometers_2001-2010"
      ></label>
      PM2.5(01-10)
    </span>
    <span>
      <label><input 
        v-model="selected"
        type="radio" 
        name="layer" 
        value="GPW_Population_Density_2020"
      ></label>
      Poplation
    </span>
    <span>
      <label><input 
        v-model="selected"
        type="radio" 
        name="layer" 
        value="energy-pop-exposure-nuclear-plants-locations_plants"
      ></label>
      nuclear plants
    </span>
    <span>
      <label><input 
        v-model="selected"
        type="radio" 
        name="layer" 
        value="grump-v1-settlement-points,Human_Footprint_1995-2004"
      ></label>
      human footplant(95-04)
    </span>
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
