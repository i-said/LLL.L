<template>
  <div
    id="map-canvas-wrap"
  >
    <!--
    <no-ssr>
      <img src="https://gibs.earthdata.nasa.gov/image-download?TIME=2018269&extent=112.99507302434438%2C12.435726764038307%2C148.4758864011079%2C55.102527660146364&epsg=4326&layers=Coastlines%2CGround_Level_Nitrogen_Dioxide_3_Year_Running_Mean_2010-2012&opacities=1%2C1&worldfile=false&format=image%2Fpng&width=8075&height=9710&fbclid=IwAR3sKn3Wmt3sqUbvYQNSAkWXvvI1GmSUkeBDskY2T74hGM8JxtluN7bosgM" >
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
    <img :src="earthDataUrl">
  </div>
</template>

<script>
export default {
  data() {
    const imageUrl =
      'https://gibs.earthdata.nasa.gov/image-download?TIME=2018293&extent=-71%2C-71%2C56%2C56&epsg=4326&layers=GPW_Population_Density_2020&opacities=1&worldfile=false&format=image%2Fjpeg&fbclid=IwAR2HQXdpE3t-m6XqIiOJoKYIp_u-SFxb4q-JQxAN9Qaj_91Q3siBAWQQ04g'
    return {
      canvas: {
        height: 320,
        width: 320
      },
      imageUrl: imageUrl
    }
  },
  computed: {
    earthDataUrl: function() {
      console.log('???????', this)
      return `${this.imageUrl}&width=${this.canvas.width}&height=${
        this.canvas.height
      }`
    }
  },
  mounted() {
    if (window) {
      // 正方形決めうちにしないとbbox制御がつらみ
      this.canvas.width = window.innerWidth - 20
      this.canvas.height = this.canvas.width
    }
    /*
    // this.ctx = document.getElementById('tshirt-canvas').getContext('2d')
    console.log(this.$refs['map-canvas'])
    this.ctx = this.$refs['map-canvas'].getContext('2d')

    console.log(this.ctx)
    if (this.ctx) {
      const image = new Image()
      image.src = this.imageUrl
      console.log(image)
      this.ctx.drawImage(image, 0, 0)
      // this.draw(this.radius)
    }
    */
  },
  methods: {
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
