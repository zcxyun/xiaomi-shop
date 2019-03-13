<template>
  <div>
    <home-header
      @hideBottomNavi='hideBottomNavi'
      :naviBars='naviBars'
    ></home-header>
    <Home-recommend class="home-recommend"></Home-recommend>
    <bottom-navi-bar v-show="showBottomNavi"></bottom-navi-bar>
  </div>
</template>
<script>
import HTTP from '@/utils/http.js'
import HomeHeader from './components/Header'
import BottomNaviBar from 'common/navibar/BottomNaviBar'
import HomeRecommend from './recommend/Recommend'

const http = new HTTP()
export default {
  name: 'Home',
  components: {
    HomeHeader, HomeRecommend, BottomNaviBar
  },
  data () {
    return {
      showBottomNavi: true,
      naviBars: []
    }
  },
  methods: {
    hideBottomNavi () {
      this.showBottomNavi = !this.showBottomNavi
    },
    getHomeInfoSucc (res) {
      if (res.error_code === 200 && res.data) {
        const data = res.data
        this.naviBars = data.naviBars
      }
    }
  },
  mounted () {
    http.request({
      url: '/api/home.json'
    }).then(this.getHomeInfoSucc)
  }
}
</script>
<style lang='stylus' scoped>
.home-recommend
  margin-top: 1.5rem
</style>
