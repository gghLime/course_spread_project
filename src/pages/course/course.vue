<template>
  <div>
    <div class="container">
  	  <div class="current-class" @click='openClass'>
  	    孩子年级 : {{currentClass}}<span class="iconfont icon-xiajiantou"></span>
  	  </div>

  	  <p class="tip">温馨提示：本课程可支持Win7及以上电脑、苹果电脑</p>

  	  <div class='class-wrap' @click='toPageOrder'>
  	    <div class='class-top'>
  	      <div class='class-left'>
  	        <h6 class='class-title'>{{currentTitle}}</h6>
  	        <div class='class-info'>预约上课时间<span class="dot">·</span>每晚19:00开课<span class="dot">·</span>一天两节课</div>
  	      </div>
  	      <span class="class-right iconfont icon-youjiantou"></span>
  	    </div>
  	    <div class='teacher-wrap'>
  	      <div class='teacher'>
  	        <img src='https://www.yueqian.com.cn/zc/Public/Small/image/teacher_head.png' />
  	        <div class='teacher-info'>
  	          <span class='name'>李迎春</span>
  	          <span class='position'>金牌导师</span>
  	        </div>
  	      </div>
  	    </div>
  	  </div>
  	</div>

  	<!-- 弹出框 -->
  	<div class='popup-outer' v-show='showPopup' @click='closePopup'>
  	  <ul class='popup-inner-middle'>
  	    <li class='popup-item' @click="handleStay(this)">请选择孩子年龄</li>
  	    <li class='popup-item' data-num='0' @click="closeClass($event)">6岁-9岁(低年级)</li>
  	    <li class='popup-item' data-num='1' @click="closeClass($event)">10岁-16岁(高年级)</li>
  	  </ul>
  	</div>
  </div>
</template>

<script type="text/javascript">
export default {
  data () {
  	return {
      showPopup: false,
  	  currentClass: "6岁-9岁 (低年级)",
  	  currentTitle: "暑假班5期低年级班",
  	  classList:[
    		"6岁-9岁 (低年级)",
    		"10岁-16岁 (高年级)"
  	  ],
  	  titleList: [
    		"暑假班5期低年级班",
    		"暑假班5期高年级班"
  	  ]
  	}
  },

  mounted () {
    this.openClass()
  },

  methods: {
    // 打开弹出框
    openClass () {
      this.showPopup = true
    },

    // 选择课程之后关闭弹出框
    closeClass (e) {
      var index = e.target.getAttribute('data-num');
      
      this.showPopup = false,
      this.currentClass = this.classList[index],
      this.currentTitle = this.titleList[index]
    },

    // 点击课程标题则不关闭弹出框
    handleStay (event) {
      event = event || window.event;
      event.stopPropagation();
    },

    // 不选择课程关闭弹出框
    closePopup () {
      this.showPopup = false
    },

    // 跳转到订单页面
    toPageOrder () {
      this.$router.push({
        path: '/order',
        query: {
          courseTitle: this.currentTitle
        }
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
.container {
  height: 100vh;
  background-color: #f6f6f6;
}
.current-class{
  padding: .2rem 0;
  width: 100%;
  text-align: center;
  font-size: .25rem;
  background-color: #fff;
  border-top: 1px solid #eee;
}
.current-class .iconfont{
  margin-left: .1rem;
  font-size: .2rem;
  color: #666;
}
.tip{
  padding: .2rem 0;
  text-align: center;
  font-size: .2rem;
  color: #666;
}
.class-wrap{
  margin: 0 3%;
  padding: .4rem .3rem;
  background-color: #fff;
  border-radius: .1rem;
  box-shadow: 0 1px 10px 1px rgba(0, 0, 0, .1);
}
.class-top{
  display: flex;
  justify-content: space-between;
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
.class-right{
  font-size: .25rem;
  color: #666;
}
.teacher-list{
  display: flex;
  justify-content: flex-start;
}
.teacher-wrap{
	font-size: 0;
}
.teacher{
  display: flex;
  justify-content: flex-start;
  margin-right: .4rem;
  padding-bottom: 0;
}
.teacher img{
  margin-right: .1rem;
  width: .7rem;
  height: .7rem;
  border: 1px solid #eee;
  border-radius: 100%;
}
.teacher-info{
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.teacher-info .name{
  display: block;
  margin-bottom: 2px;
  font-size: .25rem;
}
.teacher-info .position{
  display: block;
  font-size: .2rem;
  color: #666;
}
.popup-outer{
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  text-align: center;
  background-color: rgba(0, 0, 0, .4);
  z-index: 1;
}
.popup-inner-middle{
  margin: 0 auto;
  width: 90%;
  background-color: #fff;
  border-radius: .05rem;
}
.popup-item{
  padding: .3rem 0;
  text-align: center;
  font-size: .25rem;
  border-bottom: 1px solid #eee;
}
.popup-item:last-child{
  border-bottom: none;
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