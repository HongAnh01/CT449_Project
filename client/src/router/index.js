import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from './../views/Home'
import AddPost from './../views/AddPost'
import PostDetail from './../views/PostDetail'
import EditPost from './../views/EditPost'
import RegisterView from './../views/Register'
import LoginView from './../views/Login'

Vue.use(VueRouter)

const routes = [
  {
    path: '/register',
    name: 'register',
    component: RegisterView,
  },
  {
    path: '/add-post',
    name: 'add-post',
    component: AddPost,
  },
  {
    path: '/edit-post',
    name: 'edit-post',
    component: EditPost,
  },
  {
    path: '/post/:id',
    name: 'post',
    component: PostDetail,
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/',
    name: 'login',
    component: LoginView,
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
