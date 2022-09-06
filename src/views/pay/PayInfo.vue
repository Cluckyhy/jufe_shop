<template>
  <div class="payinfo">
    <p>{{ addressinfo.name }} {{ addressinfo.phone }}</p>
    <p>收货地址：</p>
    <p>
      <span v-for="item in addressinfo.af">{{ item }}</span>
    </p>
    <p>{{ addressinfo.juti }}</p>
  </div>
</template>

<script>

export default {
  name: "PayInfo",
  data() {
    return {
      addressinfo: {
        name: this.$parent.addressinfo2.uname ? this.$parent.addressinfo2.uname : '李丹',
        phone: this.$parent.addressinfo2.phone ? this.$parent.addressinfo2.phone : '15866699*****',
        af: this.$parent.addressinfo2.af === '' ? this.$parent.addressinfo2.af : ['吉林省', '长春市', '南关区'],
        juti: this.$parent.addressinfo2.juti ? this.$parent.addressinfo2.juti : '卫星广场财富领域5A16室'
      }
    }
  }
}
</script>

<style scoped>
.payinfo {
  width: 100%;
  height: 90px;
}

.payinfo p:last-of-type {
  float: left;
  margin-top: 3px;
}

</style>