import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
//解决重复点击报错问题
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
const routes = [
  // 使用路由模式完成页面跳转
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    meta: {
      title: '永基首页'
    },
    name: 'home',
    component: resolve => (require(["@/views/home/Home.vue"], resolve))
  },
  {
    path:'/hotInformation',
    name:'hotInformation',
    component: resolve => (require(["@/views/hotInformation/HotInformation.vue"], resolve)),
    meta:{
      title:'热点新闻资讯'
    }
  },
  {
    path:'/subsidiary',
    name:'subsidiary',
    component: resolve => (require(["@/views/subsidiary/Subsidiary.vue"], resolve)),
    meta:{
      title:"分公司介绍"
    }
  },
  {
    path:"/allsubsidiary",
    name:'allsubsidiary',
    component: resolve => (require(["@/views/allSubsidiary/AllSubsidiary.vue"], resolve)),
    meta:{
      title:"全部分公司"
    }
  },
  {
    path:'/hotNews',
    name:'hotNews',
    component: resolve => (require(["@/views/hotNews/HotNews.vue"], resolve)),
    meta:{
      title:"热点新闻"
    }
  },
  {
    path:'/allHotNews',
    name:'allHotNews',
    component: resolve => (require(["@/views/allHotNews/AllHotNews.vue"], resolve)),
    meta:{
      title:"更多热点新闻"
    }
  },
  {
    path:'/moreTalentRecruitment',
    name:'moreTalentRecruitment',
    component: resolve => (require(["@/views/moreTalentRecruitment/moreTalentRecruitment.vue"], resolve)),
    meta:{
      title:'更多人才招聘'
    }
  },
  {
    path:'/allMoreNewsInformation',
    name:'allMoreNewsInformation',
    component: resolve => (require(["@/views/allMoreNewsInformation/allMoreNewsInformation.vue"], resolve)),
    meta:{
      title:"更多新闻资讯"
    }
  },
  {
    path:'/allQualificationCertification',
    name:'allQualificationCertification',
    component: resolve => (require(["@/views/allQualificationCertification/allQualificationCertification.vue"], resolve)),
    meta:{
      title:"更多资质认证"
    }
  },
  {
    path:'/allMoreProjectIntroduction',
    name:'allMoreProjectIntroduction',
    component: resolve => (require(["@/views/allMoreProjectIntroduction/allMoreProjectIntroduction.vue"], resolve)),
    meta:{
      title:"更多工程介绍"
    }
  },
  {
    path:'/ProjectIntroduction',
    name:'ProjectIntroduction',
    component: resolve => (require(["@/views/ProjectIntroduction/ProjectIntroduction.vue"], resolve)),
    meta:{
      title:"工程介绍"
    }
  },
  {
    path:'/qualificationCertification',
    name:'qualificationCertification',
    component: resolve => (require(["@/views/qualificationCertification/QualificationCertification.vue"], resolve)),
    meta:{
      title:'资质认证'
    }
  },
  {
    path:'/learnMore',
    name:'learnMore',
    component: resolve => (require(["@/views/learnMore/learnMore.vue"], resolve)),
    meta:{
      title:'关于永基'
    }
  },
  {
    path:'/allMoreProductIntroduction',
    name:'allMoreProductIntroduction',
    component: resolve => (require(["@/views/allMoreProductIntroduction/allMoreProductIntroduction.vue"], resolve)),
    meta:{
      title:"更多产品介绍"
    }
  },
  {
    path:'/productIntroduction',
    name:'productIntroduction',
    component: resolve => (require(["@/views/productIntroduction/productIntroduction.vue"], resolve)),
    meta:{
      title:"产品介绍"
    }
  },
  {
    path:'/moreNewsInformation',
    name:'moreNewsInformation',
    component: resolve => (require(["@/views/moreNewsInformation/moreNewsInformation.vue"], resolve)),
    meta:{
      title:'新闻资讯'
    }
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component:  resolve => (require(["@/views/404/NotFound.vue"], resolve))
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})
//全局路由守卫，判定用户是否登录
router.beforeEach((to, from, next) => {
  // 设置页面标题
  let title = to.meta.title ? to.meta.title : ""
  document.title = title
  next()
})
export default router
