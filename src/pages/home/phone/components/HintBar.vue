<template>
  <div class="hint-bar">
    <span class="text">{{hintText}}</span>
  </div>
</template>
<script>
export default {
  name: 'PhoneHintBar',
  props: {
    hintText: String
  }
}
</script>
<style lang='stylus' scoped>
.hint-bar
  width: 100%
  background: rgb(231, 230, 252)
  text-align: center
  line-height: 1.5rem
  .text
    color: rgb(107, 75, 204)
    font-size: .4rem
    font-weight: 500
</style>
