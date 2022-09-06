<template>
  <div class="box">
    <div class="header">
      <ul>
        <li v-for="item in headers">{{ item }}</li>
      </ul>
    </div>
    <div v-if="Len>0" class="sp_goods">
      <transition-group name="goods">
        <div class="good_item" v-for="(item,index) in accountList[accountIndex].goodsList" :key="item.name">
          <ul>
            <li><input type="checkbox" v-model="item.isSelect" @click="selectGoods(index)"></li>
            <li class="clearfix">
              <img :src="item.img" alt="">
              <span>{{ item.name }}</span>
            </li>
            <li>{{ item.unitPrice }}</li>

            <li class="counter">
              <button :disabled="item.num<2" :class="{active:item.num>1}" @click="decreament(index)">-</button>
              {{ item.num }}
              <button class="active" @click="increament(index)">+</button>
            </li>

            <li>{{ item.sumprice }}</li>
            <li><span @click="removeItem(index)">删除</span></li>
          </ul>
        </div>
      </transition-group>
    </div>
    <div v-if="Len===0" class="sp_empty">
      <div class="emptyinfo">
        <img :src="emptyImg" alt="">
        <span>购物车空空如也！！</span>
      </div>
    </div>
    <div class="footer">
      <div class="left">
        <input id="allSelect" type="checkbox" v-model="isAllSelect" @click="allSelect"><label for="allSelect">全选</label>
        <span @click="emptyCart">清空购物车</span>
      </div>
      <div class="operate">
        <p>
          已选商品 <span>{{ sumCount }}</span> 件 合计：￥ <span>{{ sumPrice }}</span> 元
        </p>
        <p @click="toPay">去结算</p>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState, mapGetters} from 'vuex'

export default {
  name: "ShopCart",
  data() {
    return {
      emptyImg: require('@/assets/images/shopcar.png'),
      headers: ["选择", "商品信息", "单价", "数量", "金额", "操作"],
      //注意下面初始化值如果是""会有问题，因为如果是""，一开始的时候，isAllSelect的值发生了变化
      //发生变化，就会执行监听的操作，会执行isAllSelect的else分支，把所有的isSelect值全改为false
      //如果首先设置为false，一开始点击的时候，不会改变isAllSelect的值，所有不会触发监听操作
      isAllSelect: false,
    }
  },

  computed: {
    ...mapState(['accountList','accountIndex']),
    ...mapGetters(['Len']),
    sumCount() {
      let count = 0
      this.accountList[this.accountIndex].goodsList.forEach(item => {
        if (item.isSelect) {
          // count += item.num
          count += 1
        }
      })
      return count
    },
    sumPrice() {
      let sum = 0
      this.accountList[this.accountIndex].goodsList.forEach(item => {
        if (item.isSelect) {
          sum += item.sumprice
        }
      })
      return sum
    }
  },
  methods: {
    decreament(index) {
      // console.log("点击我减1", index);
      this.accountList[this.accountIndex].goodsList[index].num--
      this.accountList[this.accountIndex].goodsList[index].sumprice = this.accountList[this.accountIndex].goodsList[index].unitPrice * this.accountList[this.accountIndex].goodsList[index].num
      let decreObj = {
        idx: index,
        num: this.accountList[this.accountIndex].goodsList[index].num,
        sumprice:this.accountList[this.accountIndex].goodsList[index].sumprice
      }
      this.$store.dispatch('decrementCountAction', decreObj)
    },
    increament(index) {
      // console.log("点击我加1", index);
      this.accountList[this.accountIndex].goodsList[index].num++
      this.accountList[this.accountIndex].goodsList[index].sumprice = this.accountList[this.accountIndex].goodsList[index].unitPrice * this.accountList[this.accountIndex].goodsList[index].num
      let increObj = {
        idx: index,
        num: this.accountList[this.accountIndex].goodsList[index].num,
        sumprice:this.accountList[this.accountIndex].goodsList[index].sumprice
      }
      this.$store.dispatch('incrementCountAction', increObj)
    },



    removeItem(index) {
      this.$store.dispatch('removeGoodsAction', index)
    },
    toPay() {
      if (this.sumPrice > 0) {
        this.$router.push({name: 'pay', params: {uid: 'shopcart'}})
      } else {
        alert("您还未选择要购买的商品，请选择")
      }
    },

    //利用方法实现全选
    selectGoods(index) {
      let goods = this.accountList[this.accountIndex].goodsList[index]
      goods.isSelect = !goods.isSelect
      this.isAllSelect = true
      for (const item of this.accountList[this.accountIndex].goodsList) {
        if (item.isSelect === false) {
          this.isAllSelect = false
        }
      }
    },
    allSelect() {
      this.isAllSelect = !this.isAllSelect
      for (const item of this.accountList[this.accountIndex].goodsList) {
        item.isSelect = this.isAllSelect
      }
    },

    emptyCart() {
      if (confirm("确认清空购物车吗？")) {
        this.$store.dispatch('emptyCartAction')
      } else {
        return false
      }
    }

  }
}
</script>

<style scoped>
@import "~@/assets/css/shopcart/shopcart.css";
</style>