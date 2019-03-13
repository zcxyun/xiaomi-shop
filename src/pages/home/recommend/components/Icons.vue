<template>
  <div class="recommend-icons">
    <div class="icon" v-for="item of icons" :key="item.id">
      <img :src="item.img" class="icon-img">
    </div>
  </div>
</template>
<script>
export default {
  name: 'RecommendIcons',
  props: {
    icons: Array
  }
}
</script>
<style lang='stylus' scoped>
.recommend-icons
  overflow: hidden
  height: 0
  width: 100%
  padding-bottom: 20%
  display: flex
  margin-bottom: .2rem
  .icon
    width: 20%
    .icon-img
      width: 100%
</style>
