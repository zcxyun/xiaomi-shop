<template>
  <div class='container'>
    <div class="headerImgWrapper">
      <img :src="headerImg" class="headerImg">
    </div>
    <tv-channel-icons :channelIcons="channelIcons"></tv-channel-icons>

    <tv-category-title :img="popular.title"></tv-category-title>
    <tv-two-col :productList="popular.productList"></tv-two-col>
  </div>
</template>
<script>
import TvChannelIcons from 'common/ChannelIcons'
import TvCategoryTitle from './components/CategoryTitle'
import TvTwoCol from 'common/products/TwoCol2'
import HTTP from '@/utils/http.js'

const http = new HTTP()
export default {
  name: 'HomePhone',
  components: {
    TvChannelIcons,
    TvCategoryTitle,
    TvTwoCol
  },
  data () {
    return {
      headerImg: '',
      channelIcons: [],
      popular: {}
    }
  },
  methods: {
    handleGetTvSucc (res) {
      this.headerImg = res.headerImg
      this.channelIcons = res.channelIcons
      this.popular = res.popular
    }
  },
  mounted () {
    http.request({
      url: '/api/television.json'
    }).then(this.handleGetTvSucc)
  }
}
</script>
<style lang='stylus' scoped>
.container
  background: rgb(150, 26, 41)
  .headerImgWrapper
    .headerImg
      width: 100%
</style>
