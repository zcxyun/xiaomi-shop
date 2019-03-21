<template>
  <div class="products-title">
    <span class="title-text">{{title}}</span>
  </div>
</template>
<script>
export default {
  name: 'ProductsTitle',
  props: {
    title: String
  }
}
</script>
<style lang='stylus' scoped>
.products-title
  text-indent: .3rem
  margin-top: .1rem
  line-height: .8rem
  background: #ffffff
  .title-text
    font-size: .36rem
    font-weight: 600
</style>
