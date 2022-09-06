<template>
  <div class="activity">
    <div class="title">
      <span>活动</span>
      <span>每期活动 优惠享不停</span>
      <span>全部活动 ></span>
    </div>
    <div class="ac_img">
      <ul>
        <li v-for="item in tip">
          <span class="sanj"></span>
          <span>{{item.ac_title}}</span>
          <img :src="item.img" alt="">
          <span class="cjsl" @click="toShopInfo">春节送礼优选</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "ShopActivity",
  data() {
    return {
      tip: [
        {
          ac_title: '秒杀',
          img: require('@/assets/images/activity.jpg')
        },
        {
          ac_title: '特惠',
          img: require('@/assets/images/activity1.jpg')
        },
        {
          ac_title: '团购',
          img: require('@/assets/images/activity2.jpg')
        },
        {
          ac_title: '超值',
          img: require('@/assets/images/activity3.jpg')
        }
      ]
    }
  },
  methods:{
    toShopInfo(){
      this.$router.push('/shopinfo')
    }
  }
}
</script>

<style scoped>
@import '~@/assets/css/home/shopactivity.css';
</style>