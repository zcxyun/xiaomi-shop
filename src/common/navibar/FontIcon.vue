<template>
  <div class="font-icon">
    <slot :iconStyle='iconStyle'></slot>
  </div>
</template>
<script>
export default {
  name: 'FontIcon',
  data () {
    return {
      iconStyle: {
        fontSize: '.25rem',
        fontWeight: '800',
        color: '#fff'
      }
    }
  }
}
</script>
<style lang='stylus' scoped>
.font-icon
  width: .63rem
  height: .63rem
  z-index: 10
  background: rgba(0,0,0,.6)
  border-radius: 50%
  display: flex
  justify-content: center
  align-items: center
</style>
