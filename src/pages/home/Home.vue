<template>
  <div>
    <navi-header
      :naviBars='naviBars'
      @onSearch='hideBottomNavi'
      :compNames='compNames'
      :tabBarselectedLabel='tabBarselectedLabel'
    >
      <template #default='{compName}'>
        <component :is='compName'></component>
      </template>
    </navi-header>
    <bottom-navi-bar v-show="showBottomNavi"></bottom-navi-bar>
  </div>
</template>
<script>
import HTTP from '@/utils/http.js'
import NaviHeader from 'common/navibar/NaviHeader'
import HomeAppliance from './appliance/Appliance'
import HomeIntelligence from './intelligence/Intelligence'
import HomeLife from './life/Life'
import HomeNotebook from './notebook/Notebook'
import HomePhone from './phone/Phone'
import HomeRecommend from './recommend/Recommend'
import HomeTelevision from './television/Television'
import BottomNaviBar from 'common/navibar/BottomNaviBar'

const http = new HTTP()
export default {
  name: 'Home',
  components: {
    NaviHeader,
    HomeAppliance,
    HomeIntelligence,
    HomeLife,
    HomeNotebook,
    HomePhone,
    HomeRecommend,
    HomeTelevision,
    BottomNaviBar
  },
  data () {
    return {
      /**
       * 这个地方不能为空数组
       * 因为 naviBars 数据是从后台异步获取的，子组件刚开始获取的naviBars是初始数据，若是空数组，
       * 子组件cube-tab-bar选中项下划线会不显示
       */
      naviBars: [{
        label: '推荐'
      }],
      tabBarselectedLabel: '推荐',
      showBottomNavi: true,
      compNames: [
        'HomeRecommend',
        'HomePhone',
        'HomeIntelligence',
        'HomeTelevision',
        'HomeAppliance',
        'HomeNotebook',
        'HomeLife'
      ]
    }
  },
  computed: {
  },
  methods: {
    hideBottomNavi () {
      this.showBottomNavi = !this.showBottomNavi
    },
    getHomeInfoSucc (res) {
      this.naviBars = res.naviBars
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
</style>
