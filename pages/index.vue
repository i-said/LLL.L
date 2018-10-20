<template>
  <section class="container">
    <div>map
      <no-ssr>
        <layered-map />
      </no-ssr>
    </div>
  </section>
</template>

<script>
import Logo from '~/components/Logo.vue'
import LayeredMap from '~/components/organisms/Map.vue'

export default {
  components: {
    Logo,
    LayeredMap
  }
}
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
