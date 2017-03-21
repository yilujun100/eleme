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
			<div class="seller-support" v-if="seller.supports">
				<span class="support-count">{{ seller.supports.length }}个<i class="icon-keyboard_arrow_right"></i></span>				
			</div>
		</div>
		<div class="bulletin-wrap">
			<i class="icon-bulletin"></i>
			<h3 class="bulletin-title" v-text="seller.bulletin"></h3>
			<i class="icon-keyboard_arrow_right"></i>
		</div>
		<div class="bg-thumb">
			<img :src="seller.avatar" width="100%" height="100%" alt="">
		</div>
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
	@COLOR_WHITE: #fff;
	.border-radius(@radius) { -webkit-border-radius: @radius; border-radius: @radius; }
	.header {
		position: relative;
		background: rgba(7, 17, 27, .5);
		.content-wrap {
			position: relative;
			padding: 24px 12px 18px 24px;
			.avatar { width: 64px; height: 64px; .border-radius(2px); overflow: hidden; }
			.content { margin-top: 2px; margin-left: 16px; }
			.title { line-height: 18px; }
			.icon-branch { display: inline-block; vertical-align: top; margin-right: 6px; width: 30px; height: 18px; background: url('brand@2x.png') no-repeat; background-size: 30px 18px; }
			.name { font-size: 16px; color: @COLOR_WHITE; font-weight: bold; }
			.desc { margin-top: 8px; line-height: 12px; font-size: 12px; color: @COLOR_WHITE; }
			.support { margin-top: 10px; line-height: 12px; font-size: 10px; color: @COLOR_WHITE; }
			.icon-support { display: inline-block; vertical-align: top; margin-right: 4px; width: 12px; height: 12px; background-repeat: no-repeat; background-size: 12px 12px;
				&.icon-decrease { background-image: url('decrease_1@2x.png'); }
				&.icon-discount { background-image: url('discount_1@2x.png'); }
				&.icon-special { background-image: url('special_1@2x.png'); }
				&.icon-invoice { background-image: url('invoice_1@2x.png'); }
				&.icon-guarantee { background-image: url('guarantee_1@2x.png'); }
		  	}
		  	.seller-support { position: absolute; right: 12px; bottom: 15px; width: 43px; height: 24px; line-height: 24px; text-align: center; background: rgba(0,0,0,.2); font-size: 10px; color: @COLOR_WHITE; .border-radius(12px); }
		  	.icon-keyboard_arrow_right { display: inline-block; vertical-align: middle; }
		}
		.bulletin-wrap { position: relative; padding: 0 12px; height: 28px; line-height: 28px; background: rgba(7,17,27,.2); 
			.icon-bulletin { display: inline-block; vertical-align: 7px; width: 22px; height: 12px; background: url('bulletin@2x.png') no-repeat; background-size: 22px 12px; }
			.bulletin-title { display: inline-block; width: 86%; height: 28px; line-height: 28px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; font-size: 10px; color: @COLOR_WHITE; }
			.icon-keyboard_arrow_right { position: absolute; top: 6px; right: 12px; display: block; width: 16px; height: 16px; color: @COLOR_WHITE; }
		}
		.bg-thumb { position: absolute; top: 0; left: 0; z-index: -1; width: 100%; height: 100%; filter: blur(10px); }
	}
</style>
