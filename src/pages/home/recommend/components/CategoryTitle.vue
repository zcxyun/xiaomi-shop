<template>
  <div class="topBanner">
    <img :src="topBannerImg" class="topBannerImg">
  </div>
</template>
<script>
export default {
  name: 'RecommendCategoryTitle',
  props: {
    topBannerImg: String
  }
}
</script>
<style lang='stylus' scoped>
.topBanner
    width: 100%
    height: 0
    overflow: hidden
    padding-bottom: 60%
    .topBannerImg
      width: 100%
</style>
