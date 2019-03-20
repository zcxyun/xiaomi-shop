<template>
  <div class="container">
    <span class="text">{{title}}</span>
  </div>
</template>
<script>
export default {
  name: 'PhoneCategoryTitle',
  props: {
    title: String
  }
}
</script>
<style lang='stylus' scoped>
.container
  width: 100%
  background: rgb(231, 230, 252)
  text-align: center
  line-height: 1.5rem
  .text
    color: rgb(107, 75, 204)
    font-size: .4rem
    font-weight: 500
</style>
