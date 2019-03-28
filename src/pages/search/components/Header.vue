<template>
  <div class="search-header">
    <div class="back-icon-wrapper" @click="onClick">
      <i class="iconfont icon-fanhui"></i>
    </div>
    <input
      type="text"
      v-model="searchText"
      class="search-input"
      placeholder="搜索商品名称"
    >
    <div class="search-icon-wrapper">
      <i class="iconfont icon-sousuo"></i>
    </div>
  </div>
</template>
<script>
export default {
  name: 'SearchHeader',
  data () {
    return {
      searchText: ''
    }
  },
  watch: {
    searchText (newVal) {
      this.$emit('onSearchTextChange', newVal)
    }
  },
  methods: {
    onClick () {
      this.$router.go(-1)
    }
  }
}
</script>
<style lang='stylus' scoped>
@import '~styles/varibles.styl'
$headerHeight = .85rem
.search-header
  background: $headerBarBgColor
  height: $headerHeight
  position: fixed
  top: 0
  left: 0
  right: 0
  z-index: 99
  display: flex
  align-items: center
  .back-icon-wrapper, .search-icon-wrapper
    width: 1rem
    text-align: center
    .icon-fanhui, .icon-sousuo
      line-height: $headerHeight
      font-size: .4rem
  .search-input
    flex: 1
    background: #fff
    height: .5rem
    border: .01rem solid #ddd
    font-size: .32rem
    color: #666
    padding: 0 .2rem
</style>
