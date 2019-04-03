<template>
  <div class="product-params">
    <cube-scroll
      ref="scroll"
      :data="params"
      direction="horizontal"
    >
      <div class="params-box">
        <div class="param" v-for="item of params" :key="item.name">
          <img :src="item.icon" class="param-icon">
          <div class="param-name">{{item.name}}</div>
          <div class="param-desc">{{item.desc}}</div>
        </div>
      </div>
    </cube-scroll>
  </div>
</template>
<script>
export default {
  name: 'ProductParams',
  data () {
    return {
      params: [{
        icon: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/f0c04e138bfed2b1ebb589de615236d1.png',
        name: 'CPU',
        desc: '骁龙660八核'
      }, {
        icon: 'https://i8.mifile.cn/b2c-mimall-media/7692726e7a1dd34a3b1b4ede8aca020d.png',
        name: '双摄像头',
        desc: '4800万+500万像素'
      }, {
        icon: 'https://i8.mifile.cn/b2c-mimall-media/86a3bd46cf4f7f19daa2c3250cf30604.png',
        name: '超大屏',
        desc: '6.3英寸'
      }, {
        icon: 'https://i8.mifile.cn/b2c-mimall-media/a5ab24dcb527e49f970f13b11e000ab1.png',
        name: '屏幕分辨率',
        desc: '2340×1080'
      }, {
        icon: 'https://i8.mifile.cn/b2c-mimall-media/c8ec0829241324e401744da627482560.png',
        name: '高速',
        desc: '4GB'
      }, {
        icon: 'https://i8.mifile.cn/b2c-mimall-media/8941adac25333e785b9cc78ca11f4f27.png',
        name: '存储容量',
        desc: '64GB'
      }, {
        icon: 'https://i8.mifile.cn/b2c-mimall-media/52ad10a73685342e437e44ea3d29cbff.png',
        name: '普通厚度',
        desc: '8.1mm'
      }, {
        icon: 'https://i8.mifile.cn/b2c-mimall-media/0b4ea0fb21dde2f29df3c20de73539b9.png',
        name: '超长待机',
        desc: '4000mAh'
      }, {
        icon: 'https://i8.mifile.cn/b2c-mimall-media/d1b67a407fb2a1ed42c2c0ce15af3318.png',
        name: '运营商网络',
        desc: '4G全网通'
      }, {
        icon: 'https://i8.mifile.cn/b2c-mimall-media/bfd5ba9ae72c365dee42db14dfae4b0f.png',
        name: '网络模式',
        desc: '双卡双待'
      }]
    }
  }
}
</script>
<style lang='stylus' scoped>
@import '~styles/mixins.styl'
.product-params >>> .cube-scroll-content
  display: inline-block
.product-params
  .params-box
    display: inline-block
    white-space: nowrap
  .param
    width: 1.65rem
    display: inline-block
    padding: 0 .05rem
    border-right: .01rem solid #ddd
    font-size: .1rem
    text-align: center
    .param-icon
      width: .4rem
    .param-name
      ellipsis()
      margin: .1rem auto
    .param-desc
      ellipsis()
</style>
