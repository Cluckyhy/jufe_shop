<template>
  <div class="imgShow clearfix">
    <transition-group name="fade" tag="div">
      <span v-for="(v,i) in imgs" :key="v" v-if="i === index">
      <img :src="v" alt="">
    </span>
    </transition-group>
    <ul>
      <li v-for="num in imgs.length">
        <a href="#" :style="{background:num-1 === index?'orange':'#cccccc'}" @click="handle(num-1)">{{ num }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HeaderCenter",
  data() {
    return {
      imgs: [require("@/assets/images/ad1.png"), require("@/assets/images/ad2.png"), require("@/assets/images/ad3.png"), require("@/assets/images/ad4.png")],
      index: 0,
      flag: true,
      timer: ''
    }
  },
  methods: {
    next() {
      this.index = ++this.index % this.imgs.length
    },
    handle(num) {
      //单击按钮切换到对应的图片
      if (this.flag) {
        this.flag = false
        setTimeout(() => {
          this.flag = true
        }, 1000)
      }
      this.index = num    //切换为选中图片的下标
      clearInterval(this.timer)   //取消定时器(不取消定时器，因为定时器一直开着，导致有可能刚点击突然就跳到下一张图片去了)
      this.timer = setTimeout(this.next, 2000)  //重新开启定时器，3秒后图片轮转
    }
  },
  mounted() {
    this.timer = setInterval(this.next, 2000)
  }
}
</script>

<style scoped>
@import "~@/assets/css/home/herdercenter.css";
</style>