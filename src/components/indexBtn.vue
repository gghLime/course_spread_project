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
    <div class='footer-btn-list'>
      <a class='footer-btn btn-border service-btn' target="_self" href="https://tb.53kf.com/code/client/01fd780051002b7b56d926c7c3241c45/1">
        <span class="iconfont icon-lianximaijia"></span>
        <span class='gray small'>咨询</span>
      </a>
      <div class='footer-btn btn-border' @click='showAlone'>
        <span class='black big'>￥{{alonePrice}}</span>
        <span class='gray small'>单独购买</span>
      </div>
      <div class='footer-btn btn-bg' @click='toPageClass'>
        <span class='white big'>￥{{groupPrice}}</span>
        <span class='white small'>我要开团</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isShow: true,
      alonePrice: 49,
      groupPrice: 9.9,
      swiperData: '',
      currentIndex: 0,
      carouselTimer: null
    }
  },

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

    // 跳转到选择课程页面
    toPageClass () {
      this.$store.commit('updateBuyType', 3)
      this.$router.push({path: '/course'})
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
.footer-btn-list{
  display: flex;
  justify-content: space-between;
  padding: .1rem 3%;
  background-color: #fff;
}
.footer-btn{
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-right: 2%;
  width: 40%;
  height: .8rem;
  line-height: 1;
  text-align: center;
  border-radius: .05rem;
  box-sizing: border-box;
}
.footer-btn:last-child{
  margin-right: 0;
}
.service-btn{
  flex: 1;
  padding: 0;
  background-color: #fff;
}
.footer-btn-list .btn-border{
  border: 1px solid #ddd;
}
.footer-btn-list .btn-bg{
  background: -webkit-linear-gradient(left, #ff650d, #ffa74d);
  background: -o-linear-gradient(left, #ff650d, #ffa74d);
  background: -moz-linear-gradient(left, #ff650d, #ffa74d);
  background: linear-gradient(left, #ff650d, #ffa74d);
}
.footer-btn .iconfont{
  height: .45rem;
  line-height: .45rem;
  font-size: .45rem;
  color: #666;
}
.footer-btn .big{
  margin-bottom: 2px;
  height: .3rem;
  line-height: .3rem;
  font-size: .3rem;
}
.footer-btn .small{
  height: .2rem;
  line-height: .2rem;
  font-size: .2rem;
}
.footer-btn .black{
  color: #000;
}
.footer-btn .gray{
  color: #666;
}
.footer-btn .white{
  color: #fff;
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
