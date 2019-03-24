export default {
  changeCity (state, city) {
    state.city = city
    try {
      localStorage.city = city
    } catch (error) { }
  },
  changeSelectedNavi (state, newNavi) {
    state.selectedNavi = newNavi
  }
}
