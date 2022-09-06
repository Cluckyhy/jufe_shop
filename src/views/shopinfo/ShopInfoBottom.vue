<template>
  <div class="shopinfobm">
    <div class="bm_lf clearfix">
      <h3>看了又看</h3>
      <ul>
        <li v-for="item in lf_msg">
          <img :src="item.lf_img" alt="">
          <p>{{ item.lf_name }}</p>
          <p>{{ item.lf_tz }}</p>
          <p>{{ item.lf_price }}</p>
        </li>
      </ul>
    </div>
    <div class="bm_rt clearfix">
      <ul>
        <li v-for="(item,index) in rt_msg" :class="{isActive: flag === index}" @click="toCpt(index)">{{ item }}</li>
      </ul>
      <div class="bm_info">
        <component :is="currentCpt"></component>
      </div>
    </div>
  </div>
</template>

<script>

import ShopDtail from "@/views/shopinfo/ShopDtail";
import ShopEvaluate from "@/views/shopinfo/ShopEvaluate";
import ShopLike from "@/views/shopinfo/ShopLike";

export default {
  name: "ShopInfoBottom",
  data() {
    return {
      lf_msg: [
        {
          lf_img: require('@/assets/images/shopcartImg.jpg'),
          lf_name: '华为 荣耀 畅玩4X 白色 移动4G',
          lf_tz: '手机 双卡双待',
          lf_price: '￥399.00'
        },
        {
          lf_img: require('@/assets/images/shopcartImg.jpg'),
          lf_name: '华为 荣耀 畅玩4X 白色 移动4G',
          lf_tz: '手机 双卡双待',
          lf_price: '￥399.00'
        },
        {
          lf_img: require('@/assets/images/shopcartImg.jpg'),
          lf_name: '华为 荣耀 畅玩4X 白色 移动4G',
          lf_tz: '手机 双卡双待',
          lf_price: '￥399.00'
        }
      ],
      rt_msg: ['宝贝详情', '全部评价', '猜你喜欢'],
      flag: 0,
      components: {
        ShopDtail,
        ShopEvaluate,
        ShopLike
      },
      currentCpt: ShopDtail,
      cptname: [ShopDtail, ShopEvaluate, ShopLike]
    }
  },
  methods: {
    toCpt(index) {
      this.currentCpt = this.cptname[index]
      this.flag = index
    }
  }
}
</script>

<style scoped>
@import "~@/assets/css/shopinfo/shopinfobottom.css";
</style>