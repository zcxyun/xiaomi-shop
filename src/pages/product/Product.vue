<template>
  <div class="product">
    <cube-scroll
      ref="scroll"
      :scroll-events="['scroll']"
      @scroll='contentPageScroll'
    >
      <font-icon #default='{iconStyle}' class="back-icon" @click.native="onBackIcon">
        <i class="iconfont icon-fanhui" :style="iconStyle"></i>
      </font-icon>
      <font-icon #default='{iconStyle}' class="share-icon">
        <i class="iconfont icon-tubiaozhizuo-" :style="iconStyle"></i>
      </font-icon>
      <product-header></product-header>
      <product-summary></product-summary>
      <product-params @click.native="onParamsClick"></product-params>
      <product-menu></product-menu>
      <product-comment></product-comment>
    </cube-scroll>
    <product-params-detail
        :show="showParamsDetail"
        :showShadeMask="showParamsDetail"
        @onClose='onCloseParamsDetail'></product-params-detail>
    <to-top @click.native="onToTop" v-show="showToTop"></to-top>
    <product-bottom-tab v-if="showBottomTab"></product-bottom-tab>
  </div>
</template>
<script>
import FontIcon from 'common/navibar/FontIcon'
import ProductHeader from './components/Header'
import ProductSummary from './components/Summary'
import ProductParams from './components/Params'
import ProductParamsDetail from './components/ParamsDetail'
import ProductMenu from './components/Menu'
import ProductComment from './components/Comment'
import ToTop from 'common/ToTop'
import ProductBottomTab from './components/BottomTab'

import {mapMutations} from 'vuex'

export default {
  name: 'Product',
  data () {
    return {
      showParamsDetail: false,
      showToTop: false,
      showBottomTab: false
    }
  },
  components: {
    FontIcon,
    ProductHeader,
    ProductSummary,
    ProductParams,
    ProductParamsDetail,
    ProductMenu,
    ProductComment,
    ToTop,
    ProductBottomTab
  },
  methods: {
    ...mapMutations(['changeShowTitleBar', 'changeShowBottomNaviBar']),
    onBackIcon () {
      this.$router.go(-1)
    },
    onParamsClick () {
      this.showParamsDetail = true
    },
    changeShowHeaderFooter () {
      this.changeShowTitleBar(false)
      this.changeShowBottomNaviBar(false)
    },
    onCloseParamsDetail () {
      this.showParamsDetail = false
    },
    onToTop () {
      this.$refs.scroll.scrollTo(0, 0, 1000)
    },
    contentPageScroll ({x, y}) {
      this.showToTop = y < -100
    }
  },
  mounted () {
    this.$refs.scroll.refresh()
    this.showBottomTab = true
    this.changeShowHeaderFooter()
  },
  activated () {
    this.$refs.scroll.refresh()
    this.showBottomTab = true
    this.changeShowHeaderFooter()
  },
  deactivated () {
    this.showBottomTab = false
  }
}
</script>
<style lang='stylus' scoped>
// .product >>> .cube-scroll-content
  // margin-bottom: 1rem
.product
  // position: fixed
  // top: 0
  // left: 0
  // right: 0
  height: 13.34rem
  .back-icon
    position: absolute
    top: .2rem
    left: .2rem
  .share-icon
    position: absolute
    top: .2rem
    right: .2rem
</style>
