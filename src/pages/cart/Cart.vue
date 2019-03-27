<template>
  <div class="cart">
    <title-bar :title="cartTitle" v-if="showTitleBar" @onSearch='onSearch'></title-bar>
    <div class="login">
      <div class="left">登录后享受更多优惠</div>
      <div class="right">
        <span class="text">去登录</span>
        <i class="iconfont icon-youjiantou"></i>
      </div>
    </div>
    <div class="cart-is-nothing">
      <i class="iconfont icon-gouwuchekong"></i>
      <div class="nothing-text">购物车还是空的</div>
      <div class="go-home">去逛逛</div>
    </div>
    <div class="guess-you-like">
      <img src="//i8.mifile.cn/b2c-mimall-media/e95ade2750a7fde92369b416c7d3176d.jpg" class="like-img">
    </div>
    <product-two-col :productList='productList'></product-two-col>
    <bottom-navi-bar v-show="showBottomNavi"></bottom-navi-bar>
  </div>
</template>
<script>
import TitleBar from 'common/navibar/TitleBar'
import BottomNaviBar from 'common/navibar/BottomNaviBar'
import {mapMutations} from 'vuex'
import ProductTwoCol from 'common/products/TwoCol'
import HTTP from '@/utils/http.js'

const http = new HTTP()
export default {
  name: 'Cart',
  data () {
    return {
      showTitleBar: false,
      showBottomNavi: true,
      cartTitle: '购物车',
      productList: []
    }
  },
  components: {
    BottomNaviBar,
    TitleBar,
    ProductTwoCol
  },
  methods: {
    ...mapMutations(['changeSelectedNavi']),
    getLikeProductsInfo () {
      http.request({
        url: '/api/guessYouLike.json'
      }).then(this.handleGetYouLikeSucc)
    },
    handleGetYouLikeSucc (res) {
      this.productList = res.productList
    },
    onSearch () {
      this.showBottomNavi = false
      this.$router.push('/search')
    }
  },
  mounted () {
    this.showBottomNavi = true
    this.showTitleBar = true
    this.changeSelectedNavi('购物车')
    this.getLikeProductsInfo()
  },
  activated () {
    this.showBottomNavi = true
    this.showTitleBar = true
    this.changeSelectedNavi('购物车')
  },
  deactivated () {
    this.showTitleBar = false
  }
}
</script>
<style lang='stylus' scoped>
.cart
  padding-bottom: 1rem
  .login
    margin-top: 1rem
    display: flex
    height: 1.1rem
    justify-content: space-between
    align-items: center
    .left
      padding-left: .3rem
      font-size: .34rem
    .right
      padding-right: .2rem
      font-size: .1rem
      color: #888
      display: flex
      justify-content: space-between
      align-items: center
      .icon-youjiantou
        font-size: .5rem
  .cart-is-nothing
    height: 1.2rem
    display: flex
    justify-content: center
    align-items: center
    background: #ebebeb
    .icon-gouwuchekong
      font-size: .8rem
      color: #ccc
      margin-right: .2rem
    .nothing-text
      color: #999
      font-size: .25rem
    .go-home
      font-size: .27rem
      width: 1.3rem
      margin-left: .2rem
      border: .01rem solid #ccc
      line-height: .5rem
      text-align: center
  .guess-you-like
    margin-bottom: .05rem
    .like-img
      width: 100%
</style>
