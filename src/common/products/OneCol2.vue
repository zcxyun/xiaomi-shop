<template>
  <div class="products-one-col2">
    <div class="products" v-for="item of products" :key="item.id">
      <div class="img-wrapper">
        <img :src="item.img" class="img-content">
      </div>
      <div class="content">
        <div class="title-price">
          <div class="title">{{item.title}}</div>
          <div class="price">
            <span class="current-price">
              {{item.currentPrice}}
              <span class="price-after-text" v-if="item.hasHigherPrice">起</span>
            </span>
            <span class="original-price" v-if="item.originalPrice">
              ¥{{item.originalPrice}}
            </span>
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
export default {
  name: 'ProductsOneCol2',
  props: {
    products: Array
  }
}
</script>
<style lang='stylus' scoped>
.products-one-col2
  background: #ffffff
  margin: 0 0.1rem
  .products
    height: 0
    width: 100%
    overflow: hidden
    padding-bottom: 80%
    .img-wrapper
      .img-content
        width: 100%
    .content
      padding: .2rem .3rem
      .title-price
        display: flex
        justify-content: space-between
        .title
          font-size: .34rem
          font-weight: 500
        .price
          .current-price
            font-weight: 500
            font-size: .29rem
            color: #ea625b
            position: relative
            padding-left: .2rem
            &:before
              content: '¥'
              position: absolute
              left: 0
              font-size: .05rem
            .price-after-text
              font-size: .05rem
          .original-price
            text-decoration: line-through
            color: rgba(0,0,0,.54)
      .summary-button
        display: flex
        justify-content: space-between
        .summary
          font-size: .04rem
          line-height: .6rem
          color: #666
        .button
          background: #ea625b
          color: #ffffff
          width: 2rem
          border-radius: .05rem
          text-align: center
          line-height: .6rem
          font-weight: 700
</style>
