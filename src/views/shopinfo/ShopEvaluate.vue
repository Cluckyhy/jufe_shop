<template>
  <div class="tabs_elt">
    <div class="elt_top clearfix">
      <div class="ds">
        <p>100<span>%</span></p>
        <p>好评度</p>
      </div>
      <div class="yx">
        <p>买家印象</p>
        <ul>
          <li v-for="item in yxmsg">{{ item }}</li>
        </ul>
      </div>
    </div>
    <div class="elt_comments">
      <div class="title">
        <ul>
          <li v-for="item in eltitle">{{ item }}<span>({{ count }})</span></li>
        </ul>
      </div>
      <div class="coms">
        <ul>
          <li v-for="(item,index) in eltcoms" :class="{speva_show:(index >= gt && index < lt)}" class="clearfix">
            <div>
              <img :src="item.icon" alt="">
              <div class="sanjiao"></div>
            </div>
            <div>
              <p>{{ item.nameinfo }}</p>
              <p>{{ item.coms }}</p>
              <p><span>颜色分类：<span v-for="cell in item.goodsinfo.colofl">{{ cell }}</span></span></p>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="fenye clearfix">
      <ul>
        <li @click="goPre"> <<</li>
        <li v-for="(num,index) in sumye" @click="showActive(index)" :class="{evaActive:flag===index}">{{ num }}</li>
        <li @click="goBack"> >></li>
      </ul>
    </div>
    <div class="elt_tip">
      购买前请查看该商品的<span>购物保障,</span>明确您的售后保障权益。
    </div>
  </div>
</template>

<script>
export default {
  name: "ShopEvaluate",
  data() {
    return {
      yxmsg: [
        '"性价比高(2177)"', '"系统流畅(2177)"', '"外观漂亮(1823)"',
        '"性价比高(2177)"', '"性价比高(2177)"', '"性价比高(2177)"',
        '"照相不错(2177)"', '"性价比高(2177)"', '"国明手机(2177)"'
      ],
      eltitle: ['全部评价', '好评', '中评', '差评'],
      eltcoms: [
        {
          icon: require('@/assets/images/getAvatar.do.jpg'),
          nameinfo: 'b****1 (匿名) 评论于 2015年11月02日 17：46',
          coms: '111帮朋友买的，没有拆开来看，据说还不错，很满意！',
          goodsinfo: {
            colofl: ['金', '电信4G']
          }
        },
        {
          icon: require('@/assets/images/getAvatar.do.jpg'),
          nameinfo: 'b****1 (匿名) 评论于 2015年11月02日 17：46',
          coms: '111帮朋友买的，没有拆开来看，据说还不错，很满意！',
          goodsinfo: {
            colofl: ['金', '电信4G']
          }
        },
        {
          icon: require('@/assets/images/getAvatar.do.jpg'),
          nameinfo: 'b****1 (匿名) 评论于 2015年11月02日 17：46',
          coms: '111帮朋友买的，没有拆开来看，据说还不错，很满意！',
          goodsinfo: {
            colofl: ['金', '电信4G']
          }
        },
        {
          icon: require('@/assets/images/getAvatar.do.jpg'),
          nameinfo: 'b****1 (匿名) 评论于 2015年11月02日 17：46',
          coms: '222帮朋友买的，没有拆开来看，据说还不错，很满意！',
          goodsinfo: {
            colofl: ['金', '电信4G']
          }
        },
        {
          icon: require('@/assets/images/getAvatar.do.jpg'),
          nameinfo: 'b****1 (匿名) 评论于 2015年11月02日 17：46',
          coms: '222帮朋友买的，没有拆开来看，据说还不错，很满意！',
          goodsinfo: {
            colofl: ['金', '电信4G']
          }
        },
        {
          icon: require('@/assets/images/getAvatar.do.jpg'),
          nameinfo: 'b****1 (匿名) 评论于 2015年11月02日 17：46',
          coms: '222帮朋友买的，没有拆开来看，据说还不错，很满意！',
          goodsinfo: {
            colofl: ['金', '电信4G']
          }
        },
        {
          icon: require('@/assets/images/getAvatar.do.jpg'),
          nameinfo: 'b****1 (匿名) 评论于 2015年11月02日 17：46',
          coms: '333帮朋友买的，没有拆开来看，据说还不错，很满意！',
          goodsinfo: {
            colofl: ['金', '电信4G']
          }
        },
        {
          icon: require('@/assets/images/getAvatar.do.jpg'),
          nameinfo: 'b****1 (匿名) 评论于 2015年11月02日 17：46',
          coms: '333帮朋友买的，没有拆开来看，据说还不错，很满意！',
          goodsinfo: {
            colofl: ['金', '电信4G']
          }
        }
      ],
      count: 32,
      sumye: 3,
      flag: 0
    }
  },
  computed: {
    gt() {
      return ((this.flag+1) - 1) * 3
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
@import "~@/assets/css/shopinfo/shopevaluate.css";
</style>