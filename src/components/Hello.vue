<template>
	<div class="container">
		<v-header></v-header>
		<v-nav></v-nav>
		<v-footer></v-footer>
	</div>
</template>

<script>
import Header from './common/header'
import Footer from './common/footer'
import Nav from './nav'
export default {
	name: 'hello',
	data () {
		return {

		}
	},
	components: {
		'v-header': Header,
		'v-footer': Footer,
		'v-nav': Nav
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style type="text/less">

</style>
