<template>
  <div class="search">
    <search-header @onSearchTextChange='onSearchTextChange'></search-header>
    <search-hot :hotImg='hotImg' :tags='hotTags' v-show="!showResult"></search-hot>
    <search-category :tags='cateTags' v-show="!showResult"></search-category>
    <search-result v-show="showResult"></search-result>
    <shade-mask v-show="showResult" @click.native='onShadeMask'></shade-mask>
  </div>
</template>
<script>
import {mapMutations} from 'vuex'
import SearchHeader from './components/Header'
import SearchHot from './components/Hot'
import SearchCategory from './components/Category'
import SearchResult from './components/Result'
import ShadeMask from 'common/ShadeMask'

import HTTP from '@/utils/http.js'

const http = new HTTP()
export default {
  name: 'Search',
  components: {
    SearchHeader,
    SearchHot,
    SearchCategory,
    SearchResult,
    ShadeMask
  },
  data () {
    return {
      hotImg: '',
      hotTags: [],
      cateTags: [],
      showResult: false
    }
  },
  methods: {
    ...mapMutations(['changeShowTitleBar', 'changeShowBottomNaviBar']),
    hideHeaderFooter () {
      this.changeShowTitleBar(false)
      this.changeShowBottomNaviBar(false)
    },
    getSearchInfo () {
      http.request({
        url: '/api/search.json'
      }).then(this.handleGetSearchInfoSucc)
    },
    handleGetSearchInfoSucc (res) {
      this.hotImg = res.hotImg
      this.hotTags = res.hotTags
      this.cateTags = res.cateTags
    },
    onSearchTextChange (newVal) {
      this.showResult = newVal
    },
    onShadeMask () {
      this.showResult = false
    }
  },
  mounted () {
    this.hideHeaderFooter()
    this.getSearchInfo()
  },
  activated () {
    this.hideHeaderFooter()
    this.getSearchInfo()
  }
}
</script>
<style lang='stylus' scoped>
</style>
