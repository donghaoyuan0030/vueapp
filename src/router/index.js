import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
 {path:'/',component:() => import('../views/Tv.vue')},
 { path: '/music', component: () => import('../views/Music.vue') },
 { path: '/book', component: () => import('../views/Book.vue') },
 { path: '/chat', component: () => import('../views/Chat.vue') },
 { path: '/tvDetail/:id', component: () => import('../views/TvDetail.vue') },
]

const router = new VueRouter({
  routes
})

export default router
