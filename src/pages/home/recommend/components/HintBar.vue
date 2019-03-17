<template>
  <div class="hint-bar">
    <span class="hint-text">{{hint}}</span>
  </div>
</template>
<script>
export default {
  name: 'RecommendHintBar',
  props: {
    hint: String
  }
}
</script>
<style lang='stylus' scoped>
.hint-bar
  width: 100%
  background: #fff
  line-height: 1rem
  text-align: center
  vertical-align: middle
  margin: .1rem 0
  .hint-text
    font-size: .3rem
    color: rgba(0,0,0,.6)
</style>
