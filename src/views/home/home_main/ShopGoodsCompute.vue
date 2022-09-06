<template>
  <div class="goods">
    <div class="title">
      <div class="lf">
        <span v-for="item in lf_msg">{{ item }}</span>
      </div>
      <div class="rt">
        <ul>
          <li v-for="item in rt_msg">{{ item }}</li>
        </ul>
      </div>
    </div>
    <div class="goods_lf clearfix" :style="bgc">
      <ul>
        <li v-for="item in goods_msg">{{ item }}</li>
      </ul>
      <p>{{ lfinfo.p1 }}</p>
      <p>{{ lfinfo.p2 }}</p>
      <img :src="lfinfo.img" alt="">
      <div class="gl_bm" :style="bdc"></div>
    </div>

    <div class="goods_item clearfix">
      <div class="it_lf clearfix">
        <div v-for="item in topinfo.lf">
          <img :src="item.tpimg" alt="" @click="toShopInfo">
          <div class="ms_l">
            <p>{{ item.name }}</p>
            <p>{{ item.price }}</p>
            <div class="ms_r">
              <span class="iconfont icon-shopping-basket" @click="toShopCart"></span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="goods_item clearfix">
      <div class="it_rt">
        <div class="ms_l">
          <p>{{ topinfo.lf_r.name }}</p>
          <p>{{ topinfo.lf_r.price }}</p>
          <div class="ms_r">
            <span class="iconfont icon-shopping-basket" @click="toShopCart"></span>
          </div>
        </div>
        <div class="rtimg">
          <img :src="topinfo.lf_r.img" alt="" @click="toShopInfo">
        </div>
      </div>
    </div>

    <div class="goods_item clearfix">
      <div class="it_lf clearfix">
        <div v-for="item in topinfo.rt">
          <img :src="item.tpimg" alt="" @click="toShopInfo">
          <div class="ms_l">
            <p>{{ item.name }}</p>
            <p>{{ item.price }}</p>
            <div class="ms_r">
              <span class="iconfont icon-shopping-basket" @click="toShopCart"></span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="goods_item clearfix">
      <div class="it_rt">
        <div class="ms_l">
          <p>{{ topinfo.rt_r.name }}</p>
          <p>{{ topinfo.rt_r.price }}</p>
          <div class="ms_r">
            <span class="iconfont icon-shopping-basket" @click="toShopCart"></span>
          </div>
        </div>
        <div class="rtimg">
          <img :src="topinfo.rt_r.img" alt="" @click="toShopInfo">
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "ShopGoodsCompute",
  data() {
    return {
      lf_msg: ['电脑', '新年换新机'],
      rt_msg: ['戴尔', '清华同方', '小米', '联想', '惠普', '三星', '更多电脑 >'],
      goods_msg: ['CPU', '显卡', '机箱', '键盘', '鼠标', 'U盘'],
      lfinfo: {
        p1: '致敬2016',
        p2: '新春大礼包',
        img: require('@/assets/images/computerArt.png')
      },
      topinfo: {
        lf: [
          {
            tpimg: require('@/assets/images/computer1.jpg'),
            name: '罗技蓝牙键盘',
            price: '￥179.90',
          },
          {
            tpimg: require('@/assets/images/computer2.jpg'),
            name: '惠普（HP）笔记本',
            price: '￥4999.00',
          }
        ],
        rt: [
          {
            tpimg: require('@/assets/images/computer5.jpg'),
            name: '罗技蓝牙键盘',
            price: '￥179.90',
          },
          {
            tpimg: require('@/assets/images/computer4.jpg'),
            name: '惠普（HP）笔记本',
            price: '￥4999.00',
          }
        ],
        lf_r: {
          name: '米奇优盘', price: '￥39.90', img: require('@/assets/images/computer3.jpg')
        },
        rt_r: {
          name: 'LG 航拍器', price: '￥699.00', img: require('@/assets/images/computer6.jpg')
        }
      }
    }
  },
  computed: {
    bgc() {
      return `background-color: rgb(255, 146, 41);`
    },
    bdc() {
      return `border: 15px solid #d17b28;border-left-color: white;border-bottom-color: white;`
    }
  },
  methods:{
    toShopInfo(){
      this.$router.push('/shopinfo')
    },
    toShopCart(){
      this.$router.push('/shopcart')
    }
  }
}
</script>

<style scoped>
</style>