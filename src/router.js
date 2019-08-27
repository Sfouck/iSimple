import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    // {
    //   path: '/',
    //   name: 'root',
    //   redirect: '/isimple',
    // },
    {
      path: '/',
      component: () =>
        import(/* webpackChunkName: "isimple" */ './views/iSimple.vue'),
      children: [
        {
          path: '',
          name: 'home',
          component: () =>
            import(/* webpackChunkName: "isimple-home" */ './views/iSimple/Home.vue'),
        },
        {
          path: 'about',
          name: 'about',
          component: () =>
            import(/* webpackChunkName: "isimple-about" */ './views/iSimple/About.vue'),
        },
        {
          path: 'works',
          name: 'works',
          component: () =>
            import(/* webpackChunkName: "isimple-works" */ './views/iSimple/Works.vue'),
        },
        {
          path: 'projects',
          name: 'projects',
          component: () =>
            import(/* webpackChunkName: "isimple-projects" */ './views/iSimple/Projects.vue'),
        },
      ],
    },
    {
      path: '*',
      redirect: '/',
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  },
})
