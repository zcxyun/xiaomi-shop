import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import Category from '@/pages/category/Category'
import Cart from '@/pages/cart/Cart'
import Me from '@/pages/me/Me'
import Test from '@/pages/test/Test'
import scrollNav from '@/pages/test/scrollNav'
import Search from '@/pages/search/Search'
import Product from '@/pages/product/Product'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'home',
    component: Home
  }, {
    path: '/category',
    name: 'category',
    component: Category
  }, {
    path: '/cart',
    name: 'cart',
    component: Cart
  }, {
    path: '/me',
    name: 'me',
    component: Me
  }, {
    path: '/search',
    name: 'search',
    component: Search
  }, {
    path: '/product/:id',
    name: 'product',
    component: Product
  }, {
    path: '/test',
    name: 'test',
    component: Test
  }, {
    path: '/scrollNav',
    name: 'scrollNav',
    component: scrollNav
  }],
  scrollBehavior (to, from, savedPosition) {
    return {
      x: 0,
      y: 0
    }
  }
})
