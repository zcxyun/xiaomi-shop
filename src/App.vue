<template>
  <div id="app">
    <title-bar :title="title" v-show="showTitleBar"></title-bar>
    <keep-alive>
      <router-view/>
    </keep-alive>
    <bottom-navi-bar v-show="showBottomNaviBar"></bottom-navi-bar>
  </div>
</template>

<script>
import TitleBar from 'common/navibar/TitleBar'
import BottomNaviBar from 'common/navibar/BottomNaviBar'
import {mapState} from 'vuex'

export default {
  name: 'App',
  components: {
    TitleBar,
    BottomNaviBar
  },
  computed: {
    ...mapState(['title', 'showTitleBar', 'showBottomNaviBar'])
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  box-sizing: border-box;
  touch-action: none;
}
</style>
