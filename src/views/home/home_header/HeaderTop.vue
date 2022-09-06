<template>
  <div class="hdtop">
    <div class="nav-cont">
      <ul>
        <li>
          <a class="title" href="#"><span>全部分类</span></a>
        </li>
        <li>
          <a href="#" @click="goHome">首页<span>|</span></a>
        </li>
        <li>
          <a href="#" @click="goShop">闪购<span>|</span></a>
        </li>
        <li>
          <a href="#">生鲜<span>|</span></a>
        </li>
        <li>
          <a href="#">团购<span>|</span></a>
        </li>
        <li>
          <a href="#">全球购</a>
        </li>
      </ul>
      <div class="nav-extra">
        <div class="ni"><span class="iconfont icon-fulijinfafang"></span></div>
        <span>我的福利 ></span>
      </div>
    </div>
    <div class="headerbm"></div>
  </div>
</template>

<script>
export default {
  name: "HeaderTop",
  methods: {
    goHome(){
      this.$router.push('/')
    },
    goShop() {
      this.$router.push('/shopinfo')
    }
  }
}
</script>

<style scoped>
</style>