<template>
  <div class="shop_pay">
    <div class="pay_address">
      <div class="cf_tip">
        <span>确认收货地址</span>
        <span>使用新地址</span>
      </div>
      <div class="addressbm">
        <ul>
          <li>
            <component :is="currentCpn" @EditMsg="EditMsg"></component>
            <p v-if="showEdit">
              <span class="edit1" @click="EditInfo">编辑 |</span>
              <span class="edit1"> 删除</span>
            </p>
            <p v-if="!showEdit">
              <!--<span class="finish" @click="Finished" @EditMsg="EditMsg(payload)">完成</span>-->
            </p>
            <div v-if="showEdit" class="moren">默认地址</div>
          </li>
          <li>
            <p>李丹 15866699*****</p>
            <p>收货地址：</p>
            <p>
              <span v-for="item in addressinfo.af">{{ item }}</span>
            </p>
            <p>{{ addressinfo.juti }}</p>
            <p>
              <span>设为默认 |</span>
              <span> 编辑 |</span>
              <span> 删除</span>
            </p>
          </li>
        </ul>
      </div>
    </div>
    <div class="wuliu">
      <h3>选择物流方式</h3>
      <ul>
        <li v-for="(item,index) in wlfs">
          <span :style="wlicon[index]"></span>
          <span>{{ item }}</span>
        </li>
      </ul>
    </div>
    <div class="zhifu">
      <h3>选择支付方式</h3>
      <ul>
        <li v-for="(item,index) in zffs">
          <img :src="zficon[index]" alt="">
          <span>{{ item }}</span>
        </li>
      </ul>
    </div>
    <div class="comfirmmsg">
      <h4>确认订单信息</h4>
      <div class="cfminfo">
        <ul class="title">
          <li v-for="item in cmfmsg">{{ item }}</li>
        </ul>
        <ul v-for="item in ($route.params.uid === 'shopinfotop'?$route.params.imbuy:payGoodsList)" class="phmsg">
          <li><img :src="item.img" alt=""><span>{{ item.name }}</span></li>
          <li>{{ item.unitPrice }}</li>
          <li>{{ item.num }}</li>
          <li>{{ item.sumprice }}</li>
          <li>快递送货</li>
        </ul>
      </div>
    </div>
    <div class="liuyan clearfix">
      <div class="lf">
        <span>买家留言：</span>
        <textarea placeholder="选填，建议填写和卖家达成一致的说明"></textarea>
      </div>
      <div class="rt">
        <p>
          <span>优惠劵</span>
          <select name="yhq" id="yhq" v-model="yhq" v-once>
            <option value="0" disabled>请选择优惠券</option>
            <option value="3">￥3【无使用门槛】</option>
            <option value="8">￥8【消费满95元可用】</option>
          </select>
        </p>
        <p>
          <span>红包</span>
          <select name="hb" id="hb" v-model="hb" v-once>
            <option value="0" disabled>请选择红包</option>
            <option value="50">￥50.00元，还剩50.00元</option>
            <option value="10.4">￥50.00元，还剩10.40元</option>
          </select>
        </p>
      </div>
    </div>
    <div class="paybm clearfix">
      <div class="pbinfo">
        <p><span>合计 (含运费) ￥</span><span>{{ SumGoodsPrice }}</span></p>
        <div class="pbct">
          <p>实付款：<i>￥</i><span>{{ RealPrice }}</span></p>
          <p><span>寄送至：</span>
            {{ addressinfo2.af[0] ? addressinfo2.af[0] : '吉林省' }}
            {{ addressinfo2.af[1] ? addressinfo2.af[1] : '长春市' }}
            {{ addressinfo2.af[2] ? addressinfo2.af[2] : '南关区' }}
            {{ addressinfo2.juti ? addressinfo2.juti : '卫星广场财富领域5A16室' }}
          </p>
          <p><span>收货人：</span>{{ addressinfo2.uname?addressinfo2.uname:'李丹' }}{{ addressinfo2.phone?addressinfo2.phone:'15866699*****' }}</p>
        </div>
        <button @click="subCart">提交订单</button>
      </div>
    </div>
  </div>
</template>

<script>
import PayInfo from "@/views/pay/PayInfo";
import PayEdit from "@/views/pay/PayEdit";
import {mapState} from 'vuex'

export default {
  name: "Pay",
  data() {
    return {
      addressinfo: {
        af: ['吉林省', '长春市', '南关区'],
        juti: '卫星广场财富领域5A16室'
      },
      addressinfo2: {
        uname: '李丹',
        phone: '15866699*****',
        af: ['吉林省', '长春市', '南关区'],
        juti: '卫星广场财富领域5A16室'
      },
      wlfs: ['圆通', '申通', '韵达', '中通', '顺丰'],
      wlicon: [
        'background-position: 0 -468px;',
        'background-position: 0 -1008px;',
        'background-position: 0 -576px;',
        'background-position: 0 -324px;',
        'background-position: 0 -180px;'
      ],
      zffs: ['银联', '微信', '支付宝'],
      zficon: [
        require('@/assets/images/wangyin.jpg'),
        require('@/assets/images/weizhifu.jpg'),
        require('@/assets/images/zhifubao.jpg')
      ],
      cmfmsg: ['商品信息', '单价', '数量', '金额', '配送方式'],
      yhq: 0,
      hb: 0,
      showEdit: true,
      currentCpn: PayInfo
    }
  },
  components: {
    PayInfo,
    PayEdit
  },
  computed: {
    ...mapState(['accountList', 'accountIndex']),
    SumGoodsPrice() {
      let sum = 0
      this.accountList[this.accountIndex].goodsList.forEach((item) => {
        if (item.isSelect) {
          sum += item.sumprice
        }
      })

      if (this.$route.params.uid === 'shopinfotop') {
        return this.$route.params.imbuy[0].sumprice;
      } else {
        return sum
      }
    },
    RealPrice() {
      return this.SumGoodsPrice - this.yhq - this.hb
    },
    payGoodsList() {
      return this.accountList[this.accountIndex].goodsList.filter((item) => {
        if (item.isSelect) {
          return item
        }
      })
    }
  },
  methods: {
    subCart() {
      if (confirm("确认要提交订单吗？")) {
        this.$store.dispatch('subCartAction', this.payGoodsList)
      } else {
        return false
      }
      alert("恭喜你！提交成功")
      this.$router.push('/shopcart')
    },
    EditInfo() {
      this.showEdit = false
      this.currentCpn = PayEdit
    },
    EditMsg(payload) {
      this.currentCpn = payload.cpn
      this.showEdit = payload.showedit
      this.addressinfo2 = {
        uname: payload.uname,
        phone: payload.phone,
        af: [payload.shen, payload.shi, payload.qu],
        juti: payload.xxdz,
      }
    }
  }
}
</script>

<style scoped>
@import "~@/assets/css/pay/pay.css";
</style>