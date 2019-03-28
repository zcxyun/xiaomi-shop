<template>
  <div class="tags">
    <div class="tag"
      :style="item.style"
      v-for="item of tags"
      :key="item.label"
    >
      <span class="tag-text">{{item.label}}</span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Tags',
  props: {
    tags: Array
  }
}
</script>
<style lang='stylus' scoped>
.tags
  display: flex
  flex-wrap: wrap
  margin-left: .3rem
  .tag
    margin .2rem .2rem 0 0
    font-size: .25rem
    padding: 0 .2rem
    border: .01rem solid #999
    color: rgb(72, 72, 72)
    .tag-text
      line-height: .6rem
      font-weight: 420
</style>
