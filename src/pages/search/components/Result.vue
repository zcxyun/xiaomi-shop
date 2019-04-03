<template>
  <div>
    <shade-mask @click.native='onShadeMask'></shade-mask>
    <div class="search-result">
      <div class="item" v-for="item of list" :key="item.label">
        <span class="label">{{item.label}}</span>
        <simple-tags :tags='item.tags'></simple-tags>
      </div>
    </div>
  </div>
</template>
<script>
import SimpleTags from 'common/tags/SimpleTags'
import ShadeMask from 'common/ShadeMask'

export default {
  name: 'SearchResult',
  components: {
    SimpleTags,
    ShadeMask
  },
  data () {
    return {
      list: [{
        label: '手机',
        tags: ['手机', '耳机', '安防监控']
      }, {
        label: '手机配件',
        tags: ['汽车用品', '配件']
      }, {
        label: '手机数据线',
        tags: []
      }, {
        label: '手机膜',
        tags: ['手机贴膜', '配件']
      }, {
        label: '手机套',
        tags: ['手机保护壳', '配件']
      }, {
        label: '手机上门服务',
        tags: []
      }]
    }
  },
  methods: {
    onShadeMask () {
      this.$emit('onShadeMask')
    }
  }
}
</script>
<style lang='stylus' scoped>
.search-result
  z-index: 20
  position: absolute
  top: .85rem
  left: 0
  right: 0
  padding: 0 .3rem
  background: #fff
  .item
    font-size: .3rem
    display: flex
    justify-content: space-between
    align-items: center
    height: 1rem
    border-bottom: .01rem solid #ddd
</style>
