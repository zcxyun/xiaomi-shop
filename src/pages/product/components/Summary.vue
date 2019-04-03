<template>
  <div class="product-summary">
    <div class="title">{{title}}</div>
    <div class="description">
      <span class="red-font">{{redDescription}}</span>
      <span>{{description}}</span>
    </div>
    <div class="price">{{price}}</div>
  </div>
</template>
<script>
export default {
  name: 'ProductSummary',
  data () {
    return {
      title: 'Redmi Note 7',
      redDescription: '「销量超百万台，现货热卖中! 可选+10元得18W快充」',
      description: '4800万拍照千元机 / 品质“小金刚”，18个月超长质保 / “满血版”骁龙660处理器 / 4000mAh 大电量 / 6.3" 水滴全面屏 / USB-C 接口，方便耐用 / 支持快充 4 协议',
      price: 1199
    }
  }
}
</script>
<style lang='stylus' scoped>
.product-summary
  padding: .3rem
  .title
    font-size: .42rem
    font-weight: 500
    line-height: .7rem
  .description
    font-size: .25rem
    color: #777
    line-height: .37rem
    .red-font
      color: rgb(255, 74, 0)
  .price
    margin-top: .25rem
    font-size: .5rem
    color: #ff6700
    padding-left: .25rem
    position: relative
    &:before
      content: '¥'
      position: absolute
      left: 0
      font-size: .42rem
</style>
