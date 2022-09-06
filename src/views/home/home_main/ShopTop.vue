<template>
  <div class="shoptop">
    <ul>
      <li v-for="(item,index) in topinfo">
        <div class="msg clearfix">
          <p class="title"><span>{{ item.msg_title }}</span></p>
          <p class="info"><span>{{ item.msg_info }}</span></p>
        </div>
        <div class="img clearfix">
          <img :src="item.pc" alt="" @click="toShopInfo(index)">
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "ShopTop",
  data() {
    return {
      topinfo: [
        {
          msg_title: "今日",
          msg_info: "推荐",
          pc: require('@/assets/images/2016.png')
        },
        {
          msg_title: "真的有鱼",
          msg_info: "开年福利篇",
          pc: require('@/assets/images/tj.png')
        },
        {
          msg_title: "囤货过冬",
          msg_info: "让爱早回家",
          pc: require('@/assets/images/tj1.png')
        },
        {
          msg_title: "浪漫情人节",
          msg_info: "甜甜蜜蜜",
          pc: require('@/assets/images/tj2.png')
        }
      ]
    }
  },
  methods: {
    toShopInfo(index) {
      this.$router.push({name: 'shopinfo', params: {idx: index}})
    }
  }
}
</script>

<style scoped>
@import "~@/assets/css/home/shoptop.css";
</style>