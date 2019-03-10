<template>
  <div>
    <cube-scroll
      ref="scroll"
      :data="items"
      direction="horizontal"
      class="horizontal-scroll-list-wrap">
      <ul class="list-wrapper">
        <li v-for="(item, index) in items" class="list-item" :key='index'>{{ item }}</li>
      </ul>
    </cube-scroll>
  </div>
</template>
<script>
export default {
  name: 'Test',
  data () {
    return {
      items: ['sdfsdf', 'sdfsdf', 'sdfsdf', 'sdfsdf', 'sdfsdf', 'sdfsdf']
    }
  }
}
</script>
<style lang='stylus' rel="stylesheet/stylus">
.horizontal-scroll-list-wrap
  border: 1px solid rgba(0, 0, 0, 0.1)
  border-radius: 5px
  .cube-scroll-content
    display: inline-block
  .list-wrapper
    padding: 0 10px
    line-height: 1rem
    white-space: nowrap
  .list-item
    display: inline-block
</style>
