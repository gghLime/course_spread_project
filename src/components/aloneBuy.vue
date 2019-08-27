<template>
  <!-- 单独购买 -->
  <div class='popup-outer' @click="handleHide">
    <div class='popup-inner-bottom' @click="handleStay(this)">
      <div class='popup-title'>活动说明<span class='popup-close' @click='handleHide'>X</span></div>
      <div class='alone-content'>
        <p>确定单独购买，而不选择更便宜的拼团？</p>
        <div class='popup-button' @click='toPageClass'>确定单独购买</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isShow: false
    }
  },

  methods: {
    handleStay (event) {
        event = event || window.event;
        event.stopPropagation();
    },
    
    handleHide () {
      this.$emit('handleAlone', this.isShow)
    },

    toPageClass () {
      this.$emit('handleAlone', this.isShow)
      this.$store.commit('updateBuyType', 2)
      this.$router.push({path: '/course'})
    }
  }
}
</script>

<style lang="stylus" scoped>
.popup-outer{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  font-size: 0;
  background-color: rgba(0, 0, 0, .4);
  z-index: 100;

  .popup-inner-bottom{
    position: absolute;
    left: 0;
    bottom: 0;
    padding: .3rem 5%;
    width: 90%;
    background-color: #fff;

    .popup-title{
      position: relative;
      height: .4rem;
      line-height: .4rem;
      font-weight: bold;
      font-size: .4rem;
      text-align: center;

      .popup-close{
        position: absolute;
        top: 0;
        right: 0;
        font-size: .3rem;
        color: #999;
      }
    }

    .alone-content p{
      margin: .25rem auto;
      width: 48%;
      line-height: .32rem;
      text-align: center;
      font-size: .22rem;
      color: #333;
    }

    .popup-button{
      width: 100%;
      height: .6rem;
      line-height: .6rem;
      text-align: center;
      font-size: .25rem;
      color: #fff;
      background: -webkit-linear-gradient(to right, #ff650d, #ffa74d);
      background: -o-linear-gradient(to right, #ff650d, #ffa74d);
      background: -moz-linear-gradient(to right, #ff650d, #ffa74d);
      background: linear-gradient(to right, #ff650d, #ffa74d);
      border-radius: .05rem;
    }
  }
}

@media screen and (min-width: 1025px){
  .popup-outer{
    left: 50%;
    margin-left: -384px;
    width: 766px;
    border-left: 1px solid #ccc;
    border-right: 1px solid #ccc;
  }
}
</style>
