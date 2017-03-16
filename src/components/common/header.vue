<template>
	<div class="header">
		<div class="content-wrap clearfix">
			<div class="avatar fl">
				<img :src="seller.avatar" width="64" height="64" alt="">
			</div>
			<div class="content fl">
				<div class="title"><i class="icon-branch"></i><span class="name" v-text="seller.name"></span></div>
				<div class="desc">{{ seller.description }}/{{ seller.deliveryTime }}分钟送达</div>
				<div class="support" v-if="seller.supports">
					<i class="icon-support" :class="classMap[seller.supports[0].type]"></i>
					<span v-text="seller.supports[0].description"></span>
				</div>
			</div>
		</div>
		<div class="bulletin-wrap"></div>
	</div>
</template>

<script>
export default {
	name: 'header',
	props: {
		seller: {
			type: Object
		}
	},
	created () {
		this.classMap = ['icon-decrease', 'icon-discount', 'icon-special', 'icon-invoice', 'icon-guarantee']
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
	.header {
		.content-wrap {
			padding: 24px 12px 18px 24px;
			background: rgba(0, 0, 0, .2);
			.avatar { width: 64px; height: 64px; -webkit-border-radius: 2px; border-radius: 2px; overflow: hidden; }
			.content { margin-top: 2px; margin-left: 16px; }
			.title { line-height: 18px; }
			.icon-branch { display: inline-block; vertical-align: top; margin-right: 6px; width: 30px; height: 18px; background: url('brand@2x.png') no-repeat; background-size: 30px 18px; }
			.name { font-size: 16px; color: #fff; font-weight: bold; }
			.desc { margin-top: 8px; line-height: 12px; font-size: 12px; color: #fff; }
			.support { margin-top: 10px; line-height: 12px; font-size: 10px; color: #fff; }
			.icon-support { display: inline-block; vertical-align: top; margin-right: 4px; width: 12px; height: 12px; background-repeat: no-repeat; background-size: 12px 12px;
				&.icon-decrease { background-image: url('decrease_1@2x.png'); }
				&.icon-discount { background-image: url('discount_1@2x.png'); }
				&.icon-special { background-image: url('special_1@2x.png'); }
				&.icon-invoice { background-image: url('invoice_1@2x.png'); }
				&.icon-guarantee { background-image: url('guarantee_1@2x.png'); }
		  	}
		}
	}
</style>
