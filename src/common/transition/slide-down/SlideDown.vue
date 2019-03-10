<template>
  <transition
    enter-active-class="animated fadeInDown"
  >
    <slot></slot>
  </transition>
</template>
<script>
export default {
  name: 'SlideDown'
}
</script>
<style lang='stylus' scoped>
</style>
