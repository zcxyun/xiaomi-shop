<template>
  <div>
    <transition name="fade">
      <shade-mask @click.native="onClose" v-if="showShadeMask"></shade-mask>
    </transition>
    <transition name="slideUp">
      <div class="params-detail" v-if="show">
        <div class="title-box">
          <span class="title">关键参数</span>
          <i class="iconfont icon-chahao" @click="onClose"></i>
        </div>
        <div class="content-box">
          <cube-scroll :data='params'>
            <div class="item" v-for="item of params" :key="item.key">
              <span class="key">{{item.key}}</span>
              <span class="value">{{item.value}}</span>
            </div>
          </cube-scroll>
        </div>
        <div class="button-box">
          <div class="button" @click="onClose">完成</div>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
import ShadeMask from 'common/ShadeMask'

export default {
  name: 'ParamsDetail',
  props: {
    show: {
      type: Boolean,
      default: false
    },
    showShadeMask: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      params: [{
        key: 'CPU',
        value: '骁龙660八核'
      }, {
        key: 'CPU主频',
        value: '最高2.2GHz'
      }, {
        key: '后置摄像头',
        value: '4800万+500万像素'
      }, {
        key: '前置摄像头',
        value: '1300万像素'
      }, {
        key: '屏幕',
        value: '水滴全面屏'
      }, {
        key: '屏幕尺寸',
        value: '6.3英寸'
      }, {
        key: '屏幕分辨率',
        value: '2340×1080'
      }, {
        key: '运行内存',
        value: '4GB'
      }, {
        key: '存储容量',
        value: '64GB'
      }, {
        key: '红外摇控',
        value: '支持'
      }, {
        key: '指纹识别',
        value: '后置指纹'
      }, {
        key: '机身厚度',
        value: '8.1mm'
      }, {
        key: '电池容量',
        value: '4000mAh'
      }, {
        key: '电池充电',
        value: '有线快充'
      }, {
        key: '网络类型',
        value: '4G全网通'
      }, {
        key: '网络模式',
        value: '双卡双待'
      }]
    }
  },
  components: {
    ShadeMask
  },
  methods: {
    onClose () {
      this.$emit('onClose')
    }
  },
  mounted () {
  },
  activated () {
  }
}
</script>
<style lang='stylus' scoped>
.fade-enter, .fade-leave-to
  opacity: 0
.fade-enter-active, .fade-leave-active
  transition: opacity .5s

.slideUp-enter, .slideUp-leave-to
  transform: translateY(10rem)
.slideUp-enter-active, .slideUp-leave-active
  transition: transform .5s

.params-detail
  z-index: 20
  background: #fff
  position: fixed
  top: 3rem
  left: 0
  right: 0
  bottom: 0
  border-top-left-radius: .2rem
  border-top-right-radius: .2rem
  .title-box
    height: 1rem
    margin: 0 .3rem
    position: relative
    text-align: center
    border-bottom: .01rem solid #ddd
    .title
      line-height: 1rem
      font-size: .33rem
      font-weight: 500
    .icon-chahao
      position: absolute
      right: 0
      top: .26rem
      font-size: .45rem
      color: #999
  .content-box
    height: 8.4rem
    padding: 0 .3rem
    .item
      line-height: .8rem
      font-size: .3rem
      position: relative
      .key
        color: #999
      .value
        position: absolute
        color: #000
        left: 2.5rem
  .button-box
    position: fixed
    bottom: 0
    left: 0
    right: 0
    height: 1rem
    background: #fff
    .button
      margin: .15rem auto
      background: #ff6700
      border-radius: 1rem
      text-align: center
      line-height: .7rem
      width: 7rem
      color: #fff
      font-size: .3rem
</style>
