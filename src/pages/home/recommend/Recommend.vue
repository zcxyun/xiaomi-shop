<template>
  <div class="recommend">
    <recommend-header-swiper :headerSwiperImgs='headerSwiperImgs'></recommend-header-swiper>
    <recommend-channel-icons :channelIcons='channelIcons'></recommend-channel-icons>
    <recommend-news :newsImgs='newsImgs'></recommend-news>
    <recommend-advert :img='advertImgs.redmi'></recommend-advert>

    <recommend-category-title :topBannerImg='phones.topBannerImg'></recommend-category-title>
    <recommend-products :productList='phones.productList'></recommend-products>
    <recommend-advert :img='advertImgs.weekend'></recommend-advert>

    <recommend-category-title :topBannerImg='televisions.topBannerImg'></recommend-category-title>
    <recommend-products :productList='televisions.productList'></recommend-products>
    <recommend-hint-bar :hint='moreTVHint'></recommend-hint-bar>
    <recommend-advert :img='advertImgs.TV4A'></recommend-advert>

    <recommend-category-title :topBannerImg='notebooks.topBannerImg'></recommend-category-title>
    <recommend-products :productList='notebooks.productList'></recommend-products>
    <recommend-hint-bar :hint='moreNotebookHint'></recommend-hint-bar>
    <recommend-advert :img='advertImgs.phoneHeisha2'></recommend-advert>

    <recommend-category-title :topBannerImg='appliances.topBannerImg'></recommend-category-title>
    <recommend-products :productList='appliances.productList'></recommend-products>
    <recommend-hint-bar :hint='moreApplianceHint'></recommend-hint-bar>
    <recommend-advert :img='advertImgs.notebookAir'></recommend-advert>

    <recommend-category-title :topBannerImg='intelligences.topBannerImg'></recommend-category-title>
    <recommend-products-odd :productList='intelligences.productList'></recommend-products-odd>
    <recommend-hint-bar :hint='moreIntelligenceHint'></recommend-hint-bar>

    <recommend-themes :imgs='themesImgs'></recommend-themes>
    <recommend-advert :img='advertImgs.intelligencesBest'></recommend-advert>
    <recommend-hint-bar :hint='aboutMi'></recommend-hint-bar>

  </div>
</template>
<script>
import RecommendHeaderSwiper from 'common/HeaderSwiper'
import RecommendAdvert from 'common/Advert'
import RecommendChannelIcons from 'common/ChannelIcons'
import RecommendNews from './components/News'
import RecommendProducts from 'common/products/TwoCol'
import RecommendHintBar from './components/HintBar'
import RecommendProductsOdd from 'common/products/Alternate'
import RecommendCategoryTitle from './components/CategoryTitle'
import RecommendThemes from './components/Themes'
import HTTP from '@/utils/http.js'
const http = new HTTP()

export default {
  name: 'HomeRecommend',
  data () {
    return {
      headerSwiperImgs: [],
      channelIcons: [],
      newsImgs: {},
      advertImgs: {},
      phones: {},
      televisions: {},
      moreTVHint: '更多小米电视产品 >',
      moreNotebookHint: '更多小米笔记本产品 >',
      moreApplianceHint: '更多米家家电产品 >',
      moreIntelligenceHint: '更多米家智能产品 >',
      notebooks: {},
      appliances: {},
      intelligences: {},
      themesImgs: [],
      aboutMi: '了解小米'
    }
  },
  components: {
    RecommendHeaderSwiper,
    RecommendChannelIcons,
    RecommendNews,
    RecommendAdvert,
    RecommendProducts,
    RecommendHintBar,
    RecommendProductsOdd,
    RecommendCategoryTitle,
    RecommendThemes
  },
  mounted () {
    http.request({
      url: '/api/recommend.json'
    }).then(this.handleSuccInfo)
  },
  methods: {
    handleSuccInfo (res) {
      this.headerSwiperImgs = res.headerSwiperImgs
      this.channelIcons = res.channelIcons
      this.newsImgs = res.newsImgs
      this.advertImgs = res.advertImgs
      this.phones = res.phones
      this.televisions = res.televisions
      this.notebooks = res.notebooks
      this.appliances = res.appliances
      this.intelligences = res.intelligences
      this.themesImgs = res.themesImgs
    }
  }
}
</script>
<style lang='stylus' scoped>
.recommend
  background: rgb(245, 245, 245)
  padding-bottom: 1.1rem
</style>
