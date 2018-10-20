<template>
  <div>map
  </div>
</template>

<script>
import { Icon } from '~/components/atom/'

export default {
  data () {
    return {}
  },
  components: [Icon],
  props: {
    user: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.md-card {
  width: 300px;
  margin: 4px;
  display: inline-block;
  vertical-align: top;
}
.md-icon-button {
  margin-right: 3px !important
}
.md-card-content {
  height: 48px
}
</style>
