import Vue from 'vue'
import Router from 'vue-router'
import Seller from '@/components/seller'
import Goods from '@/components/goods'
import Ratings from '@/components/ratings'

Vue.use(Router)

const routes = [
	{
		path: '/seller',
		name: 'seller',
		component: Seller
	},
	{
		path: '/goods',
		name: 'goods',
		component: Goods
	},
	{
		path: '/ratings',
		name: 'ratings',
		component: Ratings
	}
]

const router = new Router({
	routes
})

export default router

router.push('/goods')
