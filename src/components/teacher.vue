<template>
  <!-- 老师资料 -->
  <div class='popup-outer' @click="handleHide">
    <div class='popup-inner-bottom' @click="handleStay(this)">
      <img src='https://www.yueqian.com.cn/zc/Public/Small/image/teacher.jpg' />
      <div class='popup-button' @click='handleHide'>确定</div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },

  methods: {
    handleStay (event) {
        event = event || window.event;
        event.stopPropagation();
    },
    
    handleHide () {
      this.$emit('handleTeacher')
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

    img{
      width: 100%;
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
