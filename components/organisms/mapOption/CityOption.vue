<template>
  <div>【City】<br>
    <span>
      <label>Tokyo: <input 
        type="radio" 
        name="city"
        value="35.652832,139.839478"
      ></label>
    </span>
    <span>
      <label>London: <input 
        type="radio" 
        name="city" 
        value="51.509865,-0.118092"
      ></label>
    </span>
    <span>
      <label>NY: <input 
        type="radio" 
        name="city" 
        value="40.730610,-73.935242"
      ></label>
    </span>
  </div>
</template>

<script>
export default {
  props: {},
  data() {
    return {}
  },
  method: {
    // TODO: radioボタンを押したときにstoreにlat,lonをparseして反映
  }
}
</script>

<style scoped>
input {
  border: 2px #ccc solid;
}
</style>
