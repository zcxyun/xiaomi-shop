<template>
  <div class='appliance'>
    <appli-swiper :headerSwiperImgs='headerSwiperImgs'></appli-swiper>
    <appli-channel-icons :channelIcons='channelIcons'></appli-channel-icons>
    <appli-title :title="everyoneWant.title"></appli-title>
    <appli-two-col :productList='everyoneWant.productList'></appli-two-col>

    <appli-title :title="airCondition.title"></appli-title>
    <appli-one-col :productList='airConditionListFirst'></appli-one-col>
    <appli-two-col :productList='airConditionListBody'></appli-two-col>
  </div>
</template>
<script>
import AppliSwiper from 'common/HeaderSwiper'
import AppliChannelIcons from 'common/ChannelIcons'
import AppliTitle from 'common/products/Title'
import AppliTwoCol from 'common/products/TwoCol'
import AppliOneCol from 'common/products/OneCol'
import HTTP from '@/utils/http.js'
const http = new HTTP()

export default {
  name: 'HomeAppliance',
  components: {
    AppliSwiper,
    AppliChannelIcons,
    AppliTitle,
    AppliTwoCol,
    AppliOneCol
  },
  data () {
    return {
      headerSwiperImgs: [],
      channelIcons: [],
      everyoneWant: {},
      airCondition: {}
    }
  },
  computed: {
    airConditionListFirst () {
      const productList = this.airCondition.productList
      return productList ? productList.slice(0, 1) : null
    },
    airConditionListBody () {
      const productList = this.airCondition.productList
      return productList ? productList.slice(1) : null
    }
  },
  methods: {
    handleGetAppliSucc (res) {
      this.headerSwiperImgs = res.headerSwiperImgs
      this.channelIcons = res.channelIcons
      this.everyoneWant = res.everyoneWant
      this.airCondition = res.airCondition
    }
  },
  mounted () {
    http.request({
      url: '/api/appliance.json'
    }).then(this.handleGetAppliSucc)
  }
}
</script>
<style lang='stylus' scoped>
.appliance
  background: rgb(245, 245, 245)
  padding-bottom: 1.1rem
</style>
