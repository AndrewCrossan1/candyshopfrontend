import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import store from "@/store";
import {seoGuardWithNext} from "@aminoeditor/vue-router-seo";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      requiresAuth: false,
      seo: {
        title: 'Home',
        metaTags: [
          {
            description: 'Home page description',
            keywords: 'home, page, description',
          }
        ],
      }
    }
  },
  {
    path: '/products/',
    name: 'products',
    component: () => import(/* webpackChunkName: "products" */ '../views/Shop/ShopView.vue'),
    meta: {
      requiresAuth: false,
      seo: {
        title: 'Products',
        metaTags: [
          {
            description: 'Products description',
            keywords: 'products, keywords',
          }
        ],
      }
    }
  },
  {
    path: '/products/:id/',
    name: 'product',
    component: () => import(/* webpackChunkName: "product" */ '../views/Shop/DetailView.vue'),
    meta: {
      requiresAuth: false,
      seo: {
        title: 'Product',
        metaTags: [
          {
            description: 'Product description',
            keywords: 'product, keywords',
          }
        ],
      }
    },
  },
  {
    path: '/category/:name/',
    name: 'Products by category',
    component: () => import(/* webpackChunkName: "category" */ '../views/Shop/ShopView.vue'),
    meta: {
      requiresAuth: false,
      seo: {
        title: `Products by Category`,
        metaTags: [
          {
            description: 'Products by category description',
            keywords: 'products, category, keywords',
          }
        ],
      },
    },
  },
  {
    path: '/brand/:name/',
    name: 'Products by brand',
    component: () => import(/* webpackChunkName: "category" */ '../views/Shop/ShopView.vue'),
    meta: {
      requiresAuth: false,
      seo: {
        title: `Products by Brand`,
        metaTags: [
          {
            description: 'Products by brand description',
            keywords: 'products, brand, keywords',
          }
        ],
      },
    },
  },
  {
    path: '/500/',
    name: '500',
    component: () => import(/* webpackChunkName: "500" */ '../views/errors/error-500.vue'),
    meta: {
      requiresAuth: false,
      seo: {
        title: '500 - Internal Server Error',
        metaTags: [
          {
            description: '500 - Internal Server Error',
            keywords: '500, error',
          }
        ],
      }
    }
  },
  {
    path: '/404/',
    name: '404',
    component: () => import(/* webpackChunkName: "404" */ '../views/errors/error-404.vue'),
    meta: {
      requiresAuth: false,
      seo: {
        title: '404 - Page Not Found',
        metaTags: [
          {
            description: '404 - Page Not Found',
            keywords: '404, error',

          }
        ]
      }
    }
  },
  {
    path: '*',
    component: () => import(/* webpackChunkName: "404" */ '../views/errors/error-404.vue'),
    meta: {
      requiresAuth: false,
      seo: {
        title: '404 - Page Not Found',
        metaTags: [
          {
            description: '404 - Page Not Found',
          }
        ]
      }
    }
  },
  {
    path: '/login/',
    name: 'login',
    component: () => import(/* webpackChunkName: "login" */ '../views/AuthView.vue'),
    meta: {
        requiresAuth: false,
        seo: {
            title: 'Login',
            metaTags: [
                {
                    description: 'Login page description',
                }
            ]
        }
    }
  },
  {
    path: '/register/',
    name: 'register',
    component: () => import(/* webpackChunkName: "register" */ '../views/AuthView.vue'),
    meta: {
        requiresAuth: false,
        seo: {
            title: 'Register',
            metaTags: [
                {
                    description: 'Register page description',
                }
            ]
        }
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

router.beforeEach(seoGuardWithNext);

router.beforeEach((to, from, next) => {
  if (to.name === 'login') {
    if (store.getters.isLoggedIn) {
      return next({name: 'home'})
    } else {
      next()
    }
  } else  if (to.meta && to.meta.requiresAuth === false) {
    next()
  } else {
    if (store.getters.isLoggedIn) {
      next()
    } else {
      next({name: 'login'})
    }
  }
});

export default router
