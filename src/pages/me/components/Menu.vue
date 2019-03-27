<template>
  <div class="menu">
    <ul>
      <li class="menu-item" v-for="item of menus" :key="item.id">
        <div class="img-wrapper">
          <img :src="item.img" alt="" class="menu-item-img">
        </div>
        <div class="menu-item-text" ref='menuText'>{{item.text}}</div>
        <i class="iconfont icon-youjiantou" ref='backIcon'></i>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'Menu',
  props: {
    menus: Array
  }
}
</script>
<style lang='stylus' scoped>
.menu
  background: #fff
  .menu-item
    display: flex
    align-items: center
    height: 1.1rem
    .img-wrapper
      width: 1.2rem
      text-align: center
      .menu-item-img
        width: .5rem
    .menu-item-text
      line-height: 1.1rem
      font-size: .3rem
      flex: 1
      border-bottom: .01rem solid #ddd
    .icon-youjiantou
      line-height: 1.1rem
      font-size: .5rem
      color: #999
      padding-right: .15rem
      border-bottom: .01rem solid #ddd
    &:last-child
      .menu-item-text
        border: 0
      .icon-youjiantou
        border: 0
</style>
