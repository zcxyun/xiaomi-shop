<template>
  <div class="products">
    <div class="topBanner">
      <img :src="products.topBannerImg" class="topBannerImg">
    </div>
    <div class="item-wrapper">
      <div class="item" v-for="item of products.productList" :key='item.id'>
        <img :src="item.img" class="item-img">
        <div class="item-content">
          <div class="title">{{item.title}}</div>
          <div class="summary">{{item.summary}}</div>
          <div class="price">
            <span class="current-price">
              {{item.currentPrice}}<span class="hasHigher" v-if="item.hasHigherPrice">起</span>
            </span>
            <span v-if="item.originalPrice">¥</span>
            <span class="original-price" v-if='item.originalPrice'>{{item.originalPrice}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'RecommendProducts',
  props: {
    products: Object
  }
}
</script>
<style lang='stylus' scoped>
@import '~styles/mixins.styl'
.products
  width: 100%
  background: #fff
  .topBanner
    width: 100%
    height: 0
    overflow: hidden
    padding-bottom: 60%
    .topBannerImg
      width: 100%
  .item-wrapper
    margin-top: .05rem
    width: 100%
    display: flex
    flex-wrap: wrap
    justify-content: space-between
    .item
      width: 49.7%
      overflow: hidden
      padding-bottom: 70%
      height: 0
      .item-img
        width: 100%
      .item-content
        height: 1.5rem
        width: 100%
        padding-left: .3rem
        display: flex
        flex-direction: column
        justify-content: center
        .title
          color: #000
          font-size: .3rem
          font-weight: 350
          ellipsis()
        .summary
          color: #999
          line-height: .45rem
          ellipsis()
        .price
          margin-top: .07rem
          .current-price
            font-size: .3rem
            position: relative
            color: #ea625b
            padding-left: .2rem
            padding-right: .2rem
            &:before
              content: "¥"
              position: absolute
              left: 0
              top: 0
              font-size: .1rem
            .hasHigher
              font-size: .1rem
          .original-price
            text-decoration: line-through
            color: rgba(0,0,0,.54)
</style>
