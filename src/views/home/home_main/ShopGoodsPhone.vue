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
      <p>{{lfinfo.p1}}</p>
      <p>{{lfinfo.p2}}</p>
      <img :src="lfinfo.img" alt="">
      <div class="gl_bm"></div>
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
  name: "ShopGoodsPhone",
  data() {
    return {
      lf_msg: ['手机', '手机风暴'],
      rt_msg: ['小米', '荣耀', '乐视', '魅族', '联想', 'OPPO', '更多手机 >'],
      goods_msg: ['十核', '八核', '双四核', '四核', '双核', '单核'],
      lfinfo: {
        p1:'免费领30天碎屏险',
        p2:'颜值之星，双摄之星',
        img:require('@/assets/images/tel.png')
      },
      topinfo: {
        lf: [
          {
            tpimg: require('@/assets/images/phone1.jpg'),
            name: '荣耀8',
            price: '￥5888.00',
          },
          {
            tpimg: require('@/assets/images/phone2.jpg'),
            name: '一加手机',
            price: '$2499.00',
          }
        ],
        rt: [
          {
            tpimg: require('@/assets/images/phone3.jpg'),
            name: '苹果4s手机',
            price: '￥2099.00',
          },
          {
            tpimg: require('@/assets/images/phone4.jpg'),
            name: 'LG G5',
            price: '￥2999.00',
          }
        ],
        lf_r: {
          name: '红米', price: '￥1199.00', img: require('@/assets/images/phone5.jpg')
        },
        rt_r: {
          name: '魅族 魅蓝', price: '￥999.00', img: require('@/assets/images/phone6.jpg')
        }
      }
    }
  },
  computed:{
    bgc(){
      return `background-color: rgb(107, 222, 167);`
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