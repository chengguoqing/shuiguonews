<template>
	<view class="">
		<view class="sd_xd_drtx">
			<view class="cen">
				<view class="ssd_dedd"></view>
				<text class="ciasd_drrt fz30">猜你喜欢</text>
			</view>
		</view>

		<view class="sddrt_ertxc">

			<view class="bgff dfdfrrttx  bk" v-for="sd in 10">
				<view class="kjhddrxer pd">
					<image src="/static/img/putao.png" mode="aspectFit" class="w100 h100"></image>
				</view>
				<view class="pd mt20">
					<view class="z3 fz26">
						进口牦牛肉
					</view>

					<view class="fz24 red mt5 dx_row">
						<view class="dx_col">
							¥<text class="fz28">369.00</text> <text class="fz24 z9">125人已付款</text>
						</view>
						<view class="tr">
							<image src="/static/img/xing.png" class="xingewer" mode="widthFix"></image>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {

			}
		},
		components: {

		},
		methods: {

		},
		mounted() {

		}
	}
</script>
<style scoped>
	.sddrt_ertxc {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		grid-column-gap: 20upx;
		grid-row-gap: 20upx;
	}

	.dfdfrrttx {
		height: 444upx;
	}

	.kjhddrxer {
		height: 320upx;
	}

	.xingewer {
		width: 30upx;
	}

	.sd_xd_drtx {
		line-height: 90upx;
		height: 90upx;
	}

	.ciasd_drrt {
		padding: 20upx;
		color: #666;
		background: #F7F7F7;
		position: relative;
		z-index: 100;
		padding-bottom: 0;
	}

	.ssd_dedd {
		width: 250upx;
		margin: auto;
		height: 4upx;
		background: #666;
		position: relative;
		top: 45upx;
		z-index: 1;
	}
</style>
