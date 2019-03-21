<template>
  <div class="container">
    <img :src="img" class="img-content">
  </div>
</template>
<script>
export default {
  name: 'TelevisionCategoryTitle',
  props: {
    img: String
  }
}
</script>
<style lang='stylus' scoped>
.container
  .img-content
    width: 100%
</style>
