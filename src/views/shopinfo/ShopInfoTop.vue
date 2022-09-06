<template>
  <div class="shopinfotop">
    <p>
      <span v-for="item in title">{{ item }}</span>
    </p>
    <div class="sp_content">
      <div class="ct_lf clearfix">
        <img :src="imgs[idx === undefined ? 0 : idx].img[img_flag]"
             :style="{opacity:opa}" @mousemove="showBig"
             @mouseout="noShow">
        <div class="ct_lf_box" :style="{left:boxX+'px',top:boxY+'px',display:ShowBox}"></div>
        <div class="ct_lf_big clearfix" :style="{zIndex:zx}">
          <img :src="imgs[idx === undefined ? 0 : idx].img[img_flag]"
               :style="{left:bigX+'px',top:bigY+'px',display:ShowBigFlag}" alt="">
        </div>
      </div>
      <div class="ct_rt clearfix">
        <h1>{{ shop_name[idx === undefined ? 0 : idx] }}</h1>
        <div class="sp_ms1">
          <p class="p1">
            <span>{{ shop_msg1[0].ms_l }}</span>
            <span>{{ shop_msg1[0].ms_r }}</span>
          </p>
          <p class="p2">
            <span>{{ shop_msg1[1].ms_l }}</span>
            <span><i>￥</i>{{ shop_msg1[1].ms_r[idx === undefined ? 0 : idx] }}</span>
          </p>
          <p class="p3">
            <span>{{ shop_msg1[2].ms_l }}</span>
            <span>{{ shop_msg1[2].ms_r[idx === undefined ? 0 : idx] }}</span>
          </p>
        </div>
        <div class="sp_ms2">
          <span>配送至</span>
          <select name="sf" id="sf">
            <option value="zj">浙江省</option>
            <option value="jl">吉林省</option>
          </select>
          <select name="shi" id="shi">
            <option value="zj">温州市</option>
            <option value="jl">长春市</option>
          </select>
          <select name="qu" id="qu">
            <option value="zj">瑞安区</option>
            <option value="jl">南山区</option>
          </select>
          <span>快递10元</span>
        </div>
        <div class="sp_ms3">
          <ul>
            <li v-for="item in shop_count">
              <span v-for="msgc in item">{{ msgc }}</span>
            </li>
          </ul>
        </div>
        <div class="sp_ms4">
          <div class="m4_t" v-for="item in shop_msg4">
            <span>{{ item.m4_l }}</span>
            <span
                v-for="(cell,index) in item.m4_r"
                :class="{
                   tx1_active: (tx1_flag === index && item.m4_l === '颜色'),
                   tx2_active: (tx2_flag === index && item.m4_l === '套装')
                }"
                @click="item.m4_l === '颜色' ? tx1_flag = index : tx2_flag = index">
              {{ cell }}
            </span>
          </div>
          <div class="m4_cp">
            <span>数量</span>
            <span>
              <button @click="subCount_st" :disabled="st_count<2">-</button>
              <input type="number" min="1" v-model="st_count">
              <button @click="addCount_st">+</button>
              <span>库存1000件</span>
            </span>
          </div>
        </div>
        <div class="sp_ms5">
          <span @click="toPay">立即购买</span>
          <span @click="toShopCart">加入购物车</span>
        </div>
      </div>
      <div class="ct_lf_bm">
        <img
            v-for="(item,index) in ct_imgs[idx === undefined ? 0 : idx].img"
            :src="item"
            :class="{img_active:img_flag === index}"
            @click="showImg(index)"
        >
      </div>
    </div>
    <div class="sp_match">
      <div class="match_title">优惠套餐</div>
      <div class="like_list">
        <ul class="clearfix">
          <li>
            <img :src="like_msg[0].img" alt="">
            <p>{{ like_msg[0].tip }}</p>
            <p>
              <span>{{ like_msg[0].price_new }}</span>
              <span>{{ like_msg[0].price_old }}</span>
            </p>
          </li>

          <li>+</li>

          <li>
            <img :src="like_msg[1].img" alt="">
            <p>{{ like_msg[0].tip }}</p>
            <p>
              <span>{{ like_msg[1].price_new }}</span>
              <span>{{ like_msg[1].price_old }}</span>
            </p>
          </li>

          <li>=</li>

          <li>
            <p>{{ like_msg[2].tip }}</p>
            <p>{{ like_msg[2].tip2 }}</p>
            <button>{{ like_msg[2].buy }}</button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
  name: "ShopInfoTop",
  props: ['idx'],
  data() {
    return {
      title: ['首页', '分类', '内容'],
      imgs: [
        {
          img: [
            require('@/assets/images/01.jpg'),
            require('@/assets/images/02.jpg'),
            require('@/assets/images/03.jpg'),
          ]
        },
        {
          img: [
            require('@/assets/images/tj.png'),
            require('@/assets/images/xueyu1.jpg'),
            require('@/assets/images/xueyu2.jpg'),
          ]
        },
        {
          img: [
            require('@/assets/images/tj1.png'),
            require('@/assets/images/xwy1.jpg'),
            require('@/assets/images/xwy2.jpg'),
          ]
        },
        {
          img: [
            require('@/assets/images/tj2.png'),
            require('@/assets/images/defu1.jpg'),
            require('@/assets/images/defu2.jpg'),
          ]
        }
      ],
      ShowBigFlag: 'none',
      ShowBox: 'none',
      img_flag: 0,
      tx1_flag: 0,
      tx2_flag: 0,
      ct_imgs: [
        {
          img: [
            require('@/assets/images/01_small.jpg'),
            require('@/assets/images/02_small.jpg'),
            require('@/assets/images/03_small.jpg')
          ]
        },
        {
          img: [
            require('@/assets/images/tj.png'),
            require('@/assets/images/xueyu1.jpg'),
            require('@/assets/images/xueyu2.jpg')
          ]
        },
        {
          img: [
            require('@/assets/images/tj1.png'),
            require('@/assets/images/xwy1.jpg'),
            require('@/assets/images/xwy2.jpg')
          ]
        },
        {
          img: [
            require('@/assets/images/tj2.png'),
            require('@/assets/images/defu1.jpg'),
            require('@/assets/images/defu2.jpg')
          ]
        }
      ],
      shop_name: ['华为 畅玩4X 白色 移动4G手机', '鳕鱼肠', '夏威夷果', '德芙巧克力'],
      shop_uniPrices: [2399, 199, 399, 599],
      shop_msg1: [
        {
          ms_l: '店铺优惠',
          ms_r: '购物满2件打8折，满3件7折'
        },
        {
          ms_l: '促销价',
          ms_r: ['2399', '199', '399', '599']
        },
        {
          ms_l: '原价',
          ms_r: ['￥1999.00', '￥229', '￥439', '￥659']
        },
      ],
      shop_count: {
        mc: ['月销量', '1015'],
        sumc: ['累计销量', '6015'],
        summ: ['累计评价', '640']
      },
      shop_msg4: [
        {
          m4_l: '颜色',
          m4_r: ['荣耀金', '冰河银', '雅典灰']
        },
        {
          m4_l: '套装',
          m4_r: ['保护套装', '原厂电源', '存储套装']
        }
      ],
      like_msg: [
        {
          img: require('@/assets/images/taozhuang01.jpg'),
          tip: '防爆玻璃钢化膜',
          price_new: '￥29.90',
          price_old: '￥199.00'
        },
        {
          img: require('@/assets/images/taozhuang02.jpg'),
          tip: 'usb快速充电线',
          price_new: '￥8.90',
          price_old: '￥299.00'
        },
        {
          tip: '套餐价：￥35.00',
          tip2: '共省 ￥463.00',
          buy: '立即购买'
        }
      ],
      //注意这里千万别在data中自己去localStorage中取值，这样的话，就不能响应了，只能刷新后才会看出更改后的值
      // goods: JSON.parse(localStorage.getItem('goodsList')) ? JSON.parse(localStorage.getItem('goodsList')) : [],
      st_count: 1,
      boxX: 0,
      boxY: 0,
      bigX: 0,
      bigY: 0,
      opa: 1,
      zx: -10
    }
  },
  computed: {
    ...mapState(["accountList", 'accountIndex']),
  },
  methods: {
    addCount_st() {
      this.st_count++
    }
    ,
    subCount_st() {
      this.st_count--
    }
    ,
    showImg(index) {
      this.img_flag = index
    },
    showBig(e) {
      let X = e.offsetX - 50
      let Y = e.offsetY - 50
      if (e.offsetX < 50) {
        X = 0
      }
      if (e.offsetY < 50) {
        Y = 0
      }
      if (e.offsetX >= 350) {
        X = 300
      }
      if (e.offsetY >= 350) {
        Y = 300
      }
      this.boxX = X
      this.boxY = Y
      this.bigX = -(X * 4)
      this.bigY = -(Y * 4)
      this.ShowBigFlag = 'block'
      this.ShowBox = 'block'
      this.opa = 0.6
      this.zx = 10
    },
    noShow() {
      this.ShowBigFlag = 'none'
      this.ShowBox = 'none'
      this.opa = 1
      this.zx = -10
    },
    toPay() {
      if (!this.accountList[this.accountIndex].isLogin) {
        alert("亲,请先登录哟！")
        this.$router.push('/login')
        return false
      }

      const imbuygoods = [
        {
          isSelect: false,
          img: this.imgs[this.idx === undefined ? 0 : this.idx].img[0],
          name: this.shop_name[this.idx === undefined ? 0 : this.idx],
          unitPrice: this.shop_uniPrices[this.idx === undefined ? 0 : this.idx],
          num: this.st_count,
          sumprice: this.shop_uniPrices[this.idx === undefined ? 0 : this.idx] * this.st_count
        }
      ]

      this.$router.push({
        name: 'pay',
        params: {uid: 'shopinfotop', imbuy: imbuygoods}
      })
    },
    toShopCart() {

      if (!this.accountList[this.accountIndex].isLogin) {
        alert("亲,请先登录哟！")
        this.$router.push('/login')
        return false
      }

      const newgoods = {
        isSelect: false,
        img: this.imgs[this.idx === undefined ? 0 : this.idx].img[0],
        name: this.shop_name[this.idx === undefined ? 0 : this.idx],
        unitPrice: this.shop_uniPrices[this.idx === undefined ? 0 : this.idx],
        num: this.st_count,
        sumprice: this.shop_uniPrices[this.idx === undefined ? 0 : this.idx] * this.st_count
      }
      let flag = false
      this.accountList[this.accountIndex].goodsList.forEach((item) => {
        if (item.name === newgoods.name) {
          item.num += newgoods.num
          item.sumprice = item.unitPrice * item.num
          flag = true
        }
      })
      if (!flag) {
        this.accountList[this.accountIndex].goodsList.push(newgoods)
      }
      this.$store.dispatch('addGoodsAction', this.accountList[this.accountIndex].goodsList)
      this.$router.push('/shopcart')
    }
  }
}
</script>

<style scoped>
@import "~@/assets/css/shopinfo/shopinfotop.css";
</style>