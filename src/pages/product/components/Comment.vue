<template>
  <div class="product-comment">
    <cube-scroll
      ref="scroll"
      direction='horizontal'
    >
      <div class="comment-box border" v-for="(item, index) of [1,2,3,4]" :key="index">
        <div class="comment-userinfo">
            <img
              src="//cdn.cnbj0.fds.api.mi-img.com/b2c-data-mishop/bf7bf3632b26775c59759d863d617f49.webp"
              class="avatar">
            <div class="name-time">
              <div class="name">赵晨曦</div>
              <div class="time">2018-12-12</div>
            </div>
            <div class="like">
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAApCAYAAABDV7v1AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NEQ0NUY5NzNGRTVCMTFFN0ExRUNCNDEyMEVGQjUzQjYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NEQ0NUY5NzRGRTVCMTFFN0ExRUNCNDEyMEVGQjUzQjYiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo0RDQ1Rjk3MUZFNUIxMUU3QTFFQ0I0MTIwRUZCNTNCNiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo0RDQ1Rjk3MkZFNUIxMUU3QTFFQ0I0MTIwRUZCNTNCNiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PsLgqlwAAAKCSURBVHja1JjbS1RBHMfPbltQQTcD7UKWpCjeipWiRJOih66iIj7YX9CbCAo+GPRob0HBQmqPUQ89STcoVsouVkQQGASaIIjIpoRKF3b9DsyJr8Mc19bZc2Z/8IH5zRnOfM/Mb34zZ0KxWMwxaNtAF2gBRWARfAb3wF2wlOmLIwZF7gKvQQnVbQL1EvEBbeBdJi8PGxTaq4hU7SB4DmqCFnqFyh9BNTgNHlL9VjCQSb+mhO4DeeR3yNh8AZqlONcqwYmghFZReRYMK8+vK340KKHHqDyqef5dWfF7ghLalEaoyC6b19OvCaFH5cJx7a2mTZniJ4IQeo3KIsG/0rS5oAkFX4WeB5fJfwDmNe3aFP+Tn0L3g34Qkn4S3NC0Ow6OkD8DvvolNB88AgVUNwi+aNr2KL7YAFJ+CK2TC6aC6iZBp6ZtLbik1N3J5ha6HTSCJyAOCunZD3DRIzavUmhw+kqtgSQtziqR356Cs/Siv+An+Rvk8U1n43JBjXk8n1/HGgjJ3HsS3BIjekaTnHcSOpG/wU2ZP8dW6awPfDOQAqOR/4xT0el9cBtMraH9BCjOQFiBPNCUuiEa0Qw32w4Zg64VO/7YNBgioYl0oznnBGf5fL4NO/ZaLZWHbRV6ABzKBaGnqLwA3tsqtJ7KL0Vut1VoA0+76b9QU7YXHM4FoRyfS+6Fhe1C38jt2kqhvJDi2bgpMbUbleWCUJ72X/xHG7Z42kf50sLmEY1n46bEhO0G5Wr+tFFoHZ2H/6gXGTYJPUflD/IwYp1Qcaxr94pPG4RulFP+GGzxik/3j5Mt3Q1Gygfxs14jmrQsRXWr8ekKfWaBOCFsBLQ6K+/7/9myAAMA/8t6rPtyX9AAAAAASUVORK5CYII="
                class="like-img">
              <span class="like-count">1282</span>
            </div>
        </div>
        <div class="comment-content">
          这是我第二个小米手机了，红米note7质量很不错，外观漂亮，拍照很满意
        </div>
        <div class="photos-box">
          <img :src="item" class="photo" v-for="(item, index) of photos" :key="index">
        </div>
        <div class="comment-answer">
          <span class="answer-man">官方回复:</span>
          <span class="answer-content">多年以后 ，你还是我心中的海。 一片蔚蓝 ，有阳光沙滩 ，有大鱼拍岸 ...</span>
        </div>
      </div>
    </cube-scroll>
    <div class='more-content'>更多评论<i class='iconfont icon-youjiantou'></i></div>
  </div>
</template>
<script>
export default {
  name: 'ProductComment',
  data () {
    return {
      photos: [
        '//cdn.cnbj0.fds.api.mi-img.com/b2c-data-mishop/b35d33d20fa05e5bc9222258deef9db0.webp',
        '//cdn.cnbj0.fds.api.mi-img.com/b2c-data-mishop/5fa841f592b57b9721f11c0e872bf7b8.webp',
        '//cdn.cnbj0.fds.api.mi-img.com/b2c-data-mishop/d8906a7a8adabee037bda3d55257d750.webp'
      ]
    }
  }
}
</script>
<style lang='stylus' scoped>
.product-comment >>> .cube-scroll-content
  display: inline-block
  white-space: nowrap
.product-comment
  padding-right: .35rem
  .comment-box
    width: 5.6rem
    padding: .3rem .3rem .6rem
    background: #f5f5f5
    border-radius: .2rem
    margin-left: .35rem
    display: inline-block
    .comment-userinfo
      display: flex
      align-items: center
      .avatar
        border-radius: 50%
        width: .7rem
        margin-right: .2rem
      .name-time
        flex: 1
        .name
          font-size: .15rem
          color: #111
        .time
          font-size: .1rem
          margin-top: .1rem
          color: #666
      .like
        width: 1rem
        .like-img
          width: .3rem
        .like-count
          font-size: .1rem
          color: #666
    .comment-content
      white-space: normal
      font-size: .1rem
      line-height: .35rem
      margin: .15rem 0
      color: #000
    .photos-box
      display: flex
      justify-content: space-between
      align-items: center
      height: 1.3rem
      .photo
        width: 1.7rem
    .comment-answer
      white-space: normal
      font-size: .1rem
      line-height: .35rem
      .answer-man
        color: #ff6700
        margin-right: .1rem
      .answer-content
        color: #333
  .more-content
    margin-top: .3rem
    text-align: center
    font-size: .35rem
    color: #4e72a5
    .icon-youjiantou
      font-size: .35rem
</style>
