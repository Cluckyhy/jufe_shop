<template>
  <div class="tabs_dt">
    <div class="dt_P">
      <h4>产品参数</h4>
      <ul>
        <li v-for="item in pdParams">{{item}}</li>
      </ul>
    </div>
    <div class="dt_D">
      <h4>商品细节</h4>
      <ul>
        <li v-for="item in gdsdt">
          <img :src="item" alt="">
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "ShopDtail",
  data() {
    return {
      pdParams: [
        '商品名称: 华为荣耀畅玩4X', '商品编号: 1684485', '商品毛重: 157.00g',
        '商品产地: 中国大陆', '系统: 安卓（Android）', '运行内存: 3GB',
        '像素: 1600万以上', '电池容量： 3000mAh-3999mAh', '机身颜色： 金色'
      ],
      gdsdt: [
        require('@/assets/images/tw1.jpg'),
        require('@/assets/images/tw2.jpg'),
        require('@/assets/images/tw3.jpg'),
        require('@/assets/images/tw4.jpg'),
        require('@/assets/images/tw5.jpg'),
      ]
    }
  }
}
</script>

<style scoped>
@import "~@/assets/css/shopinfo/tabsdt.css";
</style>