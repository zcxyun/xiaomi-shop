<template>
    <div>
      <cube-tab-bar v-model="selectedLabel"
                    show-slider
                    :use-transition="disabled"
                    ref="tabNav"
                    :data="tabLabels">
      </cube-tab-bar>
      <div class="tab-slide-container">
        <cube-slide
          ref="slide"
          :initial-index="initialIndex"
          :options="slideOptions"
          @scroll="scroll"
          @change="changePage"
        >
          <!-- 关注 -->
          <cube-slide-item>
            <cube-scroll :data="followersData" :options="scrollOptions">
              <ul class="list-wrapper">
                <li v-for="(item, index) in followersData" class="list-item" :key="index">
                  <img :src="item.image" alt="">
                </li>
              </ul>
            </cube-scroll>
          </cube-slide-item>
          <!-- 推荐 -->
          <cube-slide-item>
            <cube-scroll :data="followersData" :options="scrollOptions">
              <ul class="list-wrapper">
                <li v-for="(item, index) in followersData" class="list-item" :key="index">
                  <img :src="item.image" alt="">
                </li>
              </ul>
            </cube-scroll>
          </cube-slide-item>
          <cube-slide-item>
            <cube-scroll :data="followersData" :options="scrollOptions">
              <ul class="list-wrapper">
                <li v-for="(item, index) in followersData" class="list-item" :key="index">
                  <img :src="item.image" alt="">
                </li>
              </ul>
            </cube-scroll>
          </cube-slide-item>
        </cube-slide>
      </div>
    </div>
</template>

<script type="text/ecmascript-6">
export default {
  data () {
    return {
      selectedLabel: '推荐',
      disabled: false,
      tabLabels: [{
        label: '关注'
      }, {
        label: '推荐'
      }, {
        label: '热榜'
      }],
      loop: false,
      autoPlay: false,
      showDots: false,
      slideOptions: {
        listenScroll: true,
        probeType: 3,
        /* lock y-direction when scrolling horizontally and  vertically at the same time */
        directionLockThreshold: 0
      },
      scrollOptions: {
        /* lock x-direction when scrolling horizontally and  vertically at the same time */
        directionLockThreshold: 0
      },
      followersData: [{
        image: 'http://i8.mifile.cn/v1/a1/7f2b76cc-64ee-6d1a-e2a5-ead23ccc615c!720x360.webp'
      }]
    }
  },
  methods: {
    changePage (current) {
      this.selectedLabel = this.tabLabels[current].label
    },
    scroll (pos) {
      const x = Math.abs(pos.x)
      const tabItemWidth = this.$refs.tabNav.$el.clientWidth
      const slideScrollerWidth = this.$refs.slide.slide.scrollerWidth
      const deltaX = x / slideScrollerWidth * tabItemWidth
      this.$refs.tabNav.setSliderTransform(deltaX)
    }
  },
  computed: {
    initialIndex () {
      let index = 0
      index = this.tabLabels.findIndex(
        item => item.label === this.selectedLabel
      )
      return index
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
.cube-tab-bar
  background-color: white
.cube-tab, .cube-tab_active
    color: black
.cube-tab-bar-slider
  background-color: black
.tab-slide-container
  position: fixed
  top: 74px
  left: 0
  right: 0
  bottom: 0
  background: red
</style>
