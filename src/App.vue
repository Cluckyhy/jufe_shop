<template>
  <div id="app">
    <header-shop/>
    <router-view/>
    <footer-shop/>
  </div>
</template>

<script>
import HeaderShop from "@/components/HeaderShop";
import HomeShop from "@/views/home/HomeShop";
import FooterShop from "@/components/FooterShop";

export default {
  name: 'App',
  components: {HeaderShop, HomeShop, FooterShop}
}
</script>

<style>
@import "~@/assets/fonts/homeshop/iconfont.css";
</style>
