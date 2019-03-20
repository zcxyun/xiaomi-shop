<template>
  <div class="container">
    <div class="item-wrapper">
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
            <!-- <span v-if="item.originalPrice" class="hasHigher">¥</span> -->
            <span class="original-price" v-if='item.originalPrice'>{{item.originalPrice}}</span>
          </div>
          <div class="btn">{{item.btnText}}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ProductsTwoCol2',
  props: {
    productList: Array
  }
}
</script>
<style lang='stylus' scoped>
.container
  margin: 0 .12rem
  .item-wrapper
    margin-top: .05rem
    width: 100%
    display: flex
    flex-wrap: wrap
    justify-content: space-between
    background: rgb(231, 230, 252)
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
