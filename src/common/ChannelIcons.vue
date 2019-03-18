<template>
  <div class="channel-icons">
    <div class="icon"
      v-for="item of channelIcons"
      :key="item.id"
      @click="onClick(item.channelId)"
    >
      <img :src="item.img" class="icon-img">
    </div>
  </div>
</template>
<script>
export default {
  name: 'ChannelIcons',
  props: {
    channelIcons: Array
  },
  methods: {
    onClick (channelId) {
      this.$emit('onChannelIcon', channelId)
    }
  }
}
</script>
<style lang='stylus' scoped>
.channel-icons
  overflow: hidden
  height: 0
  width: 100%
  padding-bottom: 20%
  display: flex
  margin-bottom: .2rem
  .icon
    width: 20%
    .icon-img
      width: 100%
</style>
