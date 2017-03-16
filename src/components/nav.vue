<template>
	<div class="nav border-1px">
		<router-link to="/goods" class="nav-item" active-class="active">商品</router-link>
		<router-link to="/ratings" class="nav-item" active-class="active">评价</router-link>
		<router-link to="/seller" class="nav-item" active-class="active">商家</router-link>
	</div>
</template>

<script>
export default {
	name: 'nav'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
</style>
