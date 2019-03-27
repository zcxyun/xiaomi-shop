<template>
  <div class="login-register">
      <img :src="loginBg" class="login-bg">
      <div class="avatar">
        <img :src="avatarImg" class="avatar-img">
        <span class="login-text">登录/注册</span>
      </div>
    </div>
</template>
<script>
export default {
  name: 'MeLoginRegister',
  props: {
    loginBg: String,
    avatarImg: String
  }
}
</script>
<style lang='stylus' scoped>
.login-register
  .login-bg
    width: 100%
    background: #f37d0f
    height: 1.65rem
    position: relative
  .avatar
    position: absolute
    width: 3rem
    top: .32rem
    left: .33rem
    .avatar-img
      width: .9rem
      border-radius: 50%
      border: 3px solid hsla(0,0%,100%,.4)
    .login-text
      vertical-align: middle
      padding-left: .1rem
      font-size: .25rem
      color: #fff
</style>
