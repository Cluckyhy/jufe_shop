<template>
  <div class="payedit">
    <form action="#">
      <p>姓名：<input type="text" v-model="uname"></p>
      <p>电话号码：<input type="text" v-model="phone"></p>

      <span>地区</span>
      <select name="shen" id="shen" v-model="shen">
        <option value="" disabled>省份</option>
        <option value="吉林省">吉林省</option>
        <option value="浙江省">浙江省</option>
        <option value="江西省">江西省</option>
      </select>

      <select name="shi" id="shi" v-model="shi">
        <option value="" disabled>市</option>
        <option value="赣州市">赣州市</option>
        <option value="南昌市">南昌市</option>
        <option value="深圳市">深圳市</option>
      </select>

      <select name="qu" id="qu" v-model="qu">
        <option value="" disabled>区</option>
        <option value="南山区">南山区</option>
        <option value="福田区">福田区</option>
        <option value="龙华区">龙华区</option>
      </select>

      <p>详细地址：<input type="text" v-model="xxdz"></p>
      <span @click="Finished">完成</span>
    </form>
  </div>
</template>

<script>
import PayInfo from "@/views/pay/PayInfo";

export default {
  name: "PayEdit",
  data() {
    return {
      uname: '',
      phone: '',
      shen: '',
      shi: '',
      qu: '',
      xxdz: ''
    }
  },
  methods: {
    Finished() {
      let payload = {
        cpn: PayInfo,
        showedit: true,
        uname: this.uname,
        phone: this.phone,
        shen: this.shen,
        shi: this.shi,
        qu: this.qu,
        xxdz: this.xxdz,
      }
      this.$emit('EditMsg', payload)
    }
  }
}
</script>

<style scoped>
.payedit {
  width: 235px;
  height: 100px;
  font-size: 14px;
}

.payedit span {
  margin-right: 5px;
}

.payedit p:nth-child(1) {
  font-weight: 400;
}

.payedit p:nth-child(1) input {
  width: 150px;
  margin-left: 25px;
}

.payedit p:nth-child(2) input {
  width: 150px;
}

.payedit p:last-of-type {
  float: left;
  margin-top: 3px;
}

.payedit p:last-of-type input {
  width: 150px;
}

.payedit span:last-child {
  float: right;
  margin-top: 15px;
  cursor: pointer;
}
</style>