<template>
  <div class="shopmain">
    <shop-top/>
    <shop-activity/>
    <shop-goods-phone/>
    <shop-goods-compute/>
  </div>
</template>

<script>

import ShopTop from "@/views/home/home_main/ShopTop";
import ShopActivity from "@/views/home/home_main/ShopActivity";
import ShopGoodsPhone from "@/views/home/home_main/ShopGoodsPhone";
import ShopGoodsCompute from "@/views/home/home_main/ShopGoodsCompute";

export default {
  name: "ShopMain",
  components:{ShopTop,ShopActivity,ShopGoodsPhone,ShopGoodsCompute}
}
</script>

<style scoped>
@import "~@/assets/css/home/shopgoods.css";
</style>