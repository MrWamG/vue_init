import {createRouter, createWebHistory } from 'vue-router'

// 路由
const routes = [
	{
		path: '/',
		name: 'Index',
		component: () => import('../views/index/index.vue'),
	},
];

const router = createRouter({
	history:createWebHistory(),
	routes
})

export default router