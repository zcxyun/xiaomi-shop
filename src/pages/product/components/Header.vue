<template>
  <div class="product-header border-bottom">
    <img :src="bannerImg" class="header-img">
    <img :src="hintImg" class="hint-img">
  </div>
</template>
<script>
export default {
  name: 'ProductHeader',
  data () {
    return {
      bannerImg: '//i8.mifile.cn/v1/a1/f002dffe-8fe9-771e-e40f-a0d546a0f187.webp',
      hintImg: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9719209bca7e6206e9287bb4c1e948c4.png?w=193&h=193'
    }
  }
}
</script>
<style lang="stylus" scoped>
.product-header
  position: relative
  .header-img
    width: 100%
  .hint-img
    position: absolute
    bottom: .4rem
    right: .2rem
    width: 1rem
    height: 1rem
</style>
