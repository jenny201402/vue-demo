import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import About from '@/components/About'
import Player from '@/components/Player'
import test from '@/components/test'
import pig from '@/components/pig'
import demo from '@/components/demo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/test',
      name: 'test',
      component: test
    },
    {
      path: '/About',
      name: 'About',
      component: About
    },
    {
      path: '/Player',
      name: 'Player',
      component: Player
    },
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/test',
      name: 'test',
      component: test,
    },
    {
      path: '/demo',
      name: 'demo',
      component: demo,
    },
    {
      path: '/pig',
      name: 'pig',
      component: pig
    }
  ]
})
