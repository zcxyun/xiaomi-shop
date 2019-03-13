<template>
  <div class="recommend">
    <recommend-header-swiper :headerSwiperImgs='headerSwiperImgs'></recommend-header-swiper>
    <recommend-icons :icons='icons'></recommend-icons>
    <recommend-news :newsImgs='newsImgs'></recommend-news>
  </div>
</template>
<script>
import RecommendHeaderSwiper from './components/HeaderSwiper'
import RecommendIcons from './components/Icons'
import RecommendNews from './components/News'
import HTTP from '@/utils/http.js'
const http = new HTTP()

export default {
  name: 'HomeRecommend',
  data () {
    return {
      headerSwiperImgs: [],
      icons: [],
      newsImgs: {}
    }
  },
  components: {
    RecommendHeaderSwiper, RecommendIcons, RecommendNews
  },
  mounted () {
    http.request({
      url: '/api/recommend.json'
    }).then(this.handleSuccInfo)
  },
  methods: {
    handleSuccInfo (res) {
      this.headerSwiperImgs = res.headerSwiperImgs
      this.icons = res.icons
      this.newsImgs = res.newsImgs
    }
  }
}
</script>
<style lang='stylus' scoped>
.recommend
  background: rgb(245, 245, 245)
</style>
