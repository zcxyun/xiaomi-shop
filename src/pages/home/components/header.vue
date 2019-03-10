<template>
  <div class="container">

    <div class="header">
      <img class='logo-img' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEwAAAAyCAYAAAD2vz2aAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MjQ2OUE2MkU0RTQ4MTFFNzgxOTZBRDJFQjk4Qjk0NjQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MjQ2OUE2MkY0RTQ4MTFFNzgxOTZBRDJFQjk4Qjk0NjQiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpCOUQ0QkM2RjREQ0MxMUU3ODE5NkFEMkVCOThCOTQ2NCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpCOUQ0QkM3MDREQ0MxMUU3ODE5NkFEMkVCOThCOTQ2NCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PiL8gcIAAAF1SURBVHja7Ju/LwRRFEbf+FVsQ0dBdJKNSksUSqVCr6AhKxGVwn+gVUpQEI1So5XoZUOhEbKMDiESIeOTzPbvzpoxz5wvOd3duzsn++7cSXajZMU9OOeGXPmTiHtxIU7FoYh/oe+ZmPKsjSMJS1yY+RS7YrNDcTdi1Le4y4WbHrEorsRcUW8asrB2BsSxWEeYLVtiCWG2bIsJhPmnV+zkeV3/TZhLv2HzCLNlFWG2TIqRvHYZa97FR84XXEvnUSeZEft/LexZDIvXnIVFop6uCQ3RnaHHeBmO5FMBstrPjZdiTUyLlww9Bqs6w87FcobX9Vd56B+IZoZjXVlhP0f0qAwfJKS1ookw+w0HYaEFYQVs+j4ZE7Oed6o3sVfA00OphW2IBUN9S5xU+Uhad6A+ZhhDnyAMYQhDGMIQRhCGMIQhDGEEYQhDGMIQhjCCMIQhDGEIIwhDWFHCLP81vPOsezT0/BK3nj0tP1i59qxrGXrG3wIMAK5yNsqRAjAyAAAAAElFTkSuQmCC" alt="">
      <div class="search">
        <i class="iconfont icon-sousuo search-icon"></i>
        搜索商品名称
      </div>
      <i class="iconfont icon-touxiang me-icon"></i>
    </div>

    <cube-scroll
      ref="scroll"
      direction="horizontal"
      v-show="!showNaviPanel"
    >
      <cube-tab-bar v-model="selectedLabel" show-slider>
        <cube-tab
          v-for="item in tabs"
          :label="item.label"
          :key="item.label"
        >
        </cube-tab>
      </cube-tab-bar>
    </cube-scroll>

    <div class="arrow-wrapper"  @click="onArrow">
      <i ref='arrow' class="iconfont icon-jiantou_down arrow"></i>
    </div>

    <slide-down>
      <div class="navi-panel" v-show="showNaviPanel">
        <div class="navi-panel-title">全部</div>
        <div class="navi-panel-item-wrapper">
          <div class="navi-panel-item"
            v-for="item in tabs"
            :key="item.label"
          >
            <div :class="label === item.label ?
              'navi-panel-item-content navi-panel-item-active' :
              'navi-panel-item-content'"
              @click="onNaviClick(item.label)"
            >
              {{item.label}}
            </div>
          </div>
        </div>
      </div>
    </slide-down>

  </div>
</template>

<script>
import SlideDown from 'common/transition/slide-down/SlideDown'
export default {
  name: 'HomeHeader',
  data () {
    return {
      label: '推荐',
      showNaviPanel: false,
      selectedLabel: '推荐',
      tabs: [{
        label: '推荐'
      }, {
        label: '手机'
      }, {
        label: '智能'
      }, {
        label: '电视'
      }, {
        label: '笔记本'
      }, {
        label: '生活周边'
      }, {
        label: '家电'
      }]
    }
  },
  computed: {
  },
  components: {
    SlideDown
  },
  mounted () {
  },
  methods: {
    onArrow (e) {
      this.$refs.arrow.classList.toggle('rotate')
      this.showNaviPanel = !this.showNaviPanel
    },
    onNaviClick (label) {
      this.label = label
    }
  }
}
</script>
<style lang='stylus'>
.container
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
    margin-right: .7rem
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
    display: flex
    align-items: center
    justify-content: center
    position: absolute
    right: 0rem
    top: .88rem
    width: .8rem
    height: .6rem
    box-shadow: -15px 0 15px 0 #f2f2f2
    z-index: 1
    background: #f2f2f2
    .arrow
      font-size: .4rem
      color: #999
      transition: transform .3s
    .rotate
      transform: rotateZ(-180deg)
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
</style>
