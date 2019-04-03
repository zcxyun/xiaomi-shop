let defaultCity = ''
try {
  defaultCity = localStorage.city || '许昌'
} catch (error) { }

export default {
  city: defaultCity,
  title: '',
  showTitleBar: false,
  showBottomNaviBar: true,
  selectedBottomNav: '首页'
}
