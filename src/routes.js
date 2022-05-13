import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
import Login from'@/components/Login'
import Message from'@/components/Message'
import NotFound from'@/components/404'
import NewNote from'@/components/NewNote'
import Notes from'@/components/Notes'
import Search from'@/components/Search'
import Todo from'@/components/Todo'
import store from './store'

const router = new Router({
  mode: 'history', 
    routes: [
        {
            path: '/login',
            name: 'login',
            component: Login
            
        },
          {   path: '/', 
              redirect: '/login',
          },
        {
            path: '/message',
            name: 'message',
            component: Message
        },
          {
            path: '/notFound',
            name: 'notFound',
            component: NotFound
        },
         {
            path: '/todo',
            name: 'Todo',
            component: Todo,
            // requiresAuth: true
        },
          {
            path: '/newNote',
            name: 'newNote',
            component: NewNote
        },
          {
            path: '/notes',
            name: 'notes',
            component: Notes
        },
          {
            path: '/search',
            name: 'search',
            component: Search
        },
        {
            path: '*',
            name: 'notFound',
            component: NotFound
        },
    ],
})
router.beforeEach(async (to, from, next) => {
  console.log(store)
  if (to.name !== 'login' && !store.state.authToken) {
    next({ name: 'login' })
  } else next()
})
export default router
