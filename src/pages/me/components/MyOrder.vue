<template>
  <div class="me-my-order">
    <div class="my-order-wrapper">
      <div class="my-order">我的订单</div>
      <div class="all-order">
        <span class="all-order-text">全部订单</span>
        <i class="iconfont icon-youjiantou"></i>
      </div>
    </div>
    <div class="my-order-icons">
      <div class="my-order-icon" v-for="item of orderIcons" :key="item.id">
        <img :src="item.img" class="icon-img">
        <div class="icon-text">{{item.text}}</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'MeMyOrder',
  props: {
    orderIcons: Array
  }
}
</script>
<style lang='stylus' scoped>
.me-my-order
  background: #fff
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
      min-width: 1.5rem
      display: flex
      justify-content: space-between
      align-items: center
      margin-right: .15rem
      .all-order-text
        font-size: .25rem
      .icon-youjiantou
        font-size: .5rem
        color: #999
  .my-order-icons
    display: flex
    justify-content: space-around
    align-items: center
    height: 1.8rem
    .my-order-icon
      text-align: center
      .icon-img
        width: .5rem
        height: .5rem
      .icon-text
        margin-top: .15rem
        font-size: .25rem
</style>
