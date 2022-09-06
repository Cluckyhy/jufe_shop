<template>
  <div class="main_shop">
    <header-left></header-left>
    <header-center></header-center>
    <header-right></header-right>
  </div>
</template>

<script>

import HeaderLeft from "@/views/home/home_header/HeaderLeft";
import HeaderCenter from "@/views/home/home_header/HeaderCenter";
import HeaderRight from "@/views/home/home_header/HeaderRight";

export default {
  name: "HeaderMain",
  components:{HeaderLeft,HeaderCenter,HeaderRight}
}
</script>

<style scoped>
@import "~@/assets/css/basic.css";
@import "~@/assets/css/home/headertop.css";
</style>