<template>
  <div class="news">
    <div class="news-top">
      <div class="news-top-left">
        <img :src="newsImgs.exposure_img1" class="news-top-left-img">
      </div>
      <div class="news-top-right">
        <div class="news-top-right-top">
          <img :src="newsImgs.exposure_img2" class="news-top-right-top-img">
        </div>
        <div class="news-top-right-bottom">
          <img :src="newsImgs.exposure_img3" class="news-top-right-bottom-img">
        </div>
      </div>
    </div>
    <div class="news-bottom">
      <img :src="newsImgs.exposure_img4" class="news-bottom-img">
    </div>
  </div>
</template>
<script>
export default {
  name: 'RecommendNews',
  props: {
    newsImgs: Object
  }
}
</script>
<style lang='stylus' scoped>
.news
  background: #fff
  .news-top
    display: flex
    margin-bottom: .15rem
    .news-top-left
      width: 50%
      height: 0
      overflow: hidden
      padding-bottom: 70%
      .news-top-left-img
        width: 100%
    .news-top-right
      width: 50%
      height: 0
      overflow: hidden
      padding-bottom: 70%
      margin-left: .05rem
      .news-top-right-top-img
        width: 100%
        margin-bottom: .05rem
      .news-top-right-bottom-img
        width: 100%
  .news-bottom
    width: 100%
    height: 0
    overflow: hidden
    padding-bottom: 40%
    .news-bottom-img
      width: 100%
</style>
