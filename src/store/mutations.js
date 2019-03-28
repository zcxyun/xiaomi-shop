export default {
  changeCity (state, city) {
    state.city = city
    try {
      localStorage.city = city
    } catch (error) { }
  },
  changeShowTitleBar (state, isShow) {
    state.showTitleBar = isShow
  },
  changeShowBottomNaviBar (state, isShow) {
    state.showBottomNaviBar = isShow
  },
  changeTitle (state, newTitle) {
    state.title = newTitle
  }
}
