<template>
  <div class="hleft clearfix">
    <ul>
      <li v-for="(item,index) in shopdata" :class="{active: flag === index}" @mousemove="showinfo(index)" @mouseout="noShow">
        <img :src="item.url" alt="">
        <span>{{ item.bigtype }}</span>
        <span> > </span>
      </li>
    </ul>
    <div class="showinfo" :style="{display:isShow}" @mousemove="show" @mouseout="noShow">
      <div v-for="item in shopdata[index].smalltype">
        <div class="gd_name">{{ item.name }}</div>
        <div>
          <span class="gds" v-for="goods in item.goods" :key="goods">{{ goods }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import shopdata from "@/assets/js/data";

export default {
  name: "HeaderLeft",
  data() {
    return {
      shopdata,
      isShow: "none",
      index: 0,
      flag: -1
    }
  },
  methods: {
    showinfo(index) {
      this.isShow = "block"
      this.index = index
      this.flag = index
    },
    show() {
      this.isShow = 'block'
      this.flag = this.index
    },
    noShow() {
      this.isShow = "none"
      this.flag = -1
    }
  }
}
</script>

<style scoped>
@import "~@/assets/css/home/headerleft.css";
</style>