<template>
  <!-- 活动说明 -->
  <div class='popup-outer' @click="handleHide">
    <div class='popup-inner-bottom' @click="handleStay(this)">
      <h1 class='popup-title'>活动说明</h1>
      <ul class='activity-content'>
        <li class='activity-item'>
          <div class='activity-title'>
            <div class='title-left'>
              <i class="iconfont icon-gouhao"></i>
              <span class='text'>7天无理由退</span>
            </div>
          </div>
          <p class='activity-notice'>日常班开课7天内不满意可全额退款。</p>
        </li>
        <li class='activity-item'>
          <div class='activity-title'>
            <div class='title-left'>
              <i class="iconfont icon-gouhao"></i>
              <span class='text'>拼团玩法说明</span>
            </div>
            <div class='title-right'>
              <span class='text' @click='toPageNotice'>查看详情</span>
              <i class="iconfont icon-youjiantou"></i>
            </div>
          </div>
          <p class='activity-notice'>拼团时间24小时，24小时内未成团将由微信原路退回。</p>
        </li>
        <li class='activity-item'>
          <div class='activity-title'>
            <div class='title-left'>
              <i class="iconfont icon-gouhao"></i>
              <span class='text'>上课说明</span>
            </div>
          </div>
          <p class='activity-notice'>拼团成功后，需关注[粤嵌小创客在线]公众号，才能正常上课！</p>
        </li>
      </ul>
      <div class='popup-button' @click='handleHide'>知道了</div>
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
      this.$emit('handleNotice')
    },

    toPageNotice () {
      this.$router.push({path: '/notice'})
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

.activity-content{
  margin: .3rem 0;

  .activity-item{
    padding: 0 3%;

    .activity-title{
      display: flex;
      justify-content: space-between;
      height: .32rem;
      line-height: .32rem;
      font-size: .22rem;
    }

    .title-left{
      .iconfont{
        font-size: .22rem;
        color: #ff9f2f;
      }

      .text{
        color: #333;
      }
    } 

    .title-right{
      color: #6981c1;
    }

    .activity-notice{
      margin: .1rem 0;
      line-height: .32rem;
      font-size: .22rem;
      color: #666;
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
