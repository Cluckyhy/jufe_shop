<template>
  <div class="tabs_like">
    <div class="like_info">
      <ul>
        <li v-for="(item,index) in phoninfos" :class="{splk_show:(index>=gt&&index<lt)}">
          <img :src="item.img" alt="">
          <span v-for="cell in item.phontip">{{ cell }}</span>
          <p>{{ item.price }}</p>
        </li>
      </ul>
    </div>
    <div class="fenye clearfix">
      <ul>
        <li @click="goPre"> <<</li>
        <li v-for="(num,index) in sumye" @click="showActive(index)" :class="{likeActive:flag===index}">{{ num }}</li>
        <li @click="goBack"> >></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "ShopLike",
  data() {
    return {
      phoninfos: [
        {
          img: require('@/assets/images/honor2.jpg'),
          phontip: ['华为', '荣耀', '畅玩4X', '白色', '移动4G手机', '双卡双待'],
          price: '￥498.11'
        },
        {
          img: require('@/assets/images/honor2.jpg'),
          phontip: ['华为', '荣耀', '畅玩4X', '白色', '移动4G手机', '双卡双待'],
          price: '￥498.11'
        },
        {
          img: require('@/assets/images/honor2.jpg'),
          phontip: ['华为', '荣耀', '畅玩4X', '白色', '移动4G手机', '双卡双待'],
          price: '￥498.11'
        },
        {
          img: require('@/assets/images/honor.jpg'),
          phontip: ['华为', '荣耀', '畅玩4X', '白色', '移动4G手机', '双卡双待'],
          price: '￥498.22'
        },
        {
          img: require('@/assets/images/honor.jpg'),
          phontip: ['华为', '荣耀', '畅玩4X', '白色', '移动4G手机', '双卡双待'],
          price: '￥498.22'
        },
        {
          img: require('@/assets/images/honor.jpg'),
          phontip: ['华为', '荣耀', '畅玩4X', '白色', '移动4G手机', '双卡双待'],
          price: '￥498.22'
        },
        {
          img: require('@/assets/images/oppo.jpg'),
          phontip: ['华为', '荣耀', '畅玩4X', '白色', '移动4G手机', '双卡双待'],
          price: '￥498.33'
        },
        {
          img: require('@/assets/images/oppo.jpg'),
          phontip: ['华为', '荣耀', '畅玩4X', '白色', '移动4G手机', '双卡双待'],
          price: '￥498.33'
        },
        {
          img: require('@/assets/images/oppo.jpg'),
          phontip: ['华为', '荣耀', '畅玩4X', '白色', '移动4G手机', '双卡双待'],
          price: '￥498.33'
        },
        {
          img: require('@/assets/images/honor2.jpg'),
          phontip: ['华为', '荣耀', '畅玩4X', '白色', '移动4G手机', '双卡双待'],
          price: '￥498.44'
        }
      ],
      sumye: 4,
      flag: 0
    }
  },
  computed: {
    gt() {
      return ((this.flag + 1) - 1) * 3
    },
    lt() {
      return this.gt + 3
    }
  },
  methods: {
    showActive(index) {
      this.flag = index
    },
    goPre() {
      if (this.flag > 0) {
        this.flag--
      }
    },
    goBack() {
      if (this.flag < this.sumye - 1) {
        this.flag++
      }
    }
  }
}
</script>

<style scoped>
@import "~@/assets/css/shopinfo/shoplike.css";
</style>