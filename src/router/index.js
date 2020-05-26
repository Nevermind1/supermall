import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('../views/home/Home')
const Fenlei = () => import('../views/fenlei/Fenlei')
const Profile = () => import('../views/profile/Profile')
const Shopping = () => import('../views/shopping/Shopping')

// 1. 安装插件
Vue.use(VueRouter)

// 2. 创建路由对象
  const routes = [
  {
		path:'',redirect:'/home'
	},{
		path:'/home',component:Home
	},{
		path:'/fenlei',component:Fenlei
	},{
		path:'/profile',component:Profile
	},{
		path:'/shopping',component:Shopping
	}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// 3.导出对象
export default router
