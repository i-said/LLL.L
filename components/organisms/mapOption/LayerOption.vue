<template>
  <div>【Layer】<br> {{ selected }}
    <span>
      <label>Blight: <input 
        v-model="selected"
        type="radio" 
        name="layer"
        value="VIIRS_SNPP_Brightness_Temp_BandI5_Day"
      ></label>
    </span>
    <span>
      <label>Clouds: <input 
        v-model="selected"
        type="radio" 
        name="layer" 
        value="MODIS_Terra_Cloud_Top_Height_Day"
      ></label>
    </span>
    <span>
      <label>Dams: <input 
        v-model="selected"
        type="radio" 
        name="layer" 
        value="grand-v1-dams-rev01"
      ></label>
    </span>
    <span>
      <label>Water: <input 
        v-model="selected"
        type="radio" 
        name="layer" 
        value="MODIS_Water_Mask"
      ></label>
    </span>
    <span>
      <label>Height: <input 
        v-model="selected"
        type="radio" 
        name="layer" 
        value="ASTER_GDEM_Color_Index"
      ></label>
    </span>
    <span>
      <label>LandSlides: <input 
        v-model="selected"
        type="radio" 
        name="layer" 
        value="NDH_Landslide_Hazard_Distribution_2000"
      ></label>
    </span>
    <span>
      <label>PM2.5(01-10): <input 
        v-model="selected"
        type="radio" 
        name="layer" 
        value="Particulate_Matter_Below_2.5micrometers_2001-2010"
      ></label>
    </span>
    <span>
      <label>Poplation: <input 
        v-model="selected"
        type="radio" 
        name="layer" 
        value="GPW_Population_Density_2020"
      ></label>
    </span>
    <span>
      <label>nuclear plants: <input 
        v-model="selected"
        type="radio" 
        name="layer" 
        value="energy-pop-exposure-nuclear-plants-locations_plants"
      ></label>
    </span>
    <span>
      <label>human footplant(95-04): <input 
        v-model="selected"
        type="radio" 
        name="layer" 
        value="grump-v1-settlement-points,Human_Footprint_1995-2004"
      ></label>
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
