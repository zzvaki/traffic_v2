import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  base: process.env.BASE_URL,
  // scrollBehavior (to, from, savedPosition) {
  //   return { x: 0, y: 0 }
  // },
  routes: [
    {
      path: '/',
      name: 'home',
      component(){
        return import('./views/Home.vue')
      },
      meta: {
        title: '大交管'
      }
    },
    {
      path: '/notification',
      name: 'Notification',
      component(){
        return import('./views/Notification/List.vue')
      },
      meta: {
        title: '大交管'
      }
    },
    {
      path: '/notification/detail',
      name: 'NotificationDetail',
      component(){
        return import('./views/Notification/Detail.vue')
      },
      meta: {
        title: '通知详情'
      }
    },
    {
      path: '/notification/detail/meeting',
      name: 'NotificationDetailMeeting',
      component(){
        return import('./views/Notification/DetailMeeting.vue')
      },
      meta: {
        title: '会议详情'
      }
    },
    {
      path: '/notification/received',
      name: 'NotificationReceived',
      component(){
        return import('./views/Notification/Received.vue')
      },
      meta: {
        title: '通知通报签收单位'
      }
    },
    {
      path: '/notification/create',
      name: 'NotificationCreate',
      component(){
        return import('./views/Notification/Create.vue')
      },
      meta: {
        title: '通知通报发布'
      }
    },
    {
      path: '/notification/create/meeting',
      name: 'NotificationCreateMeeting',
      component(){
        return import('./views/Notification/CreateMeeting.vue')
      },
      meta: {
        title: '发布新会议'
      }
    },
    {
      path: '/persuasionAdd1',
      name: 'PersuasionAdd1',
      component(){
        return import('./views/Persuasion/Add1.vue')
      },
      meta: {
        title: '新增交通安全宣传'
      }
    },
    {
      path: '/persuasionAdd2',
      name: 'PersuasionAdd2',
      component(){
        return import('./views/Persuasion/Add2.vue')
      },
      meta: {
        title: '新增交通安全劝导'
      }
    },
    {
      path: '/persuasion',
      name: 'Persuasion',
      component(){
        return import('./views/Persuasion/List.vue')
      },
      meta: {
        title: '交通安全工作台账'
      }
    },
    {
      path: '/information',
      name: 'InformationSearch',
      component(){
        return import('./views/Information/Search.vue')
      },
      meta: {
        title: '重点企业、车、人信息'
      }
    },
    {
      path: '/information/detail',
      name: 'InformationDetail',
      component(){
        return import('./views/Information/Detail.vue')
      },
      meta: {
        title: '重点企业、车、人信息详情'
      }
    },
    {
      path: '/examination/create',
      name: 'ExaminationCreate',
      component(){
        return import('./views/Examination/Create.vue')
      },
      meta: {
        title: '发起检查'
      }
    },
    {
      path: '/examination/form',
      name: 'ExaminationCreateForm',
      component(){
        return import('./views/Examination/CreateForm.vue')
      },
      meta: {
        title: '检查'
      }
    },
    {
      path: '/examination/list',
      name: 'ExaminationList',
      component(){
        return import('./views/Examination/List.vue')
      },
      meta: {
        title: '发起检查'
      }
    },
    {
      path: '/roadhazard/create',
      name: 'RoadhazardCreate',
      component(){
        return import('./views/Roadhazard/Create.vue')
      },
      meta: {
        title: '上报道路隐患'
      }
    },
    {
      path: '/roadhazard/detail',
      name: 'RoadhazardDetail',
      component(){
        return import('./views/Roadhazard/Detail.vue')
      },
      meta: {
        title: '道路隐患'
      }
    },
    {
      path: '/roadhazard/hazardList',
      name: 'RoadhazardHazardList',
      component(){
        return import('./views/Roadhazard/HazardList.vue')
      },
      meta: {
        title: '未处理隐患'
      }
    },
    {
      path: '/roadhazard/checkList',
      name: 'RoadhazardCheckList',
      component(){
        return import('./views/Roadhazard/CheckList.vue')
      },
      meta: {
        title: '联合验收'
      }
    },
    {
      path: '/statistics',
      name: 'Statistics',
      component(){
        return import('./views/Statistics/Index.vue')
      },
      meta: {
        title: '工作统计'
      }
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: function () { 
        return import(/* webpackChunkName: "about" */ './views/About.vue')
      },
      meta: {
        title: '关于我们'
      }
    },
    {
      path: '/test',
      name: 'Test',
      component(){
        return import('./views/Test.vue')
      },
      meta: {
        title: '测试页面'
      }
    },
    // {
    //   path: '/test1',
    //   name: 'TestFlies',
    //   component(){
    //     return import('./views/TestFiles.vue')
    //   },
    //   meta: {
    //     title: '测试页面'
    //   }
    // },
    {
      //重定向
      path: '/*',
      redirect: "/"
    },
  ]
})
