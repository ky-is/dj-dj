import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '#p/views/HomeView.vue'

export default createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'home',
			component: HomeView,
		},
		// {
		// 	path: '/about',
		// 	name: 'about',
		// 	component: () => import('../views/AboutView.vue'),
		// },
	],
})
