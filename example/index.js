import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './views/home.vue'
import App from './app'

Vue.use(VueRouter)

if (__DEV__) {
  window.Vue = Vue
}

const router = new VueRouter({
	routes: [
		{path: '/', component: Home}
	]
})

new Vue({
	el: '#app',
	router,
	render: h => h(App)
})
