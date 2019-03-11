<template>
  <div>
    <home-header></home-header>
    <Home-recommend class="content"></Home-recommend>
  </div>
</template>
<script>
import HomeHeader from './components/header'
import HomeRecommend from './recommend/Recommend'
export default {
  name: 'Home',
  components: {
    HomeHeader, HomeRecommend
  },
  methods: {}
}
</script>
<style lang='stylus' scoped>
.content
  position: absolute
  top: 1.5rem
</style>
