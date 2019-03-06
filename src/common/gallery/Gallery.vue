<template>
  <div class="container" @click="handleGalleryClick">
    <div class="wrapper">
      <swiper :options="swiperOption" ref="mySwiper">
        <!-- slides -->
        <swiper-slide v-for="(item, index) in imgs" :key='index'>
          <img :src="item" class="swiper-img">
        </swiper-slide>
        <!-- Optional controls -->
        <div class="swiper-pagination" slot="pagination"></div>
        <!-- <div class="swiper-button-prev" slot="button-prev"></div> -->
        <!-- <div class="swiper-button-next" slot="button-next"></div> -->
        <!-- <div class="swiper-scrollbar" slot="scrollbar"></div> -->
      </swiper>
    </div>
  </div>
</template>
<script>
export default {
  name: 'CommonGallery',
  props: {
    imgs: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        paginationType: 'fraction',
        observer: true,
        observeParents: true,
        loop: true
      }
    }
  },
  methods: {
    handleGalleryClick () {
      this.$emit('hideGallery')
    }
  }
}
</script>
<style lang='stylus' scoped>
.container >>> .swiper-container
  overflow: inherit
.container
  position: fixed
  top: 0
  bottom: 0
  left: 0
  right: 0
  background: #000
  z-index: 99
  display: flex
  flex-direction: column
  justify-content: center
  .wrapper
    background: #fff
    width: 100%
    height: 0
    padding-bottom: 100%
    .swiper-img
      width: 100%
    .swiper-pagination
        color: #fff
        bottom: -1rem
</style>
