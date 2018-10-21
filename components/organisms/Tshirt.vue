<template>
  <div
    id="map-canvas-wrap"
    style="position: relative; max-width: 100%;"
  >
    <!--
    <no-ssr>
     // africa
     https://gibs.earthdata.nasa.gov/image-download?TIME=2018293&extent=-71.59275808390254%2C-71.84040223714766%2C45.950358003963174%2C56.34812813792101&epsg=4326&layers=GPW_Population_Density_2020&opacities=1&worldfile=false&format=image%2Fjpeg&width=600&height=800&fbclid=IwAR2HQXdpE3t-m6XqIiOJoKYIp_u-SFxb4q-JQxAN9Qaj_91Q3siBAWQQ04g
    </no-ssr>
    -->
    <!--
      TODO: canvas化
    <canvas
      id="tshirt-canvas"
      ref="map-canvas"
      :width="canvas.width"
      :height="canvas.height"
      class="canvas"
    />
    -->
    <!-- TODO: 透過png差し替えが必要 -->
    <img 
      :style="{visibility: isHidden ? hidden : visible}"
      src="https://user-images.githubusercontent.com/4006425/47263942-81fbf400-d546-11e8-8f9d-8a05c64c18dc.png"
      alt="cover shirt image" 
      style="position: absolute;max-width: 100%;"
    >
    <img :src="earthDataUrl">
  </div>
</template>

<script>
import urlGenerateMixin from '~/mixins/urlGenerate.js'
// actionsは飛ばしてmutationする
import { mapState, mapMutations } from 'vuex'

export default {
  mixins: [urlGenerateMixin],
  data() {
    // 初期値
    const imageUrl =
      'https://gibs.earthdata.nasa.gov/image-download?TIME=2018293&extent=-71%2C-71%2C56%2C56&epsg=4326&layers=GPW_Population_Density_2020&opacities=1&worldfile=false&format=image%2Fjpeg&fbclid=IwAR2HQXdpE3t-m6XqIiOJoKYIp_u-SFxb4q-JQxAN9Qaj_91Q3siBAWQQ04g'
    return {
      canvas: {
        height: 320,
        width: 320
      },
      imageUrl: imageUrl,
      isHidden: false
    }
  },
  computed: {
    ...mapState('nasa', ['params']),
    earthDataUrl: function() {
      const url = this.urlGen(this.params)
      console.log('generate :::', url)
      this.updateUrl(url)
      return url
    }
  },
  mounted() {
    console.log('aaaaaaaa', this.params)
    if (window) {
      // 正方形決めうちにしないとbbox制御がつらみ
      const w = window.innerWidth - 20
      this.canvas.width = window.innerWidth - 20
      this.canvas.height = this.canvas.width
      this.updateParams({ key: 'width', value: w })
      this.updateParams({ key: 'height', value: w })
    }
    /*
    // this.ctx = document.getElementById('tshirt-canvas').getContext('2d')
    this.ctx = this.$refs['map-canvas'].getContext('2d')

    if (this.ctx) {
      const image = new Image()
      image.src = this.imageUrl
      this.ctx.drawImage(image, 0, 0)
      // this.draw(this.radius)
    }
    */
  },
  methods: {
    ...mapMutations('nasa', ['updateParams', 'updateUrl']),
    draw(radius) {
      this.ctx.beginPath()
      this.ctx.clearRect(0, 0, 200, 200)
      this.ctx.arc(100, 100, radius, 0, Math.PI * 2)
      this.ctx.fill()
    }
  }
}
</script>

<style scoped>
img {
  height: 320px;
  width: 320px;
}
.canvas {
  border: 1px solid #000;
}
#map-canvas-wrap {
  margin: 10px;
}
</style>
