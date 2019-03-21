<template>
  <div class="products-one-col2">
    <div class="products" v-for="item of productList" :key="item.id">
      <div class="img-wrapper">
        <img :src="item.img" class="img-content">
        <img :src="item.hintImg" class="hint-img">
      </div>
      <div class="content">
        <div class="title-price">
          <div class="title">{{item.title}}</div>
          <div class="price">
            <span class="current-price">
              {{item.currentPrice}}<span class="price-after-text" v-if="item.hasHigherPrice">起</span>
            </span>
            <span v-if="item.originalPrice" class="moneySign">¥</span>
            <span class="original-price" v-if="item.originalPrice">{{item.originalPrice}}</span>
          </div>
        </div>
        <div class="summary-button">
          <div class="summary">{{item.summary}}</div>
          <div class="button">{{item.btnText}}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
/**
 * 带 立即购买或立即预约 按钮 单列显示产品的组件
 */
export default {
  name: 'ProductsOneCol2',
  props: {
    productList: Array
  }
}
</script>
<style lang='stylus' scoped>
@import '~styles/mixins.styl'
.products-one-col2
  margin: 0 0.12rem
  .products
    background: #ffffff
    height: 0
    width: 100%
    overflow: hidden
    padding-bottom: 80%
    .img-wrapper
      position: relative
      .img-content
        width: 100%
      .hint-img
        width: 1rem
        height: 1rem
        position: absolute
        bottom: .05rem
        right: .05rem
    .content
      padding: .2rem .3rem
      .title-price
        display: flex
        justify-content: space-between
        .title
          font-size: .34rem
          font-weight: 500
          margin-right: .1rem
          ellipsis()
        .price
          .current-price
            font-weight: 500
            font-size: .29rem
            color: #ea625b
            position: relative
            padding-left: .15rem
            &:before
              content: '¥'
              position: absolute
              left: 0
              font-size: .25rem
            .price-after-text
              font-size: .25rem
          .moneySign
            font-size: .2rem
          .original-price
            font-size: .2rem
            font-weight: 500
            text-decoration: line-through
            color: rgba(0,0,0,.54)
      .summary-button
        display: flex
        justify-content: space-between
        .summary
          font-size: .2rem
          font-weight: 500
          line-height: .6rem
          color: #666
          ellipsis()
          margin-right: .1rem
        .button
          font-size: .2rem
          font-weight: 500
          background: #ea625b
          color: #ffffff
          width: 2rem
          border-radius: .05rem
          text-align: center
          line-height: .6rem
          font-weight: 700
</style>
