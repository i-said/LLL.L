<template>
  <div>【Location】<br>
    <span>
      <label>Lat: <input 
        type="text" 
        name="lat" 
        size="20"></label>
    </span>
    <span>
      <label>Lon: <input 
        type="text" 
        name="lon" 
        size="20"></label>
    </span>
  </div>
</template>

<script>
export default {
  props: {},
  data() {
    return {}
  }
}
</script>

<style scoped>
input {
  border: 2px #ccc solid;
}
</style>
