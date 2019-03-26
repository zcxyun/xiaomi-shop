<template>
  <div class="category-container">
    <title-bar :title="naviTitle" v-if="showTitleBar"></title-bar>
    <cube-scroll-nav
      :side="true"
      :data="datas"
      :current="current"
      @change="changeHandler"
      @sticky-change="stickyChangeHandler"
      class="scrollNav"
      ref='scrollNav'
    >
      <cube-scroll-nav-panel
        v-for="item in datas"
        :key="item.name"
        :label="item.name"
        :title="item.name"
      >
        <div class="header-img-wrapper">
          <img :src="item.headerImg.img" class="header-img">
        </div>
        <ul class="goods">
          <li v-for="good in item.goods" :key="good.name">
            <div class="good-title"><span class="title">{{good.name}}</span></div>
            <ul class="items">
              <li class="item" v-for="item of good.items" :key='item.productId'>
                <img :src="item.img" class="item-img">
                <div class="item-name">{{item.name}}</div>
              </li>
            </ul>
          </li>
        </ul>
      </cube-scroll-nav-panel>
    </cube-scroll-nav>
    <bottom-navi-bar ></bottom-navi-bar>
  </div>
</template>
<script>
import HTTP from '@/utils/http.js'
import TitleBar from 'common/navibar/TitleBar'
import BottomNaviBar from 'common/navibar/BottomNaviBar'
import {mapMutations} from 'vuex'

const http = new HTTP()

export default {
  name: 'Category',
  data () {
    return {
      datas: [],
      naviTitle: '分类',
      showTitleBar: false
    }
  },
  components: {
    BottomNaviBar,
    TitleBar
  },
  computed: {
    current () {
      return this.datas[0] ? this.datas[0].name : ''
    }
  },
  methods: {
    ...mapMutations(['changeSelectedNavi']),
    changeHandler (label) {
    },
    stickyChangeHandler (current) {
    },
    handleGetCateSucc (res) {
      this.datas = res.data
      this.$refs.scrollNav.refresh()
    }
  },
  mounted () {
    this.changeSelectedNavi('分类')
    this.showTitleBar = true
    http.request({
      url: '/api/category.json'
    }).then(this.handleGetCateSucc)
  },
  activated () {
    this.changeSelectedNavi('分类')
    this.showTitleBar = true
  },
  deactivated () {
    this.showTitleBar = false
  }
}
</script>
<style lang='stylus' scoped>
@import '~styles/mixins.styl'
.category-container >>> .cube-scroll-nav-panel-title
  font-size: 0rem
.category-container >>> .cube-scroll-nav-main
  background-color: #fff
.category-container >>> .cube-sticky-fixed
  background-color: #fff
.category-container >>> .cube-scroll-nav
  height: unset
.category-container >>> .cube-scroll-nav-bar
  padding-top: .3rem
  width: 1.5rem
  border-right: .01rem solid #eee
.category-container >>> .cube-scroll-nav-bar-item
  font-size: .27rem
  padding: .3rem
.category-container >>> .cube-scroll-nav-bar-item_active
  font-size: .35rem
  transition: all .2s
.category-container >>> .cube-scroll-nav-panels
  background-color: #fff
  padding: 0 .35rem
.category-container
  .scrollNav
    position: absolute
    top: 1rem
    left: 0
    right: 0
    bottom: 1rem
    .header-img-wrapper
      .header-img
        width: 100%
    .goods
      .good-title
        text-align: center
        font-size: .3rem
        line-height: 1.3rem
        margin-top: .2rem
        .title
          position: relative
          &:before
            content: ''
            position: absolute
            top: 50%
            left: 0
            border-top: 1px solid #e0e0e0
            width: .4rem
            transform: translate3d(-150%,0,0)
          &:after
            content: ''
            position: absolute
            top: 50%
            right: 0
            border-top: 1px solid #e0e0e0
            width: .4rem
            transform: translate3d(150%,0,0)
      .items
        display: flex
        flex-wrap: wrap
        .item
          margin: .2rem 0
          width: 33%
          text-align: center
          .item-img
            width: 1rem
            height: 1rem
          .item-name
            font-size: .2rem
            color: #666
            margin: .1rem auto
            width: 1.8rem
            ellipsis()
</style>
