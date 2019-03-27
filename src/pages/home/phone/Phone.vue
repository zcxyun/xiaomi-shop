<template>
  <div class='phone'>
    <phone-swiper :headerSwiperImgs='headerSwiperImgs'></phone-swiper>

    <phone-category-title :title='hots.title'></phone-category-title>
    <phone-one-col :productList='hotListFirst'></phone-one-col>
    <phone-two-col :productList='hotListBody'></phone-two-col>

    <phone-category-title :title='superClearPhoto.title'></phone-category-title>
    <phone-one-col :productList='superClearPhotoListFirst'></phone-one-col>
    <phone-two-col :productList='superClearPhotoListBody'></phone-two-col>

    <phone-category-title :title='xiaoLong855.title'></phone-category-title>
    <phone-two-col :productList='xiaoLong855.productList'></phone-two-col>

    <phone-category-title :title='xiaoLong845.title'></phone-category-title>
    <phone-two-col :productList='xiaoLong845.productList'></phone-two-col>

    <phone-category-title :title='followVideos.title'></phone-category-title>
    <phone-one-col :productList='followVideosListFirst'></phone-one-col>
    <phone-two-col :productList='followVideosListBody'></phone-two-col>

    <phone-category-title :title='activities.title'></phone-category-title>
    <advert :img='item.img' v-for="item of activities.list" :key='item.id'></advert>

  </div>
</template>
<script>
import PhoneSwiper from 'common/HeaderSwiper'
import PhoneCategoryTitle from './components/CategoryTitle'
import PhoneOneCol from 'common/products/OneCol2'
import PhoneTwoCol from 'common/products/TwoCol2'
import Advert from 'common/Advert'
import HTTP from '@/utils/http.js'
const http = new HTTP()
export default {
  name: 'HomePhone',
  data () {
    return {
      headerSwiperImgs: [],
      hots: {},
      superClearPhoto: {},
      xiaoLong855: {},
      xiaoLong845: {},
      followVideos: {},
      activities: {}
    }
  },
  components: {
    PhoneSwiper,
    PhoneCategoryTitle,
    PhoneOneCol,
    PhoneTwoCol,
    Advert
  },
  computed: {
    hotListFirst () {
      const hotList = this.hots.hotList
      return hotList ? hotList.slice(0, 1) : null
    },
    hotListBody () {
      const hotList = this.hots.hotList
      return hotList ? hotList.slice(1) : null
    },
    superClearPhotoListFirst () {
      const productList = this.superClearPhoto.productList
      return productList ? productList.slice(0, 1) : null
    },
    superClearPhotoListBody () {
      const productList = this.superClearPhoto.productList
      return productList ? productList.slice(1) : null
    },
    followVideosListFirst () {
      const productList = this.followVideos.productList
      return productList ? productList.slice(0, 1) : null
    },
    followVideosListBody () {
      const productList = this.followVideos.productList
      return productList ? productList.slice(1) : null
    }
  },
  methods: {
    handleSucc (res) {
      this.headerSwiperImgs = res.headerSwiperImgs
      this.hots = res.hots
      this.superClearPhoto = res.superClearPhoto
      this.xiaoLong855 = res.xiaoLong855
      this.xiaoLong845 = res.xiaoLong845
      this.followVideos = res.followVideos
      this.activities = res.activities
    }
  },
  mounted () {
    http.request({
      url: '/api/phone.json'
    }).then(this.handleSucc)
  }
}
</script>
<style lang='stylus' scoped>
.phone
  background: rgb(231, 230, 252)
  padding-bottom: 1.1rem
</style>
