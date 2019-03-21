<template>
  <div class="container">
    <div class="item" v-for="item of productList" :key='item.id'>
      <div class="img-wrapper">
        <img :src="item.img" class="item-img">
        <img :src="item.hintImg" class="hint-img" v-if="item.hintImg">
      </div>
      <div class="item-content">
        <div class="title">{{item.title}}</div>
        <div class="summary">{{item.summary}}</div>
        <div class="price">
          <span class="current-price">
            {{item.currentPrice}}<span class="hasHigher" v-if="item.hasHigherPrice">起</span>
          </span>
          <span v-if="item.originalPrice" class="moneySign">¥</span>
          <span class="original-price" v-if='item.originalPrice'>{{item.originalPrice}}</span>
        </div>
        <div class="btn">{{item.btnText}}</div>
      </div>
    </div>
  </div>
</template>
<script>
/**
 * 带 立即购买或立即预约 按钮 双列显示产品的组件
 */
export default {
  name: 'ProductsTwoCol2',
  props: {
    productList: Array
  }
}
</script>
<style lang='stylus' scoped>
@import '~styles/mixins.styl'
.container
  margin: .05rem .12rem
  display: flex
  flex-wrap: wrap
  justify-content: space-between
  .item
    background: #ffffff
    width: 49%
    overflow: hidden
    padding-bottom: 70%
    height: 0
    margin: .07rem 0
    .img-wrapper
      position: relative
      .item-img
        width: 100%
      .hint-img
        width: 1rem
        height: 1rem
        position: absolute
        bottom: .05rem
        right: .05rem
    .item-content
      text-align: center
      width: 100%
      margin: .2rem auto
      .title
        color: #000
        font-size: .3rem
        font-weight: 350
        ellipsis()
      .summary
        font-size: .2rem
        color: #666
        line-height: .45rem
        ellipsis()
      .price
        margin-top: .07rem
        .current-price
          font-size: .28rem
          font-weight: 500
          position: relative
          color: #ea625b
          padding-left: .18rem
          padding-right: .1rem
          &:before
            content: "¥"
            position: absolute
            left: 0
            font-size: .25rem
          .hasHigher
            font-size: .2rem
        .moneySign
          font-size: .2rem
        .original-price
          font-weight: 500
          font-size: .25rem
          text-decoration: line-through
          color: rgba(0,0,0,.54)
      .btn
        margin: .1rem auto
        background: #ea625b
        color: #ffffff
        width: 2rem
        border-radius: .05rem
        text-align: center
        line-height: .6rem
        font-weight: 700
        font-size: .2rem
</style>
