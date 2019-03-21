<template>
  <div class="container">
    <span class="text">{{title}}</span>
  </div>
</template>
<script>
export default {
  name: 'IntelligenceCategoryTitle',
  props: {
    title: String
  }
}
</script>
<style lang='stylus' scoped>
.container
  width: 100%
  background: #9721f1
  text-align: center
  line-height: 1.5rem
  .text
    color: #ffffff
    font-size: .4rem
    font-weight: 500
</style>
