<template>
  <div class="shopinfo">
    <header-top/>
    <shop-info-top :idx="index"/>
    <shop-info-bottom/>
  </div>
</template>

<script>
import HeaderTop from "@/views/home/home_header/HeaderTop";
import ShopInfoTop from "@/views/shopinfo/ShopInfoTop";
import ShopInfoBottom from "@/views/shopinfo/ShopInfoBottom";

export default {
  name: "ShopInfo",
  data() {
    return {
      index: this.$route.params.idx
    }
  },
  components: {HeaderTop, ShopInfoTop, ShopInfoBottom}
}
</script>

<style scoped>
</style>