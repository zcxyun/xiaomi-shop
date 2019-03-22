<template>
  <div>
    <!-- 阴影遮罩 -->
    <shade-mask :show='showMask' @click.native='onShadeMaskClick'></shade-mask>
    <!-- 顶部搜索栏 -->
    <div class="navi-header">
      <div class="header">
        <img class='logo-img' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEwAAAAyCAYAAAD2vz2aAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MjQ2OUE2MkU0RTQ4MTFFNzgxOTZBRDJFQjk4Qjk0NjQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MjQ2OUE2MkY0RTQ4MTFFNzgxOTZBRDJFQjk4Qjk0NjQiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpCOUQ0QkM2RjREQ0MxMUU3ODE5NkFEMkVCOThCOTQ2NCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpCOUQ0QkM3MDREQ0MxMUU3ODE5NkFEMkVCOThCOTQ2NCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PiL8gcIAAAF1SURBVHja7Ju/LwRRFEbf+FVsQ0dBdJKNSksUSqVCr6AhKxGVwn+gVUpQEI1So5XoZUOhEbKMDiESIeOTzPbvzpoxz5wvOd3duzsn++7cSXajZMU9OOeGXPmTiHtxIU7FoYh/oe+ZmPKsjSMJS1yY+RS7YrNDcTdi1Le4y4WbHrEorsRcUW8asrB2BsSxWEeYLVtiCWG2bIsJhPmnV+zkeV3/TZhLv2HzCLNlFWG2TIqRvHYZa97FR84XXEvnUSeZEft/LexZDIvXnIVFop6uCQ3RnaHHeBmO5FMBstrPjZdiTUyLlww9Bqs6w87FcobX9Vd56B+IZoZjXVlhP0f0qAwfJKS1ookw+w0HYaEFYQVs+j4ZE7Oed6o3sVfA00OphW2IBUN9S5xU+Uhad6A+ZhhDnyAMYQhDGMIQRhCGMIQhDGEEYQhDGMIQhjCCMIQhDGEIIwhDWFHCLP81vPOsezT0/BK3nj0tP1i59qxrGXrG3wIMAK5yNsqRAjAyAAAAAElFTkSuQmCC" alt="">
        <div class="search" @click="onSearch">
          <i class="iconfont icon-sousuo search-icon"></i>
          搜索商品名称
        </div>
        <i class="iconfont icon-touxiang me-icon"></i>
      </div>
      <!-- 顶部 scroll-tab-bar 导航栏 -->
      <cube-scroll
        ref="scroll"
        direction="horizontal"
        v-show="!showNaviPanel"
      >
        <cube-tab-bar
          v-model="inTabBarselectedLabel"
          show-slider
          ref="tabNav"
          @change='onTabChange'
        >
          <cube-tab
            v-for="item in naviBars"
            :label="item.label"
            :key="item.label"
            :ref='item.label'
          >
          </cube-tab>
        </cube-tab-bar>
      </cube-scroll>
      <!-- 顶部右部用于显示隐藏导航面板的向下箭头 -->
      <div class="arrow-wrapper"  @click="onArrow">
        <i ref='arrow' class="iconfont icon-jiantou_down arrow"></i>
      </div>
      <!-- 顶部隐藏导航面板 -->
      <!-- <slide-down> -->
      <div class="navi-panel" v-show="showNaviPanel">
        <div class="navi-panel-title">全部</div>
        <div class="navi-panel-item-wrapper">
          <div class="navi-panel-item"
            v-for="(item, index) in naviBars"
            :key="item.label"
          >
            <div :class="inTabBarselectedLabel === item.label ?
              'navi-panel-item-content navi-panel-item-active' :
              'navi-panel-item-content'"
              @click="onNaviClick(index)"
            >
              {{item.label}}
            </div>
          </div>
        </div>
      </div>
      <!-- </slide-down> -->
    </div>
    <!-- 导航关联的下部 slide 显示内容区 -->
    <div class="content-page">
      <cube-slide
        ref="slide"
        :options="slideOptions"
        :initial-index="initialIndex"
        @change="changePage"
        @scroll='slideScroll'
        :autoPlay='false'
        :loop='false'
        :showDots='false'
        :data='compNames'
      >
        <cube-slide-item  v-for='item of compNames' :key='item.compName'>
          <cube-scroll
            :options="scrollOptions"
            v-if="item.isShow"
            :ref='item.naviLabel'
            :scroll-events="['scroll']"
            @scroll='contentPageScroll'
          >
            <slot :compName='item.compName'></slot>
          </cube-scroll>
        </cube-slide-item>
      </cube-slide>
    </div>

    <to-top @click.native='onToTop' v-show="showToTop"></to-top>

  </div>
</template>
<script>
// import SlideDown from 'common/transition/slide-down/SlideDown'
import ToTop from 'common/ToTop'
import ShadeMask from 'common/ShadeMask'
export default {
  name: 'NaviHeader',
  props: {
    naviBars: Array,
    compNames: Array,
    tabBarselectedLabel: String
  },
  data () {
    return {
      showToTop: false,
      showMask: false,
      showNaviPanel: false,
      inTabBarselectedLabel: this.tabBarselectedLabel,
      slideOptions: {
        // listenScroll: true,
        // probeType: 3,
        /* lock y-direction when scrolling horizontally and  vertically at the same time */
        // directionLockThreshold: 0
      },
      scrollOptions: {
        /* lock x-direction when scrolling horizontally and  vertically at the same time */
        // directionLockThreshold: 0
        // probeType: 1
      }
    }
  },
  components: {
    // SlideDown,
    ShadeMask,
    ToTop
  },
  computed: {
    initialIndex () {
      const index = this.naviBars.findIndex(item => {
        return this.inTabBarselectedLabel === item.label
      })
      return index
    }
  },
  methods: {
    onArrow (e) {
      this.$refs.arrow.classList.toggle('rotate')
      this.showNaviPanel = !this.showNaviPanel
      this.showMask = !this.showMask
    },
    onNaviClick (current) {
      this.initNaviData()
      this.changePage(current)
    },
    onTabChange (label) {
      const element = this.$refs[label][0].$el
      this.$refs.scroll.scroll.scrollToElement(element, 1000, true)
      this.$emit('onTabChange', label)
    },
    changePage (current) {
      this.inTabBarselectedLabel = this.naviBars[current].label
      // 此处不明白为什么要加计时器才能触发导航条滚动
      setTimeout(() => {
        this.onTabChange(this.inTabBarselectedLabel)
      }, 10)
    },
    onShadeMaskClick () {
      this.initNaviData()
    },
    initNaviData () {
      this.$refs.arrow.classList.toggle('rotate')
      this.showNaviPanel = false
      this.showMask = false
    },
    onSearch () {
      this.$emit('onSearch')
    },
    onToTop () {
      this.$refs[this.inTabBarselectedLabel][1].scrollTo(0, 0, 1000)
    },
    contentPageScroll ({x, y}) {
      this.showToTop = y < -800
    },
    slideScroll (pos) {
      // const x = Math.abs(pos.x)
      // const tabItemWidth = this.$refs.tabNav.$el.clientWidth
      // const slideScrollerWidth = this.$refs.slide.slide.scrollerWidth
      // const deltaX = x / slideScrollerWidth * tabItemWidth
      // this.$refs.tabNav.setSliderTransform(deltaX)
    }
  }
}
</script>
<style lang='stylus'>
.navi-header
  z-index: 99
  position: fixed
  top: 0
  left: 0
  right: 0
  box-shadow: 0 2px 4px -1px rgba(0,0,0,.2)
  background: #f2f2f2
  .header
    width: 100%
    display: flex
    align-items: center
    height: .9rem
    .logo-img
      width: .48rem
      height: .33rem
      padding: 0 .3rem
    .search
      background: #ffffff
      flex: 1
      height: .66rem
      font-size: .3rem
      color: #999
      border-radius: .05rem
      text-indent: .15rem
      border: .01rem solid #ccc
      .search-icon
        font-size: .3rem
        line-height: .66rem
        width: .3rem
        height: .3rem
    .me-icon
      font-size: .4rem
      padding: 0 .3rem
  .cube-scroll-wrapper
    margin-right: 1rem
    display: flex
    .cube-scroll-content
      display: inline-block
    .cube-tab-bar
      line-height: .6rem
      font-size: .27rem
      white-space: nowrap
      .cube-tab
        padding: 0 .25rem
        display: inline-block
  .arrow-wrapper
    z-index: 2
    display: flex
    align-items: center
    justify-content: center
    position: absolute
    right: 0rem
    top: .88rem
    width: .8rem
    height: .6rem
    box-shadow: -15px 0 15px 0 #f2f2f2
    background: #f2f2f2
    .arrow
      font-size: .4rem
      color: #999
      transition: transform .3s
    .rotate
      transform: rotateZ(180deg)
  .navi-panel
    width: 100%
    .navi-panel-title
      font-size: .29rem
      text-indent: .2rem
      line-height: .6rem
    .navi-panel-item-wrapper
      display: flex
      flex-wrap: wrap
      font-size: .27rem
      padding-bottom: .06rem
      .navi-panel-item
        width: 25%
        .navi-panel-item-content
          text-align: center
          line-height: .56rem
          margin: .12rem auto
          width: 1.52rem
          height: .56rem
          background: #ffffff
          border-radius: .06rem
          border: 1px solid #e5e5e5
        .navi-panel-item-active
          color: #ff6700
          border: 1px solid #ff6700
          background: #fde0d5
.content-page
  position: absolute
  top: 1.5rem
  left: 0
  right: 0
  bottom: 1rem
</style>
