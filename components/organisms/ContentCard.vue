<template>
  <md-card md-with-hover>
    <md-ripple>
    <md-card-header>
      <div class="md-title">{{item.name}}</div>
    </md-card-header>

    <md-card-item>
      <template>
        <a :href="item.url">
          <img :src="item.image" class="github-icon" />
        </a>
      </template>
    </md-card-item>

    <md-card-actions>
      <md-button class="md-icon-button">
        <md-icon class="like-btn">thumb_up</md-icon>
      </md-button>

    </md-card-actions>
    </md-ripple>
  </md-card>
</template>

<script>
import { Icon } from '~/components/atom/'

export default {
  data () {
    return {}
  },
  components: [Icon],
  props: {
    item: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.md-card {
  width: 320px;
  margin: 4px;
  display: inline-block;
  vertical-align: top;
}
.md-icon-button {
  margin-right: 3px !important
}
</style>
