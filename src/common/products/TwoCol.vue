<template>
  <div class="ProductsTwoCol">
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
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ProductsTwoCol',
  props: {
    productList: Array
  }
}
</script>
<style lang='stylus' scoped>
@import '~styles/mixins.styl'
.ProductsTwoCol
  display: flex
  flex-wrap: wrap
  justify-content: space-between
  background: #ffffff
  .item
    width: 49.7%
    overflow: hidden
    padding-bottom: 70%
    height: 0
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
      height: 1.5rem
      padding-left: .3rem
      padding-right: .3rem
      display: flex
      flex-direction: column
      justify-content: center
      .title
        color: #000
        font-size: .3rem
        font-weight: 350
        ellipsis()
      .summary
        font-size: .2rem
        color: #777
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
            font-size: .2rem
          .hasHigher
            font-size: .2rem
        .moneySign
          font-size: .2rem
        .original-price
          font-size: .25rem
          font-weight: 500
          text-decoration: line-through
          color: rgba(0,0,0,.54)
</style>
