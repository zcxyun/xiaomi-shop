<template>
  <div class="me">
    <div class="login-register">
      <img :src="loginBg" class="login-bg">
      <div class="avatar">
        <img :src="avatarImg" class="avatar-img">
        <span class="login-text">登录/注册</span>
      </div>
    </div>
    <div class="my-order-wrapper">
      <div class="my-order">我的订单</div>
      <div class="all-order">
        <span class="all-order-text">全部订单</span>
        <i class="iconfont icon-youjiantou"></i>
      </div>
    </div>
    <bottom-navi-bar></bottom-navi-bar>
  </div>
</template>
<script>
import BottomNaviBar from 'common/navibar/BottomNaviBar'
import {mapMutations} from 'vuex'

export default {
  name: 'Me',
  data () {
    return {
      loginBg: '/img/me@loginBg.png',
      avatarImg: '/img/me@avatar.png'
    }
  },
  components: {
    BottomNaviBar
  },
  methods: {
    ...mapMutations(['changeSelectedNavi'])
  },
  mounted () {
    this.changeSelectedNavi('我的')
  },
  activated () {
    this.changeSelectedNavi('我的')
  }
}
</script>
<style lang='stylus' scoped>
.me
  .login-register
    .login-bg
      width: 100%
      background: #f37d0f
      height: 1.65rem
      position: relative
    .avatar
      position: absolute
      width: 3rem
      top: .32rem
      left: .33rem
      .avatar-img
        width: .9rem
        border-radius: 50%
        border: 3px solid hsla(0,0%,100%,.4)
      .login-text
        vertical-align: middle
        padding-left: .1rem
        font-size: .25rem
        color: #fff
  .my-order-wrapper
    display: flex
    justify-content: space-between
    align-items: center
    height: .8rem
    border-bottom: .01rem solid #ddd
    .my-order
      font-size: .3rem
      padding-left: .3rem
    .all-order
      width: 1.5rem
      display: flex
      justify-content: space-between
      align-items: center
      margin-right: .2rem
      .all-order-text
        font-size: .22rem
      .icon-youjiantou
        font-size: .5rem
        color: #999
</style>
