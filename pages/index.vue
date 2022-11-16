<template>
  <div class="page-wrapper">
    <slider :slides="slides" />
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'IndexPage',
  computed: {
    ...mapState(['slides']),
  } 
}
</script>

<style lang="scss" src="./style.scss" scoped></style>
