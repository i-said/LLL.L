<template>
  <md-card md-with-hover>
    <md-ripple>
    <md-card-header>
      <div class="md-title">

        <template v-if="!!user.accounts.github_icon">
          <md-avatar class="md-small"> 
            <img :src="user.accounts.github_icon"/>
          </md-avatar> 
        </template>
        {{user.name}}
      </div>
    </md-card-header>

    <md-card-content>
      <template v-if="!!user.accounts.github">
        <a :href="user.accounts.github">
          <img src="~assets/img/octcat-32px.png" class="github-icon" />
        </a>
      </template>
      <template v-else>
        <span class="content-no-accounts">no accounts</span>
      </template>
    </md-card-content>

    <md-card-actions>
      <md-button class="md-icon-button">
        <md-icon class="github">thumb_up</md-icon>
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
