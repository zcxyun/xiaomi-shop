<template>
  <div>
    <home-header></home-header>
  </div>
</template>
<script>
import HomeHeader from './components/header'
export default {
  name: 'Home',
  components: {
    HomeHeader
  },
  methods: {
    show () {
      this.$createDialog({
        type: 'alert',
        title: 'alert',
        content: 'zcx'
      }).show()
    }
  }
}
</script>
<style lang='stylus' scoped>
</style>
