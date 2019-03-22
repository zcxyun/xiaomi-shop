<template>
  <div class="to-top">
    <i class="iconfont icon-4fanhuidingbubai icon"></i>
  </div>
</template>
<script>
export default {
  name: 'ToTop'
}
</script>
<style lang='stylus' scoped>
.to-top
  position: fixed
  width: .75rem
  height: .75rem
  right: .25rem
  bottom: 1.5rem
  z-index: 99
  text-align: center
  line-height: .75rem
  background: white
  border-radius: 50%
  opacity: .9
  .icon
    font-size: .6rem
    color: #aaa
</style>
