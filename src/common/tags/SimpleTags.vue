<template>
  <div class="simple-tags">
    <div class="tag"
      v-for="(item, index) of tags"
      :key="index"
    >
      <span class="tag-text">{{item}}</span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'SimpleTags',
  props: {
    tags: Array
  }
}
</script>
<style lang='stylus' scoped>
.simple-tags
  display: flex
  flex-wrap: wrap
  margin-left: .3rem
  .tag
    margin .1rem .15rem 0 0
    font-size: .2rem
    padding: 0 .16rem
    background: #f5f5f5
    color: rgb(72, 72, 72)
    .tag-text
      line-height: .6rem
      font-weight: 420
</style>
