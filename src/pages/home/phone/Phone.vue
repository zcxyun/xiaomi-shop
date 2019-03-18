<template>
  <div class='phone'>
    <phone-swiper :headerSwiperImgs='headerSwiperImgs'></phone-swiper>
    <phone-hint-bar hintText='爆款推荐'></phone-hint-bar>
    <phone-one-col :products='phoneList'></phone-one-col>
  </div>
</template>
<script>
import PhoneSwiper from 'common/HeaderSwiper'
import PhoneHintBar from './components/HintBar'
import PhoneOneCol from 'common/products/OneCol2'
import HTTP from '@/utils/http.js'
const http = new HTTP()
export default {
  name: 'HomePhone',
  data () {
    return {
      headerSwiperImgs: [],
      phoneList: []
    }
  },
  components: {
    PhoneSwiper,
    PhoneHintBar,
    PhoneOneCol
  },
  methods: {
    handleSucc (res) {
      this.headerSwiperImgs = res.headerSwiperImgs
      this.phoneList = res.phoneList
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
  padding-bottom: .1rem
</style>
