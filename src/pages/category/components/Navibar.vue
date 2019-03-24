<template>
  <div class="navibar">
    <i class="iconfont icon-fanhui"></i>
    <div class="category-title">{{title}}</div>
    <i class="iconfont icon-sousuo"></i>
  </div>
</template>
<script>
export default {
  name: 'Navibar',
  props: {
    title: String
  }
}
</script>
<style lang='stylus' scoped>
.navibar
  position: fixed
  top: 0
  left: 0
  right: 0
  display: flex
  height: 1rem
  line-height: 1rem
  background: #f2f2f2
  text-align: center
  color: #888
  .icon-fanhui
    width: 1rem
    height: 1rem
    font-size: .4rem
  .icon-sousuo
    width: 1rem
    height: 1rem
    font-size: .5rem
  .category-title
    flex: 1
    line-height: 1rem
    font-size: .3rem
</style>
