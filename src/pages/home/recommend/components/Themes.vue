<template>
  <div class="theme">
    <div class="item" v-for="(item, index) of imgs" :key='index'>
      <img :src="item" class="item-img">
    </div>
  </div>
</template>
<script>
export default {
  name: 'RecommendThemes',
  props: {
    imgs: Array
  }
}
</script>
<style lang='stylus' scoped>
.theme
  background: #fff
  display: flex
  flex-wrap: wrap
  justify-content: space-between
.item
  height: 0
  width: 49.6%
  padding-bottom: 67%
  overflow: hidden
  .item-img
    width: 100%
</style>
