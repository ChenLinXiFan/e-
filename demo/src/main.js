import Vue from 'vue'
import { Swipe, SwipeItem } from 'mint-ui'
import app from './app'
import './mock/mockServer'

Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(app)
})
