<template>
  <div class="container">
    <div class="header">
      <div class="logo">
        <img class='logo-img' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEwAAAAyCAYAAAD2vz2aAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MjQ2OUE2MkU0RTQ4MTFFNzgxOTZBRDJFQjk4Qjk0NjQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MjQ2OUE2MkY0RTQ4MTFFNzgxOTZBRDJFQjk4Qjk0NjQiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpCOUQ0QkM2RjREQ0MxMUU3ODE5NkFEMkVCOThCOTQ2NCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpCOUQ0QkM3MDREQ0MxMUU3ODE5NkFEMkVCOThCOTQ2NCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PiL8gcIAAAF1SURBVHja7Ju/LwRRFEbf+FVsQ0dBdJKNSksUSqVCr6AhKxGVwn+gVUpQEI1So5XoZUOhEbKMDiESIeOTzPbvzpoxz5wvOd3duzsn++7cSXajZMU9OOeGXPmTiHtxIU7FoYh/oe+ZmPKsjSMJS1yY+RS7YrNDcTdi1Le4y4WbHrEorsRcUW8asrB2BsSxWEeYLVtiCWG2bIsJhPmnV+zkeV3/TZhLv2HzCLNlFWG2TIqRvHYZa97FR84XXEvnUSeZEft/LexZDIvXnIVFop6uCQ3RnaHHeBmO5FMBstrPjZdiTUyLlww9Bqs6w87FcobX9Vd56B+IZoZjXVlhP0f0qAwfJKS1ookw+w0HYaEFYQVs+j4ZE7Oed6o3sVfA00OphW2IBUN9S5xU+Uhad6A+ZhhDnyAMYQhDGMIQRhCGMIQhDGEEYQhDGMIQhjCCMIQhDGEIIwhDWFHCLP81vPOsezT0/BK3nj0tP1i59qxrGXrG3wIMAK5yNsqRAjAyAAAAAElFTkSuQmCC" alt="">
      </div>
      <div class="search">
        <!-- <span class="iconfont search-icon">&#xe632;</span> -->
        <i class="iconfont icon-sousuo search-icon"></i>
        搜索商品名称
      </div>
      <div class="me">
        <!-- <span class='iconfont me-icon'>&#xe65f;</span> -->
        <i class="iconfont icon-touxiang me-icon"></i>
      </div>
    </div>
    <div class="navigation-wrapper" ref='navigation'>
      <ul class="navigation">
        <li class='navi-item' v-for="(item, index) in list" :key='index'>
          {{item}}
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import Bscroll from 'better-scroll'
export default {
  name: 'HomeHeader',
  data () {
    return {
      list: [
        '推荐', '手机', '智能', '电视', '笔记本', '生活周边'
      ]
    }
  },
  mounted () {
    this.navigation = new Bscroll(this.$refs.navigation)
  }
}
</script>
<style lang='stylus' scoped>
.container
  position: fixed
  top: 0
  left: 0
  width: 100%
  height: 1.48rem
  background: #f2f2f2
  .header
    width: 100%
    display: flex
    align-item: center
    .logo
      width: 1rem
      line-height: .88rem
      height: .88rem
      text-align: center
      .logo-img
        width: .5rem
    .search
      flex: 1
      background: #ffffff
      margin: .1rem 0
      .search-icon
        line-height: .68rem
        padding: 0 .2rem
    .me
      width: 1rem
      height: .88rem
      text-align: center
      line-height: .88rem
      .me-icon
        font-size: .4rem
  .navigation-wrapper
    width: 100vw
    .navigation
      width: 120vw
      height: .6rem
      // overflow-x: auto
      // text-align: center
      // align-item: center
      // justify-content: space-around
      .navi-item
        white-space: nowrap
        line-height: .6rem
        padding: 0 .25rem
        display: inline-block

</style>
