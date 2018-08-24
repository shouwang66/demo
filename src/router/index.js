import Vue from 'vue'
import Router from 'vue-router'

const index = r => require.ensure([], () => r(require('../pages/Index/index')), 'index') // 首页
const me = r => require.ensure([], () => r(require('../pages/MeCenter/index')), 'me') // 个人中心
const ccenter = r => require.ensure([], () => r(require('../pages/ChildCenter/index')), 'ccenter') // 亲子中心
const icenter = r => require.ensure([], () => r(require('../pages/InforCenter/index')), 'icenter') // 信息中心
const register = r => require.ensure([], () => r(require('../pages/Register/index')), 'register') // 注册
const bind = r => require.ensure([], () => r(require('../pages/Register/bind')), 'bind') // 注册绑定
const choose = r => require.ensure([], () => r(require('../pages/ChooseChild/index')), 'choose') // 选择孩子
const login = r => require.ensure([], () => r(require('../pages/Login/index')), 'login') // 登录
const query = r => require.ensure([], () => r(require('../pages/Login/querystunumber')), 'query') // 查询学生编号
const qresult = r => require.ensure([], () => r(require('../pages/Login/queryresult')), 'qresult') // 查询学生编号结果
const setting = r => require.ensure([], () => r(require('../pages/Setting/index')), 'setting')
const help = r => require.ensure([], () => r(require('../pages/Setting/Children/help')), 'help')
const feedback = r => require.ensure([], () => r(require('../pages/Setting/Children/feedback')), 'feedback')
const aboutus = r => require.ensure([], () => r(require('../pages/Setting/Children/aboutus')), 'aboutus')
const personcenter = r => require.ensure([], () => r(require('../pages/PersonCenter/index')), 'personcenter')
const changePhone = r => require.ensure([], () => r(require('../pages/ChangePhone/changePhone')), 'changePhone')
const oldPhone = r => require.ensure([], () => r(require('../pages/ChangePhone/oldPhone')), 'oldPhone')
const verifyPhone = r => require.ensure([], () => r(require('../pages/ChangePhone/verifyPhone')), 'verifyPhone')
const phoneSuccesss = r => require.ensure([], () => r(require('../pages/ChangePhone/phoneSuccesss')), 'phoneSuccesss')
const gold = r => require.ensure([], () => r(require('../pages/Gold/gold')), 'gold')
const collection = r => require.ensure([], () => r(require('../pages/Collection/collection')), 'collection')
const interest = r => require.ensure([], () => r(require('../pages/StudentInfo/interest')), 'interest')
const studentInfo = r => require.ensure([], () => r(require('../pages/StudentInfo/studentInfo')), 'studentInfo')
const acenter = r => require.ensure([], () => r(require('../pages/ActivityCenter/index')), 'acenter') // 活动(报名) 中心
const aapply = r => require.ensure([], () => r(require('../pages/ActivityApply/index')), 'aapply') // 活动报名（信息填写）
const myOrder = r => require.ensure([], () => r(require('../pages/MyOrder/myOrder')), 'myOrder') // 我的订单
const refundRecord = r => require.ensure([], () => r(require('../pages/MyOrder/refundRecord')), 'refundRecord') // 退款记录
const refundDetail = r => require.ensure([], () => r(require('../pages/MyOrder/refundDetail')), 'refundDetail') // 退款详情

// shawn
const wshop = r => require.ensure([], () => r(require('../pages/WShop/index')), 'wshop')
const wshopfilter = r => require.ensure([], () => r(require('../pages/WShop/children/shopfilter')), 'wshopfilter')
const search = r => require.ensure([], () => r(require('../pages/WShop/search')), 'search')
const searchres = r => require.ensure([], () => r(require('../pages/WShop/searchRes')), 'searchRes')
const detail = r => require.ensure([], () => r(require('../pages/WShop/detail')), 'detail')
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: index
    },
    {
      path: '/me',
      component: me
    },
    {
      path: '/ccenter',
      component: ccenter
    },
    {
      path: '/icenter',
      component: icenter
    },
    {
      path: '/wshop',
      component: wshop,
      redirect: '/wshop/all',
      children: [{
        path: ':id',
        component: wshopfilter
      }]
    },
    {
      path: '/search',
      component: search
    },
    {
      path: '/searchres',
      component: searchres
    },
    {
      path: '/detail/:id',
      component: detail
    },
    {
      path: '/login',
      component: login
    },
    {
      path: '/setting',
      component: setting
    },
    {
      path: '/help',
      component: help
    },
    {
      path: '/feedback',
      component: feedback
    },
    {
      path: '/aboutus',
      component: aboutus
    },
    {
      path: '/query',
      component: query
    },
    {
      path: '/qresult',
      component: qresult
    },
    {
      path: '/register',
      component: register
    },
    {
      path: '/bind',
      component: bind
    },
    {
      path: '/choose',
      component: choose
    },
    {
      path: '/personcenter',
      component: personcenter
    },
    {
      path: '/changePhone',
      component: changePhone
    },
    {
      path: '/oldPhone',
      component: oldPhone
    },
    {
      path: '/verifyPhone',
      component: verifyPhone
    },
    {
      path: '/phoneSuccesss',
      component: phoneSuccesss
    },
    {
      path: '/gold',
      component: gold
    },
    {
      path: '/collection',
      component: collection
    },
    {
      path: '/interest',
      component: interest
    },
    {
      path: '/studentInfo',
      component: studentInfo
    },
    {
      path: '/acenter',
      component: acenter
    },
    {
      path: '/aapply',
      component: aapply
    },
    {
      path: '/myOrder',
      component: myOrder
    },
    {
      path: '/refundRecord',
      component: refundRecord
    },
    {
      path: '/refundDetail',
      component: refundDetail
    }
  ]
})
