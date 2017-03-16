<template>
	<div id="app">
		<div class="container">
			<v-header :seller="seller"></v-header>
			<v-nav></v-nav>
			<v-footer></v-footer>
		</div>
		<router-view></router-view>
	</div>
</template>

<script>
import Header from './components/common/header'
import Footer from './components/common/footer'
import Nav from './components/nav'
export default {
	name: 'app',
	data () {
		return {
			seller: {}
		}
	},
	created: function () {
		this.$http.get('../static/data/seller.json').then((response) => {
			this.seller = response.data
		})
	},
	components: {
		'v-header': Header,
		'v-footer': Footer,
		'v-nav': Nav
	}
}
</script>

<style lang="less">
	
</style>
