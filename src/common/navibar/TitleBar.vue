<template>
  <transition>
    <div class="title-bar">
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
      this.$emit('onSearch')
    }
  }
}
</script>
<style lang='stylus' scoped>
.v-enter, .v-leave-to
  transform: translateY(-1rem)
.v-enter-active, .v-leave-active
  transition: transform .5s

.title-bar
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
  z-index: 99
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
