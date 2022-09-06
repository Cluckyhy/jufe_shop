<template>
  <div class="register_banner">
    <div class="register_bg clearfix">
      <img :src="img" alt="">
    </div>
    <div class="register_box">
      <h3>注册</h3>
      <div class="register_form">
        <form action="#">
          <div v-for="(item,index) in reg_msg">
            <span :class="item.icon"></span>
            <input
                :type="(index === 1 || index ===2)?'password':'text'"
                :placeholder="item.tip"
                v-model="rginfo[index]">
          </div>
        </form>
      </div>
      <div class="register_link">
        <label for="remeber-me">
          <input id="remeber-me" type="checkbox" v-model="isSelect">点击表示您同意商城《服务协议》
          <a href="#" @click="toLogin">登录</a>
        </label>
      </div>
      <div class="zc" @click="register">
        <span>注册</span>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState, mapActions} from 'vuex'

export default {
  name: "Register",
  data() {
    return {
      isSelect: false,
      img: require('@/assets/images/big.png'),
      reg_msg: [
        {
          icon: 'iconfont icon-xinfeng',
          tip: '请输入邮箱号'
        },
        {
          icon: 'iconfont icon-tianchongxing-',
          tip: '设置密码'
        },
        {
          icon: 'iconfont icon-tianchongxing-',
          tip: '确认密码'
        },
        {
          icon: 'iconfont icon-shoujihao',
          tip: '请输入手机号'
        }
      ],
      rginfo: ['', '', '', '']
    }
  },
  computed: {
    ...mapState(['accountList'])
  },
  methods: {
    ...mapActions(["LogInAction"]),
    toLogin() {
      this.$router.push('/login')
    },
    register() {
      let username = this.rginfo[0]
      let password = this.rginfo[1]
      let qrpassword = this.rginfo[2]
      let phone = this.rginfo[3]

      let user_reg = /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9][-a-zA-Z0-9]{0,62}(?:\.[a-zA-Z0-9][-a-zA-Z0-9]{0,62})+$/
      let password_reg = /^[\w]{6,16}$/

      if (!username) {
        alert("用户名不能为空！")
        this.rginfo = ['', '', '', '']
        this.isSelect = false
        return false
      }

      if (!user_reg.test(username)) {
        alert('您输入的邮箱不规范')
        this.rginfo = ['', '', '', '']
        this.isSelect = false
        return false
      }

      if (!password) {
        alert("密码不能为空！")
        this.rginfo = ['', '', '', '']
        this.isSelect = false
        return false
      }

      if (!(password_reg.test(password))) {
        alert('密码必须是：6~16位，包含大小写字母和数字的组合')
        this.rginfo = ['', '', '', '']
        this.isSelect = false
        return false
      }

      if (!qrpassword) {
        alert("确认密码不能为空！")
        this.rginfo = ['', '', '', '']
        this.isSelect = false
        return false
      }
      if (!phone) {
        alert("手机号不能为空！")
        this.rginfo = ['', '', '', '']
        this.isSelect = false
        return false
      }

      if (password !== qrpassword) {
        alert("密码和确认密码不一致，请重新输入!")
        this.rginfo = ['', '', '', '']
        this.isSelect = false
        return false
      }

      if (!this.isSelect) {
        alert("请勾选服务协议才可注册！")
        return false
      }

      alert("恭喜你，注册成功！")
      const account = {
        isLogin: true,
        username,
        password,
        goodsList: []
      }
      this.accountList.push(account)
      this.$store.dispatch('LogInAction', this.accountList)
      this.$router.push('/login')
    }
  }
}
</script>

<style scoped>
@import "~@/assets/css/register/register.css";
</style>