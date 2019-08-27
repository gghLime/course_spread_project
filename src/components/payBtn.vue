<template>
  <!-- 底部按钮 -->
  <div class='footer'>
    <!-- 轮播 -->
    <div class='slide-wrap'>
      <transition-group 
        tag="ul"  
        name='list' 
        class='slide-list'
        enter-active-class="animated fadeInUp"  
        leave-active-class="animated fadeOutUp"
      >
        <li 
          class='slide-item' 
          v-for="(item, index) in swiperData"
          :key="index+1"
          v-show="index === currentIndex"
        > 
          <img :src='item.headimgurl' />
          <span>{{item.nickname}}</span>
          <span>刚刚拼团成功了</span>
        </li>
      </transition-group>
    </div>

    <!-- 按钮 -->
    <div class='footer-wrap'>
      <div class='footer-price'>
        <div class='price-top'>
          <span class='big'>￥{{finalPrice}}</span>
          <span class='small'>￥{{oldPrice}}</span>
        </div>
        <div class='price-bottom'>不满意可退款</div>
      </div>
      <div class='footer-btn' @click="submitOrder">确认支付</div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      finalPrice: 0,
      oldPrice: 199,
      currentIndex: 0,
      swiperData: ''
    }
  },

  props: [
    'phone',
    'address'
  ],

  created () {
    // 获取轮播图数据
    this.axios({
      method: 'POST',
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      url: this.baseUrl + 'index.php?m=Api&c=Index&a=getSwiper'
    }).then((res) =>{ 
      this.swiperData = res.data.data
    }).catch((error) =>{
      console.log(error) 
    })
  },

  mounted () {
    this.begin()

    this.type = this.$store.getters.getBuyType;

    // 改变价格
    if(this.type == 1 || this.type == 3){
      this.finalPrice = 9.9
    } else {
      this.finalPrice = 49
    }
  },

  methods: {
    // 自动轮播
    autoPlay () {
      this.currentIndex++
      if (this.currentIndex == this.swiperData.length) {
        this.currentIndex = 0
      }
    },
    
    // 开始轮播
    begin () {
      this.carouselTimer = setInterval(this.autoPlay, 2000)
    },

    // 显示单独购买
    showAlone () {
      this.$emit('handleAlone', this.isShow)
    },

    submitOrder () {
      var phoneReg = /^1(3|4|5|6|7|8|9)\d{9}$/;

      if (this.phone == '') {
        alert('请填写手机号码！')
        return
      }

      if(!phoneReg.test(this.phone)){
        alert('请填写正确的手机号码！')
        return
      }

      if (this.address == '') {
        alert('请填写联系地址！')
        return
      }

      console.log('电话：'+this.phone+'，'+'联系地址：'+this.address)
      alert('信息提交成功，稍后老师会与您联系。')
    }
  }
}
</script>

<style lang="stylus" scoped>
.footer{
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  z-index: 1;
}
.slide-wrap{
  position: relative;
  width: 100%;
  height: .5rem;
  background-color: #fff4f2;
  overflow: hidden;
}
.slide-list{
  position: absolute;
  top: 0;
  width: 100%;
  height: .5rem;
}
.slide-item{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: .5rem;
  line-height: .5rem;
  text-align: center;
}
.slide-item img{
  margin-right: 4px;
  width: .3rem;
  border-radius: .3rem;
}
.slide-item span{
  margin: 0 2px;
  font-size: .25rem;
  color: #bf9982;
}
.footer-wrap{
  display: flex;
  justify-content: space-between;
  padding: .1rem .3rem;
  background-color: #fff;
}
.footer-price{
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.price-top{
  display: flex;
  justify-content: flex-start;
  margin-bottom: 4px;
  height: .25rem;
  line-height: .25rem;
}
.price-top .big{
  font-weight: bold;
  font-size: .3rem;
  color: #F2022D;
}
.price-top .small{
  margin: 1px 0 0 .1rem;
  font-size: .2rem;
  color: #666;
  text-decoration: line-through;
}
.price-bottom{
  font-size: .2rem;
  color: #666;
}
.footer-btn{
  width: 40%;
  height: .8rem;
  line-height: .8rem;
  text-align: center;
  font-size: .35rem;
  color: #fff;
  background: -webkit-linear-gradient(to right, #ff650d, #ffa74d);
  background: -o-linear-gradient(to right, #ff650d, #ffa74d);
  background: -moz-linear-gradient(to right, #ff650d, #ffa74d);
  background: linear-gradient(to right, #ff650d, #ffa74d);
  border-radius: .05rem;
}

@media screen and (min-width: 1025px){
  .footer{
    left: 50%;
    margin-left: -384px;
    width: 766px;
    border-left: 1px solid #ccc;
    border-right: 1px solid #ccc;
  }
}
</style>
