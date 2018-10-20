<template>
  <form>
    <fieldset>
      <legend>Select Your Map Option</legend>

      <!--
        <location-form />
        <select-layer-form />
        <major-city-select-form />
      -->
      <div>
        <input 
          id="" 
          type="radio"
          name="drone" 
          value="huey" 
          checked >
        <label for="huey">Huey</label>
      </div>

      <div>
        <input 
          id="dewey" 
          type="radio"
          name="drone" 
          value="dewey" >
        <label for="dewey">Dewey</label>
      </div>

      <div>
        <input 
          id="louie" 
          type="radio"
          name="drone" 
          value="louie" >
        <label for="louie">Louie</label>
      </div>

    </fieldset>
  </form>
</template>

<script>
export default {
  props: {
  },
  data() {
    return {}
  }
}
</script>

<style scoped>
</style>
