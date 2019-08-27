<template>
  <div>
    <div class='container'>
  	  <!-- 单独购买 -->
  	  <div class='step-wrap step-alone' v-if="showAlone">
  	    <div class='icon-list'>
  	      <i class="iconfont icon-youshuangjiantou"></i>
  	      <i class="iconfont icon-youshuangjiantou"></i>
  	    </div>
  	    <ul class='text-list'>
  	      <li class='text-item'>
  	        <i class="iconfont icon-pintuankaituancantuan"></i>
  	        <span class='text'>支付49元</span>
  	        <span class='text'>购买课程</span>
  	      </li>
  	      <li class='text-item'>
  	        <i class="iconfont icon-weixin"></i>
  	        <span class='text'>查看老师联系方式</span>
  	        <span class='text'>关注微信公众号</span>
  	      </li>
  	      <li class='text-item'>
  	        <i class="iconfont icon-prepare-model"></i>
  	        <span class='text'>老师指导您</span>
  	        <span class='text'>完成课前准备</span>
  	      </li>
  	    </ul>
  	  </div>

  	  <!-- 团购 -->
  	  <div class='step-wrap step-group' v-else>
        <div class='icon-list'>
          <i class="iconfont icon-youshuangjiantou"></i>
          <i class="iconfont icon-youshuangjiantou"></i>
          <i class="iconfont icon-youshuangjiantou"></i>
        </div>
        <ul class='text-list'>
          <li class='text-item'>
            <i class="iconfont icon-pintuankaituancantuan"></i>
            <span class='text'>开团/参团</span>
            <span class='text'>完成支付</span>
          </li>
          <li class='text-item'>
            <i class="iconfont icon-ziyuan" style='font-size: .42rem;'></i>
            <span class='text'>团人数达3人</span>
            <span class='text'>拼团成功</span>
          </li>
          <li class='text-item'>
            <i class="iconfont icon-weixin"></i>
            <span class='text'>查看老师联系方式</span>
            <span class='text'>关注微信公众号</span>
          </li>
          <li class='text-item'>
            <i class="iconfont icon-prepare-model"></i>
            <span class='text'>老师指导您</span>
            <span class='text'>完成课前准备</span>
          </li>
        </ul>
      </div>
  	    
  	  <div class='divider'></div>

  	  <!-- 课程信息 -->
  	  <div class='class-wrap'>
  	    <div class='class-top'>
  	      <h6 class='class-title'>{{courseTitle}}</h6>
  	      <div class='class-info'>预约上课时间<span class="dot">·</span>每晚19:00开课<span class="dot">·</span>一天两节课</div>
  	    </div>
  	    <div class="class-price">
  	      <span v-if="showAlone">单独购</span><span class='tuan-price' v-else>3人拼团价</span><span>￥{{finalPrice}}</span>
  	    </div>
  	  </div>

  	  <!-- 手机号码 -->
  	  <div class='form-block'>
  	    <div class='block-title'>家长手机号<span class='star'>*</span></div>
  	    <div class='block-content'>
  	      <input type='number' placeholder='请输入手机号，仅用于班主任家访' v-model='phone' />
  	    </div>
  	  </div>

  	  <!-- 联系地址 -->
  	  <div class='form-block'>
  	    <div class='block-title'>联系地址<span class='star'>*</span></div>
  	    <div class='block-content'>
  	      <input type='text' placeholder='请输入联系地址，用于寄送礼品' v-model='address' />
  	    </div>
  	  </div>

  	  <!-- 支付方式 -->
  	  <div class='form-block'>
  	    <div class='block-title'>支付方式</div>
  	    <div class='block-content'>
  	      <div class='left'>
  	        <i class="iconfont icon-weixinzhifu"></i>
  	        <span class='text'>微信支付</span>
  	      </div>
  	      <i class="right iconfont icon-gou"></i>
  	    </div>
  	  </div>
  	</div>

    <PayBtn :phone='phone' :address='address'></PayBtn>
  </div>
</template>

<script type="text/javascript">
import PayBtn from '@/components/payBtn.vue'

export default {
  components: {
    PayBtn
  },

  data () {
  	return {
      type: '',
      courseTitle: '',
  	  oldPrice: 199,
  	  finalPrice: 0,
  	  showAlone: false,
      phone: '',
      address: ''
  	}
  },

  mounted () {
    this.type = this.$store.getters.getBuyType
    this.courseTitle = this.$route.query.courseTitle

    // 改变价格
    if(this.type == 1 || this.type == 3){
      this.finalPrice = 9.9
    } else {
      this.finalPrice = 49
    }

    // 改变拼团步骤
    if(this.type == 2){
      this.showAlone = true
    }
  }
}
</script>

<style lang="stylus" scoped>
.container{
  height: 100vh;
  background-color: #f6f6f6;
}
.step-wrap{
  position: relative;
  padding: .25rem 0;
  background-color: #fff;
}
.step-wrap .icon-list{
  position: absolute;
  top: .4rem;
}
.step-group .icon-list{
  left: 20%;
  width: 80%;
  font-size: 0;
}
.step-alone .icon-list{
  left: 30%;
  width: 70%;
  font-size: 0;
}
.step-wrap .icon-list .iconfont{
  display: inline-block;
  font-size: .2rem;
  color: #e4bc98;
}
.step-group .icon-list .iconfont{
  margin-right: 28%;
}
.step-alone .icon-list .iconfont{
  margin-right: 40%;
}
.text-list{
  display: flex;
  justify-content: space-around;
  padding: 0 2%;
  font-size: 0;
}
.text-item{
  text-align: center;
}
.text-item .iconfont{
  height: .6rem;
  line-height: .6rem;
  font-size: .5rem;
  color: #fe6100;
}
.text-item .text{
  display: block;
  line-height: .28rem;
  text-align: center;
  font-size: .2rem;
  color: #333;
}
.divider{
  width: 100%;
  height: 4px;
  background-color: #f6f6f6;
}
.class-wrap{
  padding: .3rem .3rem .25rem .3rem;
  background-color: #fff;
}
.class-top{
  padding-bottom: .05rem;
  border-bottom: 1px solid #eee;
}
.class-title{
  font-weight: normal;
  font-size: .25rem;
}
.class-info{
  margin: .1rem 0 .2rem 0;
  font-size: .2rem;
  color: #666;
}
.class-info .dot{
  margin: 0 3px;
}
.class-price{
  margin-top: .25rem;
  text-align: right;
  font-size: .2rem;
}
.class-price span{
  margin-left: .2rem;
}
.class-price .tuan-price{
  color: #F2022D;
}
.block-title{
  padding: .2rem .3rem;
  font-size: .22rem;
  background-color: #f6f6f6;
}
.block-title .star{
  color: red;
}
.block-content{
  display: flex;
  justify-content: space-between;
  padding: .2rem .3rem;
  height: .3rem;
  line-height: .3rem;
  color: #666;
  background-color: #fff;
}
.block-content input{
  width: 100%;
  font-size: .22rem;
  color: #666;
  border: none;
}
button:after{
  border: none;
}
.left{
  display: flex;
  justify-content: flex-start;
}
.left .iconfont{
  margin-right: .1rem;
  font-size: .4rem;
  color: #1fb424;
}
.left .text{
  font-size: .22rem;
  color: #000;
}
.right{
  font-size: .25rem;
  color: #f48140;
}
</style>