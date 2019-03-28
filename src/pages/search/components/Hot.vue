<template>
  <div class="search-hot">
    <div class="title">热门搜索</div>
    <div class="img-wrapper">
      <img :src="hotImg" class="img-content">
    </div>
    <tags :tags='tags'></tags>
  </div>
</template>
<script>
import Tags from 'common/tags/Tags'
export default {
  name: 'SearchHot',
  components: {
    Tags
  },
  props: {
    hotImg: String,
    tags: Array
  }
}
</script>
<style lang='stylus' scoped>
.search-hot
  margin-top: .85rem
  .title
    height: .8rem
    line-height: .8rem
    text-indent: .3rem
    font-size: .25rem
  .img-wrapper
    .img-content
      width: 100%
</style>
