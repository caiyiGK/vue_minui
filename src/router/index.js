import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const path = '@/pages/';

export default new Router({
    routes: [
        {
          path: '/',
          name: 'Home',
          component: (resolve) => require(['@/pages/HomePage.vue'], resolve)
        },

        {  // Button page
            path: '/button',
            name: 'Button',
            meta: {pageTitle: 'Button'},
            component: (resolve) => require(['@/pages/ButtonPage/index.vue'], resolve)
        },

        {  // Grids page
            path: '/grids',
            name: 'Grids',
            meta: {pageTitle: 'Grids'},
            component: (resolve) => require(['@/pages/GridsPage/index.vue'], resolve)
        },

        {  // Grids page
            path: '/tabbar',
            name: 'TabBar',
            meta: {pageTitle: 'TabBar'},
            component: (resolve) => require(['@/pages/TabBarPage/index.vue'], resolve)
        },

        {  // Grids page
            path: '/navbar',
            name: 'NavBar',
            meta: {pageTitle: 'NavBar'},
            component: (resolve) => require(['@/pages/NavBarPage/index.vue'], resolve)
        }

    ]
})
