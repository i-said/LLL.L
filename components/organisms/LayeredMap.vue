<template>
  <div
    id="map-wrap"
    class=""
    style="height: 100%"
  >
    map!
    <no-ssr>
      <l-map
        :zoom="13"
        :center="[47.413220, -1.219482]"
        class="position:fixed;"
      >
        <l-tile-layer
          url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
        />
        <l-marker
          :lat-lng="[47.413220, -1.219482]"
        />
      </l-map>
      <!--
      <div
        id="app"
        style="height: 100%"
      >
        <v-map
          :zoom="13"
          :center="[47.413220, -1.219482]"
        >
          <v-tilelayer
            url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
          />
          <v-marker
            :lat-lng="[47.413220, -1.219482]"
          />
        </v-map>
      </div>
      -->
    </no-ssr>
  </div>
</template>

<script>
</script>

<style scoped>
</style>
