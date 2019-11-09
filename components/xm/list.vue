<template>
	<view class="sddrt_ertxc">
		<view class="bgff dfdfrrttx cen bk" v-for="sd in 4">
			<view class="kjhddrxer pd">
				<image src="/static/img/putao.png" mode="aspectFit" class="w100 h100"></image>
			</view>
			<view class="z3 fz26">
				澳大利亚进口美人指红提
			</view>
			<view class="fz24 z9 mt5">
				全程冷链运输
			</view>
			<view class="fz24 red mt5">
				¥369.00
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
	.sddrt_ertxc{
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		grid-column-gap: 20upx;
		grid-row-gap: 20upx;
	}
	.dfdfrrttx{
		height: 467upx;
	}
	.kjhddrxer{
		height: 320upx;
	}
</style>
