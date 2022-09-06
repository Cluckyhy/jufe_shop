<template>
  <div class="home">
    <header-top/>
    <header-main/>
    <shop-main/>
  </div>
</template>

<script>
import HeaderTop from "@/views/home/home_header/HeaderTop";
import HeaderMain from "@/views/home/home_header/HeaderMain";
import ShopMain from "@/views/home/home_main/ShopMain";

export default {
  name: "HomeShop",
  components:{HeaderTop,HeaderMain,ShopMain}
}
</script>

<style scoped>
</style>