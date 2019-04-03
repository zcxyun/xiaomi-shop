<template>
  <div class="product-menu">
    <div class="change-product border">
      <div class="name">换机</div>
      <div class="desc">高价回收，极速到账换新机</div>
      <div class="icon">
        <i class="iconfont icon-youjiantou"></i>
      </div>
    </div>
    <div class="choose-version border">
      <div class="name">已选</div>
      <div class="desc">Redmi Note 7 4GB+64GB 梦幻蓝 x 1</div>
      <div class="icon">
        <i class="iconfont icon-youjiantou"></i>
      </div>
    </div>
    <div class="deliver border">
      <div class="name">送至</div>
      <div class="desc">北京市 东城区 <span class="stock">有现货</span></div>
      <div class="icon">
        <i class="iconfont icon-youjiantou"></i>
      </div>
    </div>
    <div class="tips-box border">
      <div class="tips">
        <div class="tip" v-for="(item, index) of tips" :key="index">
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAiCAYAAAA6RwvCAAAChklEQVR4Ab3YA6zkUBgF4Lu2bdu2bdu2bdu2Ea1t27ZtW7OnyZnkz9s2r+3emSRfJlf/PaNKfW6pnAgB5aAHbIAH4KFnsAv6QxWI5KS23YkpYDp8AI8DSyGnjiBRYR54hF0wCApCKogHcRg2L3SF9SaBkrgNUhLeiGKjuZmyKR70gc+iRn2nQeqLxdsgESiXIsJKUa+f3SAyRH9QmjQXdbsFFqSgmNwGlGYVrL4mOSkMfOWkvqB8pIEIk9gsyAoO7gDlY0u415GAQRJw4DdE9EOQUPCWe+aAfxIOBaVZGCgNwUAJTbjnfmA6dFAEzSGCwQXWLgdKEkfqeEajog9/G6dY+wokNBlfwPEWRmM4Gx01h9jPulchlMWcapyz3GgcZSOrpgDB4agIER6UhSScd9do/GQjvqYQp+2EoMic+0WJH2oMk4lZ4Q6MdhjifGAhKIj3pCiDxDGZWEiMdwVlRXwd1yEkKJteeIN8ZAGr64W6Ikwni4PTEREivMMrvt/eIIdZJBsoC+VFmM4BQpx3E4LicO1r+fftAMpBmMhwju0rTkNQEa7fLv/Lm2wsrC7CvObrJQgByoXRrNHDaERk46etHxnPERZ/Uafus05Gb8d6+WO0oQYs/s8QxbjnLXn2TcvOjxAElB/c4J6VZRDDFg4s90OIkdzrttkVWmzwUF0fhsgj9skjg1hdTxYDpVla+MH6YwK7nRgmwtTUGKIgfGfdWXZvsPqJMBPEccKt4aLeTKe3nB3E4gfQ2MU/qhpcFHWGub0JzwH7RaHnMA3KQVIIC4pCQ2IoAZPgjlh3GorqeCxRHnaKwtILeGoxdhJqa3s+IqSD9rAa7oh/gNdj2AZd5dncjr+ClBUwCf4HjgAAAABJRU5ErkJggg=="
           class="tip-icon">
          <span class="tip-content">{{item}}</span>
        </div>
      </div>
      <div class="icon">
        <i class="iconfont icon-youjiantou"></i>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ProductMenu',
  data () {
    return {
      tips: ['小米自营', '小米发货', '7天无理由退货']
    }
  }
}
</script>
<style lang='stylus' scoped>
.product-menu
  margin: .4rem .35rem .15rem
  .change-product, .choose-version, .deliver, .tips-box
    height: .75rem
    font-size: .2rem
    background: #f5f5f5
    border-radius: .2rem
    display: flex
    .name
      line-height: .75rem
      width: 1rem
      text-align: center
      color: #888
    .desc
      line-height: .75rem
      flex: 1
      color: #000
    .icon
      line-height: .75rem
      text-align: center
      width: .8rem
      color: #999
      .icon-youjiantou
        font-size: .5rem
    .stock
      color: #f56600
    .tips
      flex: 1
      display: flex
      height: 100%
      padding-left: .25rem
      .tip
        margin-right: .2rem
        .tip-icon
          line-height: .75rem
          width: .22rem
        .tip-content
          color: #666
          line-height: .75rem
  .change-product
    margin-bottom: .15rem
    .desc
      color: #f5660
</style>
