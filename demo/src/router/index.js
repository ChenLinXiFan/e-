import Vue from 'vue'
import VueRouter from 'vue-router'
import surpriseitem from '../components/surpriseitem/surpriseitem.vue'
// 声明使用插件
Vue.use(VueRouter)

export default new VueRouter({
  linkActiveClass:"active",
  routes: [ // 配置多个路由
    {
      path: '/surpriseitem',
      component: surpriseitem
    }
  ]
})
