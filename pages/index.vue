<template>
  <section class="container">
    <t-shirt />
    <div
      class="form-wrap"
    >
      <gen-form />
    </div>
    <getting-btn />
  </section>
</template>

<script>
import Logo from '~/components/Logo.vue'
import TShirt from '~/components/organisms/Tshirt.vue'
import GenForm from '~/components/organisms/GenerateForm.vue'
import GettingBtn from '~/components/organisms/GettingButton.vue'

export default {
  components: {
    Logo,
    TShirt,
    GenForm,
    GettingBtn
  }
}
</script>

<style>
.container {
  min-height: 110vh;
  justify-content: center;
  align-items: center;
  text-align: center;
  overflow: scroll;
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

.form-wrap {
  text-align: left;
}
</style>
