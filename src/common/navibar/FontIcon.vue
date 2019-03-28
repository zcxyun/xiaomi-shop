<template>
  <div class="font-icon">
    <slot class="icon"></slot>
  </div>
</template>
<script>
export default {
  name: 'FontIcon'
}
</script>
<style lang='stylus' scoped>
.font-icon
  position: fixed
  top: .1rem
  left: .1rem
  width: .7rem
  z-index: 10
  background: rgba(0,0,0,.6)
  border-radius: 50%
  margin: 0 .2rem
  .icon
    color: #ddd
    font-size: .2rem
</style>
