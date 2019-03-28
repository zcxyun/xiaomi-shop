<template>
  <div class="search-category">
    <div class="title">常用分类</div>
    <simple-tags :tags='tags'></simple-tags>
  </div>
</template>
<script>
import SimpleTags from 'common/tags/SimpleTags'
export default {
  name: 'SearchCategory',
  props: {
    tags: Array
  },
  components: {
    SimpleTags
  }
}
</script>
<style lang='stylus' scoped>
.search-category
  margin-top: .4rem
  .title
    line-height: .5rem
    text-indent: .3rem
    font-size: .25rem
</style>
