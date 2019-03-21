<template>
  <div class='container'>
    <intelligence-swiper :headerSwiperImgs="headerSwiperImgs"></intelligence-swiper>
    <intelli-channel-icons :channelIcons='channelIcons'></intelli-channel-icons>

    <intelligence-category-title :title="everyoneWant.title"></intelligence-category-title>
    <intelli-two-col :productList="everyoneWant.productList"></intelli-two-col>

    <intelligence-category-title :title="newProducts.title"></intelligence-category-title>
    <intelli-two-col :productList="newProducts.productList"></intelli-two-col>

  </div>
</template>
<script>
import IntelligenceCategoryTitle from './components/CategoryTitle'
import IntelligenceSwiper from 'common/HeaderSwiper'
import IntelliChannelIcons from 'common/ChannelIcons'
import IntelliTwoCol from 'common/products/TwoCol2'
import HTTP from '@/utils/http.js'

const http = new HTTP()
export default {
  name: 'HomeIntelligence',
  data () {
    return {
      headerSwiperImgs: [],
      channelIcons: [],
      everyoneWant: {},
      newProducts: {}
    }
  },
  components: {
    IntelligenceSwiper,
    IntelligenceCategoryTitle,
    IntelliChannelIcons,
    IntelliTwoCol
  },
  mounted () {
    http.request({
      url: '/api/intelligence.json'
    }).then(this.handleGetIntelligenceSucc)
  },
  methods: {
    handleGetIntelligenceSucc (res) {
      this.headerSwiperImgs = res.headerSwiperImgs
      this.channelIcons = res.channelIcons
      this.everyoneWant = res.everyoneWant
      this.newProducts = res.newProducts
    }
  }
}
</script>
<style lang='stylus' scoped>
.container
  background: #9721f1
  padding-bottom: .1rem
</style>
