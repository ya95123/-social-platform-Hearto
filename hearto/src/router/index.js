import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: '幫助人的社群平台｜💗交心 hearto'
    }
  },
  {
    path: '/pray',
    name: 'Pray',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "pray" */ '../views/Pray.vue'),
    meta: {
      title: '禱告地｜🙏交心 hearto'
    }
  },
  {
    path: '/pray/initial',
    name: 'Initial',
    component: () => import(/* webpackChunkName: "pray/initial" */ '../views/Initial.vue'),
    meta: {
      title: '立即禱告｜🙏交心 hearto'
    }
  },
  {
    path: '/pray/bless',
    name: 'Bless',
    component: () => import(/* webpackChunkName: "pray/bless" */ '../views/Bless.vue'),
    meta: {
      title: '祝福禱告｜🙏交心 hearto'
    }
  },
  {
    path: '/encourage',
    name: 'Encourage',
    component: () => import(/* webpackChunkName: "encourage" */ '../views/Encourage.vue'),
    meta: {
      title: '我需要鼓勵｜💪交心 hearto'
    }
  },
  {
    path: '/community',
    name: 'Community',
    component: () => import(/* webpackChunkName: "community" */ '../views/Community.vue'),
    meta: {
      title: '小社群｜🏡交心 hearto'
    }
  },
  {
    path: '/exercise',
    name: 'Exercise',
    component: () => import(/* webpackChunkName: "exercise" */ '../views/Exercise.vue'),
    meta: {
      title: '揪運動｜🎾交心 hearto'
    }
  },
  {
    path: '/mood',
    name: 'Mood',
    component: () => import(/* webpackChunkName: "mood" */ '../views/Mood.vue'),
    meta: {
      title: '心情紀錄｜📙交心 hearto'
    }
  }
]

const router = new VueRouter({
  routes
})

router.afterEach((to, from, next) => {
  document.title = to.meta.title
})

export default router
