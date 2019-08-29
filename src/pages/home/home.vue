<template>
  <div>
    <div class="poster">
      <a href="subject_1_order.html" target="_self">
        <img class="poster" src="http://www.yueqian.com.cn/zc/Public/Small/image/headimg_2.jpg" alt="">
      </a>
    </div>

    <div class='slogan'>现在报名，抢暑期专属课程名额</div>

    <!-- 拼团价 -->
    <div class='course-title-wrap'>
      <div class='course-price'>
        <div class="price-left">
          <span class='group-title'>3人拼团价</span>
          <span class='group-price'>￥{{groupPrice}}</span>
          <span class='original-price'>￥{{oldPrice}}</span>
        </div>
        <div class='price-right'>剩余{{restNum}}名额</div>
      </div>
      <h1 class='course-title'>线上4节编程课+精美彩笔</h1>
    </div>

    <!-- 无理由退 -->
    <div class='course-notice' @click='handleNotice'>
      <div class='notice-left'>
        <i class="iconfont icon-gouhao"></i>
        <span class='text'>7天无理由退</span>
        <i class="iconfont icon-gouhao"></i>
        <span class='text'>拼团说明</span>
        <i class="iconfont icon-gouhao"></i>
        <span class='text'>上课说明</span>
      </div>
      <i class="notice-right iconfont icon-youjiantou"></i>
    </div>

    <div class='divider'></div>

    <div class='group-num'>{{groupNum}}人在拼团，可直接参与</div>

    <!-- 去参团 -->
    <div :class='groupClass'>
      <div class='join-group-left'>
        <img src='https://wx.qlogo.cn/mmopen/vi_32/4ct72yq76gTEtf11cyiajkPoTvKB9PXTUia078ogMvt3rxdicmeFS1YMSWQmRlLptjfk8WFf23WBqCKaRnvdNRCPA/132' />
        <span>{{groupName}}</span>
      </div>
      <div class='join-group-right'>
        <div class='join-group-countdown'>
          <div class='lest-num'><span>只差</span><span class='orange'>1人</span><span>成团</span></div>
          <div class='timer'>剩余{{timeLeft}}</div>
        </div>
        <button class='join-group-button' @click='toPageClass'>去参团</button>
      </div>
    </div>

    <div class='divider'></div>

    <!-- 拼团步骤 -->
    <div class='step-wrap step-group'>
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

    <!-- 教师简介 -->
    <div class='teacher-brief-wrap'>
      <div class='teahcer-title'>授课老师简介</div>
      <div class='teacher-brief' @click='handleTeacher'>
        <div class='teacher-brief-left'>
          <img src='https://www.yueqian.com.cn/zc/Public/Small/image/teacher_head.png' />
          <div class='teacher-name'>
            <div class='name'>{{teacherName}}</div>
            <div class='title'>{{teacherPosition}}</div>
          </div>
        </div>
        <i class="iconfont icon-youjiantou teacher-brief-right"></i>
      </div>
    </div>

    <!-- 赠送 -->
    <img class='gift' src='http://www.yueqian.com.cn/zc/Public/Small/image/second_img.jpg' />

    <!-- 为什么选择 -->
    <div class="why block">
      <div class="wrap">
        <h1 class="block-h1">为什么学编程</h1>
        <h2 class="block-h2">选择粤嵌的4大理由</h2>

        <ul class="why-list clearfix">
          <li>
            <div class="reason-icon">
              <img src="../../assets/image/icon_teach.png" />
            </div>
            <h6>定制化教学</h6>
            <p>根据孩子情况量身定制课程</p>
          </li>
          <li>
            <div class="reason-icon">
              <img src="../../assets/image/icon_platform.png" />
            </div>
            <h6>趣味课堂</h6>
            <p>游戏化教学，让课堂变得更有趣</p>
          </li>
          <li>
            <div class="reason-icon">
              <img src="../../assets/image/icon_review.png" />
            </div>
            <h6>多样化复习平台</h6>
            <p>方便孩子巩固学习，自我提升</p>
          </li>
          <li>
            <div class="reason-icon">
              <img src="../../assets/image/icon_brand.png" />
            </div>
            <h6>强大的品牌</h6>
            <p>粤嵌10余年品牌，研发+培训一体</p>
          </li>
        </ul>
      </div>
    </div>

    <!-- 都在学 -->
    <div class='all-study'>
      <div class="wrap">
          <div class='all-study-title'>全国1550万孩子都在学编程</div>
          <div class='all-study-content'>
            <div>
                <img src='../../assets/image/study_left.png' />
            </div>
              <div>
                <div class='study-block'>
                  <p class='study-title'>2018年</p>
                  <p class='study-desc'>浙江省将信息科技作为选考科目</p>
                  <p class='study-desc'>山东省将编程加入小学六年级教材</p>
                  <p class='study-desc'>南京、苏州、天津等地将编程纳入考试</p>
                  <p class='study-desc'>重庆市要求3-6年级开始学习编程</p>
                </div>
                <div class='study-block'>
                    <p class='study-title'>2017年</p>
                    <p class='study-desc'>《新一代人工智能发展规划》提出在中小学推广编程教育</p>
                </div>
              </div>
          </div>
          <p class='all-study-bottom'>英语让孩子走向世界，编程让孩子通往未来</p>
      </div>
    </div>

    <div class='divider'></div>

    <!-- 课程内容 -->
    <div class="course-content block">
      <div class="wrap">
        <h1 class="block-h1">课程内容</h1>
        <h2 class="block-h2">完整科学的进阶体系</h2>

        <!-- 符合国家标准 -->
        <div class='standard-wrap'>
          <div class='standard'>
            <i class="standard-left iconfont icon-iconfront-"></i>
            <div class='standard-right'>
              <p class='padding-left'>对标国际公认 K12 阶段计算机科学标准</p>
              <p>《美国计算机教师协会标准》(CSTA)</p>
            </div>
          </div>
          <div class='standard'>
            <i class="standard-left iconfont icon-iconfront-"></i>
            <div class='standard-right'>
              <p class='padding-left'>结合2017年颁布的《信息技术课程标准》</p>
            </div>
          </div>
          <div class='standard'>
            <i class="standard-left iconfont icon-iconfront-"></i>
            <div class='standard-right'>
              <p class='padding-left'>结合中国电子学会出台的</p>
              <p>《全国青少年软件编程等级考试标准》</p>
            </div>
          </div>

          <ul class="course-menu">
            <li :class="courseIndex == 0 ? 'on' : ''" @click='handleSwitchCourse(0)'>
              <div>Scratch·低年级课</div>
              <img src="../../assets/image/down_arrow.png" alt="">
            </li>
            <li :class="courseIndex == 1 ? 'on' : ''" @click='handleSwitchCourse(1)'>
              <div>Python·高年级课</div>
              <img src="../../assets/image/down_arrow.png" alt="">
            </li>
          </ul>

          <div class="course-body">
            <img :class="courseIndex == 0 ? 'on' : ''" src="../../assets/image/SC.png" alt="SC课程">
            <img :class="courseIndex == 1 ? 'on' : ''" src="../../assets/image/PY.png" alt="PY课程">
          </div>
        </div>
      </div>
    </div>

    <div class='divider'></div>

    <!-- 优质师资 -->
    <div class="teacher block">
      <div class="wrap">
        <h1 class="block-h1">优质师资</h1>
        <h2 class="block-h2">一切为了孩子</h2>
        <div class="teacher-main">
          <ul class="clearfix">
            <li>
              <img src="../../assets/image/teacher_1.png" />
              <h6>余爽</h6>
              <p>人气编程讲师</p>
            </li>
            <li>
              <img src="../../assets/image/teacher_2.png" />
              <h6>冯盈盈</h6>
              <p>人气编程讲师</p>
            </li>
            <li>
              <img src="../../assets/image/teacher_3.png" />
              <h6>杨春</h6>
              <p>人气编程讲师</p>
            </li>
            <li>
              <img src="../../assets/image/teacher_4.png" />
              <h6>刘大钊</h6>
              <p>人气编程讲师</p>
            </li>
            <li>
              <img src="../../assets/image/teacher_5.png" />
              <h6>梁志荣</h6>
              <p>人气编程讲师</p>
            </li>
            <li>
              <img src="../../assets/image/teacher_6.png" />
              <h6>刘嘉敏</h6>
              <p>人气编程讲师</p>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class='divider'></div>

    <!-- 上课方式 -->
    <div class='course-style block'>
      <div class="wrap">
        <p class='big-title'>上课方式灵活便利 时间高效利用</p>
        <p class='small-title'>电脑+网线就能学，每晚均可上课</p>
        <img src='../../assets/image/sleep.jpg' />
      </div>
    </div>

    <div class='divider'></div>

    <!-- 家长评价 -->
    <div class='course-style block'>
      <div class="wrap">
        <p class='big-title'>关于粤嵌小创客 他们想说</p>
        <p class='small-title'>以下来自家长的真实评论</p>
        <ul class='evaluation-list'>
          <li class='evaluation-item'>体验很棒</li>
          <li class='evaluation-item'>教师很好</li>
          <li class='evaluation-item'>5A教学服务</li>
          <li class='evaluation-item'>平台超赞</li>
        </ul>
        <img src='../../assets/image/evaluate.png' />
    </div>
    </div>

    <div class='divider'></div>

    <!-- 常见问题 -->
    <div class='course-content-title block'>
      <div class="wrap">
          <h1 class="block-h1">常见问题</h1>
          <h2 class="block-h2">上课方式灵活便利</h2>
        <div class='question-item' style="margin-top: .25rem;">
            <div class='question-title'>有电脑（需要摄像头＋麦克风）就能上课</div>
            <p class='question-answer'>下载学生客户端就能上课，支持 xp及以上电脑、苹果电脑。</p>
        </div>
        <div class='question-item'>
            <div class='question-title'>客户端安装问题</div>
            <p class='question-answer'>如果客户端安装有问题，可以寻求老师在线帮助。</p>
        </div>
        <div class='question-item' style="padding: 0 2%;">
            <div class='question-title'>电脑设备问题</div>
            <p class='question-answer'>为了保证和孩子更好互动和引导孩子，上课前需要准备摄像头和麦克风。</p>
        </div>
      </div>
    </div>

    <!-- 可获服务 -->
    <div class='service-wrap'>
      <img src='../../assets/image/service_bg.png' />
      <div class='service-content'>
        <div class='service-price'>19.9<span>元</span></div>
        <p>即可获得以下全部服务</p>
        <ul class="service-list">
          <li class='service-item'>
              <i class="iconfont icon-gou"></i>
              <span class='notice'>4次课程，老师在线面对面教学</span>
          </li>
          <li class='service-item'>
              <i class="iconfont icon-gou"></i>
              <span class='notice'>专属陪伴，微信在线答疑</span>
          </li>
          <li class='service-item'>
              <i class="iconfont icon-gou"></i>
              <span class='notice'>小班教学，能够关注每一个孩子的学习</span>
          </li>
          <li class='service-item'>
              <i class="iconfont icon-gou"></i>
              <span class='notice'>孩子能够做出刷爆朋友圈的编程作品</span>
          </li>
        </ul>
      </div>
    </div>

    <Activity :isShow='showNotice' @handleNotice="handleNotice" v-show='showNotice'></Activity>
    <Teacher :isShow='showTeacher' @handleTeacher="handleTeacher" v-show='showTeacher'></Teacher>
    <AloneBuy @handleAlone="handleAlone" v-show='showAlone'></AloneBuy>
    <IndexBtn @handleAlone="handleAlone"></IndexBtn>
  </div>
</template>

<script>
import '../../assets/style/index.css'
import { getTimeLeft } from '../../../static/util.js'
import Activity from '@/components/activity.vue'
import Teacher from '@/components/teacher.vue'
import AloneBuy from '@/components/aloneBuy.vue'
import IndexBtn from '@/components/indexBtn.vue'
import { mapState } from 'vuex'

export default {
  components: {
    Activity,
    Teacher,
    AloneBuy,
    IndexBtn
  },

  data () {
    return {
      groupPrice: 9.9,
      oldPrice: 199,
      restNum: 50,
      groupNum: 2,

      groupClass: 'join-group',
      groupName: '自由小鸟2.0',
      timeLeft: '',
      endTime: '',
      timer: '',
      teacherName: '李迎春',
      teacherPosition: '金牌导师',
      courseIndex: 0,

      showNotice: false,
      showTeacher: false,
      showAlone: false
    }
  },

  computed: {
    ...mapState({
      message: state => state.obj.message
    })
  },

  created () {
    // 获取拼团信息
    this.axios({
      method: 'POST',
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      url: this.baseUrl + 'index.php?m=Api&c=Index&a=getGroup'
    }).then((res) =>{ 
      this.endTime = res.data.data.end * 1000
    }).catch((error) =>{
      console.log(error) 
    })
  },

  mounted () {
    window.addEventListener('scroll', this.handleScroll);

    // 设置倒计时
    this.timer = setInterval(() => {
      this.timeLeft = getTimeLeft(this.endTime)

      if (this.timeLeft == "00:00:00") {
        clearInterval(this.timer);
      }
    }, 1000);
  },

  methods: {
    // 滚动将“去参团”置顶
    handleScroll () {
      let scrollY = window.scrollY;

      if (scrollY > 464) {
        this.groupClass = 'join-group-fixed'
      } else {
        this.groupClass = 'join-group'
      }
    },

    handleSwitchCourse (index) {
      this.courseIndex = index
    },

    // 显示活动提示
    handleNotice () {
      this.showNotice = !this.showNotice
    },

    // 显示教师介绍
    handleTeacher () {
      this.showTeacher = !this.showTeacher
    },

    // 显示单独购买
    handleAlone (data) {
      this.showAlone = data
    },

    // 跳转到选择课程页面
    toPageClass () {
      this.$store.commit('updateBuyType', 1)
      this.$router.push({path: '/course'})
    }
  }
}
</script>
