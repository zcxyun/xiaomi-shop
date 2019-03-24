let defaultCity = ''
try {
  defaultCity = localStorage.city || '许昌'
} catch (error) { }

export default {
  city: defaultCity,
  selectedNavi: '首页'
}
