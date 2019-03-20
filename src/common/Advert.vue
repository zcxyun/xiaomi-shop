<template>
  <div class="advert">
      <img :src="img" class="news-bottom-img">
  </div>
</template>
<script>
export default {
  name: 'RecommendAdvert',
  props: {
    img: String
  }
}
</script>
<style lang='stylus' scoped>
.advert
  width: 100%
  height: 0
  overflow: hidden
  padding-bottom: 40%
  margin: .15rem 0
  .news-bottom-img
    width: 100%
</style>
