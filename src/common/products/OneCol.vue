<template>
  <div class="products-one-col">
    <div class="products" v-for="item of productList" :key="item.id">
      <div class="img-wrapper">
        <img :src="item.img" class="img-content">
        <img :src="item.hintImg" class="hint-img">
      </div>
      <div class="content">
        <div class="title-current-price">
          <div class="title">{{item.title}}</div>
          <div class="current-price-wrapper">
            <span class="current-price">
              {{item.currentPrice}}<span class="has-higher" v-if="item.hasHigherPrice">起</span>
            </span>
          </div>
        </div>
        <div class="summary-original-price">
          <div class="summary">{{item.summary}}</div>
          <div class="original-price-wrapper">
            <span v-if="item.originalPrice" class="moneySign">¥</span>
            <span class="original-price" v-if="item.originalPrice">{{item.originalPrice}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ProductsOneCol',
  props: {
    productList: Array
  }
}
</script>
<style lang='stylus' scoped>
@import '~styles/mixins.styl'
.products-one-col
  .products
    background: #ffffff
    height: 0
    width: 100%
    overflow: hidden
    padding-bottom: 67%
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
      padding: .26rem .3rem
      .title-current-price
        display: flex
        justify-content: space-between
        .title
          font-size: .34rem
          font-weight: 400
          margin-right: .1rem
          ellipsis()
        .current-price-wrapper
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
            .has-higher
              font-size: .25rem
      .summary-original-price
        display: flex
        justify-content: space-between
        margin-top: .17rem
        .summary
          font-size: .2rem
          font-weight: 400
          color: #777
          ellipsis()
          margin-right: .1rem
        .original-price-wrapper
          .moneySign
            font-size: .2rem
          .original-price
            font-size: .2rem
            font-weight: 500
            text-decoration: line-through
            color: rgba(0,0,0,.54)
</style>
