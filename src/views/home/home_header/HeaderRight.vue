<template>
  <div class="hright clearfix">
    <p class="title">商城头条</p>
    <div class="login">
      <div class="ltop">
        <div class="logo clearfix">
          <img :src="img" alt="">
        </div>
        <div class="msg clearfix">
          <p>Hi,小叮当</p>
          <p>点击更多优惠活动</p>
        </div>
      </div>
      <div class="lbtm">
        <button @click="toLogin">登录</button>
        <button @click="toRegister">注册</button>
      </div>
    </div>
    <div class="info">
      <ul>
        <li v-for="item in info">{{item}}</li>
      </ul>
    </div>
    <div class="img">
      <img src="@/assets/images/advTip.jpg" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderRight",
  data() {
    return {
      img: require('@/assets/images/getAvatar.do.jpg'),
      info: [
        "[特惠]商城爆品1分钟秒杀",
        "[公告]商城与长春市签署战略合同",
        "[特惠]洋河年末大促，低至两件",
        "[公告]华北、华中部分地区配送",
        "[特惠]家电狂欢千亿礼券 买1送"
      ]
    }
  },
  methods:{
    toLogin(){
      this.$router.push('/login')
    },
    toRegister(){
      this.$router.push('/register')
    }
  }
}
</script>

<style scoped>
@import "~@/assets/css/home/headerright.css";
</style>