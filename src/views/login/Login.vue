<template>
  <div class="login_banner">
    <div class="login_bg clearfix">
      <img :src="img" alt="">
    </div>
    <div class="login_box">
      <h3>登录</h3>
      <div class="login_form">
        <form action="#">
          <div class="username">
            <span class="iconfont icon-yonghu1"></span>
            <input type="text" placeholder="邮箱/手机/用户名" v-model="username">
          </div>
          <div class="userpass">
            <span class="iconfont icon-tianchongxing-"></span>
            <input type="password" placeholder="请输入密码" v-model="password">
          </div>
        </form>
      </div>
      <div class="login_link">
        <label for="remeber-me">
          <input id="remeber-me" type="checkbox">记住密码
          <a href="#" @click="toRegister">注册</a>
        </label>
      </div>
      <div class="dl" @click="login">
        <span>登录</span>
      </div>
      <div class="partner">
        <h3>合作账号</h3>
        <div class="lg_grop">
          <ul>
            <li v-for="item in lg_sc">
              <span :class="item.icon"></span>
              <span>{{ item.lg_wd }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions, mapState} from 'vuex'

export default {
  name: "Login",
  data() {
    return {
      img: require('@/assets/images/big.png'),
      lg_sc: [
        {
          icon: 'iconfont icon-qq',
          lg_wd: 'QQ登录'
        },
        {
          icon: 'iconfont icon-weibo',
          lg_wd: '微博登录'
        },
        {
          icon: 'iconfont icon-weixin',
          lg_wd: '微信登录'
        }
      ],
      username: '',
      password: ''
    }
  },
  computed: {
    ...mapState(['accountList'])
  },
  methods: {
    ...mapActions(['LogInAction']),
    toRegister() {
      this.$router.push('/register')
    },
    login() {
      // let uname = sessionStorage.getItem('username')
      // let pwd = sessionStorage.getItem('password')


      if (!this.username) {
        alert("用户名不能为空！")
        this.username = ''
        return false
      }

      if (!this.password) {
        alert("密码不能为空！")
        this.password = ''
        return false
      }

      // if (uname === this.username && pwd === this.password) {
      //   alert("恭喜你！登录成功")
      //   const account = {
      //     flag: 1,
      //     username: this.username,
      //     password: this.password
      //   }
      //   this.$store.dispatch('LogInAction', account)
      //   this.$router.push('/')
      //   return false
      // }

      let isgo = false

      this.accountList.forEach((item) => {
        if (item.username === this.username && item.password === this.password) {
          alert("恭喜你！登录成功")
          this.$router.push('/')
          this.$store.dispatch('updateAccountAction', this.accountList.indexOf(item))
          // this.$router.push({
          //   name: 'home',
          //   params: {index: this.accountList.indexOf(item)}
          // })
          isgo = true
        }
      })

      if (isgo) {
        return false
      }

      alert("用户名或密码输入不正确，请重新输入！")
      this.username = ''
      this.password = ''
    }
  }
}
</script>

<style scoped>
@import "~@/assets/css/login/login.css";
</style>