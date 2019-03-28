<template>
  <transition>
    <div class="header">
      <i class="iconfont icon-fanhui" @click="onGoBack"></i>
      <div class="category-title">{{title}}</div>
      <i class="iconfont icon-sousuo" @click="onSearch"></i>
    </div>
  </transition>
</template>
<script>
export default {
  name: 'TitleBar',
  props: {
    title: String
  },
  methods: {
    onGoBack () {
      this.$router.go(-1)
    },
    onSearch () {
      this.$router.push('/search')
    }
  }
}
</script>
<style lang='stylus' scoped>
@import '~styles/varibles.styl'

.v-enter, .v-leave-to
  transform: translateY(-1rem)
.v-enter-active, .v-leave-active
  transition: transform .5s

.header
  position: fixed
  top: 0
  left: 0
  right: 0
  display: flex
  height: 1rem
  line-height: 1rem
  background: $headerBarBgColor
  text-align: center
  color: #888
  z-index: 100
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
