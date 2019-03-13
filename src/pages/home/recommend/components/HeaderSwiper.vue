<template>
  <div class="recommend-header-swiper">
    <cube-slide ref="slide" :data="headerSwiperImgs" @change="changePage" :loop='true'>
      <cube-slide-item v-for="(item, index) in headerSwiperImgs" :key="index" @click.native="clickHandler(item, index)">
        <router-link :to="item.url">
          <img :src="item.image" class="swiper-img">
        </router-link>
      </cube-slide-item>
      <template slot="dots" slot-scope="props">
        <span
          class="my-dot"
          :class="{active: props.current === index}"
          v-for="(item, index) in props.dots"
          :key='index'
        >
        </span>
      </template>
    </cube-slide>
  </div>
</template>

<script>
export default {
  name: 'RecommendHeaderSwiper',
  props: {
    headerSwiperImgs: Array
  },
  methods: {
    changePage (current) {
      // console.log('当前轮播图序号为:' + current)
    },
    clickHandler (item, index) {
      // console.log(item, index)
    }
  }
}
</script>
<style lang='stylus' scoped>
.recommend-header-swiper >>> .cube-slide
  height: unset

.recommend-header-swiper
  width: 100%
  height: 0
  overflow: hidden
  padding-bottom: 50%
  background: #eee
  .swiper-img
    width: 100%
  .my-dot
    margin: .3rem .1rem
    width: .15rem
    height: .15rem
    display: inline-block
    border-radius: 50%
    background: rgba(255, 255, 255, .25)
    &.active
      background: #fff
</style>
