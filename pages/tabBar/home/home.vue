<template>
	<view class="pm100">
			<!-- #ifdef MP-WEIXIN || H5 -->
			<view class="dx_row dsf_deert pd">
				<view class="ddsfd_dser cen cz" @tap="saoms">
					<image src="/static/img/saoyisao.png" mode="widthFix" class="asd_seert cz"></image>
					<view class="fz24 cen cf cz soyiser">
						扫一扫
					</view>
				</view>
				<view class="dx_col pd cz dsf_deertxe">
					<view class="pr dsf_xde_ser">
						<image src="/static/img/sousou.png" class="dsfd_deertteer" mode="widthFix"></image>
					</view>
				</view>
				<view class="dsfd_deertxew ">
					<image src="/static/img/qiyedf.png" class="qiyxddsewrxe " mode="widthFix"></image>
					<view class="f_b cen cz ml10">
						<view class="f_b pr">
							<image src="/static/img/usdrrb.png" mode="widthFix" class="dsfd_deertt cz"></image>
							<!-- <text class="ssd_jj_dert">1</text> -->
						</view>
					</view>
				</view>
			</view>
			<!-- #endif -->
			<view class="ssd_jh_sdferf pr">
				<image src="/static/img/bgtop.png" class="sssdfrrts"></image>
				<swiper class="dsfd_deeertx" :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
					<swiper-item v-for="sd in 3">
						<image src="/static/img/banner.jpg" class="cz w100 h100"></image>
					</swiper-item>
				</swiper>
			</view>




			<view class="mt20 pd  pm20 dx_row cen">
				<view class="dx_col">
					<image src="/static/img/dsfdf_a.png" class="ssd_ddeexert cz" mode="widthFix"></image>
					<view class="fz24 z6 mt10">
						优选水果
					</view>
				</view>
				<view class="dx_col">
					<image src="/static/img/dsfdf_b.png" class="ssd_ddeexert cz ab" mode="widthFix"></image>
					<view class="fz24 z6 mt10">
						海鲜水产
					</view>
				</view>
				<view class="dx_col">
					<image src="/static/img/dsfdf_c.png" class="ssd_ddeexert cz ac" mode="widthFix"></image>
					<view class="fz24 z6 mt10">
						优选肉类
					</view>
				</view>

				<view class="dx_col">
					<image src="/static/img/dsfdf_d.png" class="ssd_ddeexert cz ad" mode="widthFix"></image>
					<view class="fz24 z6 mt10">
						异国风味
					</view>
				</view>
				<view class="dx_col">
					<image src="/static/img/dsfdf_e.png" class="ssd_ddeexert cz ae" mode="widthFix"></image>
					<view class="fz24 z6 mt10">
						优选饮食
					</view>
				</view>
			</view>

		<view class=" ">
			<view class="fz30 pd">
				今日优选
			</view>
			<scroll-view scroll-x="true" class="ddf_deefxewr ">
				<view class="pd pt20 pm20">
					<view class="pr f_b mr20 jingsdwer" v-for="sd in 10">
						<image src="/static/img/jingsd.jpg"></image>
						<view class="dian fz28">
							日本进口三文鱼
						</view>
						<view class="red fz24 dsf_deerxwr">
							￥<text class="fz32">39.9</text>
						</view>
					</view>
				</view>
			</scroll-view>
		</view>


		<view class="pd">
			<view class="dx_row ">
				<view class="fz30 dx_col">
					活动优惠
				</view>
				<view class="tr fz26 z6">
					更多>
				</view>
			</view>
			<image src="/static/img/dsfdfdde.jpg" mode="widthFix" class="w100 cz"></image>

		</view>
		<view class="mt20">
			<view class="fz30 pd">
				TOP单品
			</view>
			<scroll-view scroll-x="true" class="ddf_deefxewr ">
				<view class="pd pt20 pm20">
					<view class="pr f_b mr20 jingsdwer" v-for="sd in 10">
						<image src="/static/img/dsfdsf_sd.jpg"></image>
						<view class="dian fz28">
							日本进口三文鱼
						</view>
						<view class="red fz24 dsf_deerxwr">
							￥<text class="fz32">39.9</text>
						</view>
					</view>
				</view>
			</scroll-view>
		</view>
		<view class="">
			<view class="fz30 pd">
				热门专题
			</view>
			<scroll-view scroll-x="true" class="ddf_deefxewr ">
				<view class="pd pt20 pm20">
					<view class="pr f_b mr20 jingsdwer ab" v-for="sd in 10">
						<image src="/static/img/dsfdsf_sddff.jpg"></image>
						<view class="dian fz28 mt20">
							灯笼下的柿子
						</view>
						<view class="z9 fz24 dsf_deerxwr">
							枪头蕾蕾柿子黄，人家秋获争登场
						</view>
					</view>
				</view>
			</scroll-view>
		</view>
		<view class="">
			<view class="fz30 pd">
				即将上线
			</view>
			<scroll-view scroll-x="true" class="ddf_deefxewr ">
				<view class="pd pt20 pm20">
					<view class="pr f_b mr20 jingsdwer ab" v-for="sd in 10">
						<image src="/static/img/dsfdsf_sddffb.jpg"></image>
						<view class="dian fz28 mt20">
							灯笼下的柿子
						</view>
						<view class="z9 fz24 dsf_deerxwr">
							枪头蕾蕾柿子黄，人家秋获争登场
						</view>
					</view>
				</view>
			</scroll-view>
		</view>

		<view class="pr20">
			<view class="pl20">
				<image src="/static/img/dsfd_sde.jpg" class="w100 cz" mode="widthFix"></image>
			</view>


			<scroll-view scroll-x="true" class="ddf_deefxewr ">
				<view class="pd pt20 pm20">
					<view class="pr f_b mr20 jingsdwer" v-for="sd in 10">
						<image src="/static/img/dsfdsf_sd.jpg"></image>
						<view class="dian fz28">
							日本进口三文鱼
						</view>
						<view class="red fz24 dsf_deerxwr">
							￥<text class="fz32">39.9</text>
						</view>
					</view>
				</view>
			</scroll-view>
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
			saoms() {
				uni.scanCode({
					success: function(res) {}
				});
			}
		},
		onPullDownRefresh() {
			setTimeout(function() {
				uni.stopPullDownRefresh();
			}, 2000)
		},
		mounted() {

		},
	}
</script>
<style scoped>
	view {
		line-height: 1.8;

	}

	.ddsfd_dser {
		width: 80upx;
	}

	.asd_seert {
		width: 34upx;
	}

	.dsf_deert {
		background: #000;
		padding-bottom: 10upx;
		position: sticky;
		top: 0;
		left: 0;
		z-index: 100;
		/* #ifdef H5 */
		/* top: 88upx; */
		/* #endif */
	}

	.qiyxddsewrxe {
		width: 54upx;
		height: 54upx;
		margin-top: 20upx;
	}

	.dsfd_deertt {
		width: 45upx;
		margin-top: -40upx;
	}

	.ssd_jj_dert {
		color: #fff;
		background: #E53A72;
		font-size: 12px;
		border-radius: 50%;
		width: 26upx;
		height: 26upx;
		position: absolute;
		right: -5upx;
		top: -0upx;
		line-height: 26upx;
		text-align: center;
		transform: scale(0.8);
	}

	.dsf_xde_ser {
		height: 60upx;
		line-height: 60upx;
		background: #fff;
	}

	.dsfd_deertteer {
		width: 40upx;
		position: relative;
		left: 10upx;
		top: 10upx;
	}

	.dsf_deertxe {
		padding-top: 18upx;
	}

	.ssd_jh_sdferf {
		padding: 20upx;
	}

	.dsfd_deeertx {
		height: 360upx;
	}

	.ssd_ddeexert {
		width: 86upx;
	}

	.ssd_ddeexert.ab {
		width: 58upx;
	}

	.ssd_ddeexert.ac {
		width: 56upx;
	}

	.ssd_ddeexert.ad {
		width: 82upx;
	}

	.ssd_ddeexert.ae {
		width: 65upx;
	}

	.ddf_deefxewr {
		white-space: nowrap;
	}

	.jingsdwer {
		width: 234upx;
		line-height: 1;
	}

	.jingsdwer image {
		width: 100%;
		box-shadow: 0 0 20upx rgba(0, 0, 0, 0.2);
		height: 234upx;
	}

	.dsf_deerxwr {
		margin-top: -10upx;
	}

	.jingsdwer.ab {
		width: 534upx;
	}

	.jingsdwer.ab image {
		height: 320upx;
	}
	.sssdfrrts{
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 240upx;
	}
	.soyiser{
			font-size: 20upx;
			margin-top: -10upx;
	}
</style>
