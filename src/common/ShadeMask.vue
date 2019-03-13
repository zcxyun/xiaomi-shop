<template>
  <div class="mask" v-show='show'></div>
</template>
<script>
export default {
  name: 'ShadeMask',
  props: {
    show: Boolean
  }
}
</script>
<style lang='stylus' scoped>
.mask
  z-index: 90
  position: fixed
  top: 0
  left: 0
  right: 0
  bottom: 0
  background: rgba(0,0,0,.3)
</style>
