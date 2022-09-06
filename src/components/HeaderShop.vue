<template>
  <div class="shop_top">
    <div class="box1">
      <ul class="message_left clearfix">
        <li v-show="!accountList[accountIndex].isLogin">亲，请先登录哟！</li>
        <li v-show="accountList[accountIndex].isLogin">{{ accountList[accountIndex].username }}，欢迎您</li>
        <li v-show="!accountList[accountIndex].isLogin" @click="logIn">登录</li>
        <li v-show="accountList[accountIndex].isLogin" @click="logOut">退出登录</li>
        <li @click="toRegister">免费注册</li>
      </ul>
      <ul class="message_right clearfix">
        <li @click="toHome">商城首页</li>
        <li><span class="iconfont icon-yonghu"></span>个人中心</li>
        <li @click="toShopCart"><span class="iconfont icon-gouwucheman"></span>购物车<span>{{ Len }}</span></li>
        <li><span class="iconfont icon-aixin"></span>收藏夹</li>
      </ul>
    </div>
    <div class="box2">
      <div class="search">
        <img src="../assets/images/logobig.png" alt="">
        <span>
          <input type="text" class="ipt1" placeholder="搜索">
          <div class="btn">搜索</div>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState, mapGetters} from 'vuex'
import HeaderTop from "@/views/home/home_header/HeaderTop";

export default {
  name: "HeaderShop",
  data() {
    return {}
  },
  components: {HeaderTop},
  computed: {
    ...mapState(['accountList', 'accountIndex']),
    ...mapGetters(['Len'])
  },
  methods: {
    toHome() {
      this.$router.push('/')
    },
    toShopCart() {
      if (this.accountList[this.accountIndex].isLogin) {
        this.$router.push('/shopcart')
      } else {
        alert('亲，请先登录哟！')
        this.$router.push('/login')
      }
    },
    toRegister() {
      this.$router.push('/register')
    },
    logIn() {
      this.$router.push('/login')
    },
    logOut() {
      if (confirm('确定要退出登录吗？')) {
        this.$store.dispatch('logOutAction', this.accountIndex)
        this.$store.dispatch('updateCartCountAction', 0)
        this.$router.push('/')
      } else {
        return false
      }
    }
  }
}
</script>

<style scoped>
@import "~@/assets/css/basic.css";
@import "~@/assets/css/home/headershop.css";
</style>