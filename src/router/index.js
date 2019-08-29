import Vue from 'vue'
import Router from 'vue-router'

import home from '@/pages/home/home.vue'
import notice from '@/pages/notice/notice.vue'
import course from '@/pages/course/course.vue'
import order from '@/pages/order/order.vue'

Vue.use(Router)

const router = new Router({
  // mode: 'history',
  routes: [
    {
      // 首页
      path: '/home',
      component: home,
      meta:{
        title: '首页'
      }
    },
    {
      // 活动说明
      path: '/notice',
      component: notice,
      meta:{
        title: '活动说明'
      }
    },
    {
      // 课程选择
      path: '/course',
      component: course,
      meta:{
        title: '课程选择'
      }
    },
    {
      // 订单页面
      name: 'order',
      path: '/order',
      component: order,
      meta:{
        title: '购买课程'
      }
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 300 }
  }
})

router.push('/home')

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }

  //执行进入路由，如果不写就不会进入目标页
  next()
})

export default router
