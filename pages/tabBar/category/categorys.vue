<template>
	<view class="fenlei_page">
				<!-- #ifdef MP-WEIXIN || H5 -->
		<view class="ssdhensdr">
			<view class="tiytert cf fz32">
				<image src="/static/img/dsfdf_cdra.png" mode="widthFix" class="ssddswerta" @tap="isdxdf=2" v-if="isdxdf==1"></image>
				<image src="/static/img/dsfdf_cdrb.png" mode="widthFix" class="ssddswerta" @tap="isdxdf=1" v-if="isdxdf==2"></image>
				产品分类
			</view>
		</view>
		<!-- #endif -->
		<view class="dx_row ddf_xeertx" v-if="isdxdf==2">
			<view class="dx_left_ert yy" :style="{height:fleer+'px'}">
				<view class="dian fz26 z3 cen pt20 pm20 uyg_dseert" v-for="sd in ddf_ddr" :class="sd.cls" @tap="qiehuan(sd)">
					<text class="pr">生鲜水果</text>
				</view>
			</view>
			<view class="dx_col pl20 pr20">
				<view class="" v-for="sd in 10" @tap="hf('/pages/fenlei/shangping')">
					<view class="fz30 z3 pt20 pm20 dsfdfdst">
						核果类
					</view>
					<view class="dx_row bgff sdsf_deret pd pt20 yy">
						<view class="case_deertt cen" v-for="sd in 6">
							<image src="/static/img/shuia.jpg" class="cz" mode="aspectFill"></image>
							<view class="fz28 z6">
								牛油果
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>

		<view class="pm100" v-if="isdxdf==1">
			<view class="dsfd_derxertx dx_row pd">
				<view class="dx_col" v-for="(sd,idx) in tuoosd">
					<view class="dsf_ddfd" :class="ssdfidx==idx?'act':''" @tap="ssdrfrt(idx)">
						{{sd.name}}
					</view>
				</view>
			</view>

			<view class="ssd_jj_eertxwdrtx">
				<view class="dsdf_dsrer" v-for="sd in 7">
					<view class="ssdderderxer">
						<image src="/static/img/shuia.jpg" mode="aspectFill" class="w100 h100"></image>
					</view>
					<view class="fz26 z6 mt10">
						牛油果 
					</view>
				</view>


				<view class="dsdf_dsrer">
					<view class="ssdderderxer">
						<image src="/static/img/addicon.png" mode="widthFix" class="cz dfd_seerxwer"></image>
					</view>
					<view class="fz26 z6 mt10">
						全部分类
					</view>
				</view>

			</view>

			<view class="flsd_det dx_row pd">
				<text class="fz32">热品推荐</text>
				<view class="dx_col tr z9 fz26">
					更多推荐
				</view>
			</view>
			<view class="pd">
				<lists></lists>
			</view>

			<view class="lhen cen fz28">
				相关专题
			</view>
			<view class="pd">
				<view class="mb20" v-for="sd in 4" >
					<lister ></lister>
				</view>
				
			</view>
		</view>


	</view>
</template>
<script>
	import lists from "@/components/xm/list.vue"
	import lister from "@/components/xm/lister.vue"
	export default {
		globalData: {
			text: 'text'
		},
		computed: {
		},
		data() {
			return {
				fleer: 0, //左边的菜单的高度
				ssdfidx: 0,
				isdxdf: 1, //1显示横 2显示竖
				ddf_ddr: [{ //左边的菜单
					cls: "act"
				}, {
					cls: ""
				}, {
					cls: ""
				}, {
					cls: ""
				}, {
					cls: ""
				}, {
					cls: ""
				}, {
					cls: ""
				}, {
					cls: ""
				}, {
					cls: ""
				}, {
					cls: ""
				}, {
					cls: ""
				}],
				tuoosd: [{
						name: "推荐",
						id: ""
					},
					{
						name: "生鲜水果",
						id: ""
					},
					{
						name: "海鲜水产",
						id: ""
					},
					{
						name: "异国风味",
						id: ""
					},
					{
						name: "优选饮食",
						id: ""
					}
				]
			}
		},
		components: {
			lists,
			lister
		},
		onPullDownRefresh() {
			setTimeout(function() {
				uni.stopPullDownRefresh();
			}, 1000);
		},
		methods: {
			qiehuan(sd) { //左边的菜单点击事件
				this.ddf_ddr.map(a => {
					a.cls = ''
				})
				sd.cls = "act"
			},
			ssdrfrt(idx) {
				this.ssdfidx = idx
			}
		},
		onShow() {},
		onLoad() {
			uni.$on('popup-page', (data) => {
				this.isdxdf = data.issdrr
			})
			//  高度自适应
			uni.getSystemInfo({
				success: (res) => {
					let calc = res.windowHeight - uni.upx2px(80);
					this.fleer = calc + 40
				}
			});
		},
		mounted() {}
	}
</script>
<style scoped>
	.ssd_jhh_der {
		background: #fafafa;
		position: fixed;
		left: 0;
		top: 0;
		width: 100%;
		z-index: 100;
		/* #ifdef H5 */
		top: 88upx;
		/* #endif */
	}

	.fenlei_page {}

	.ddf_xeertx {
		padding-left: 170upx !important;
	}

	.ssd_jhh_der image {
		left: 40upx;
		top: 35upx;
	}

	.dx_left_ert {
		width: 170upx;
		background: #fff;
		position: fixed;
		left: 0;
		top: 0upx;
		/* #ifdef H5 */
		top: 88upx;
		/* #endif */
		/* #ifdef MP-WEIXIN */
		top: 180upx;
		/* #endif */
	}

	.sdsf_deret {
		border-radius: 10upx;
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		grid-column-gap: 20upx;
		grid-row-gap: 10upx;
	}

	.case_deertt image {
		width: 100%;
		height: 170upx;
	}

	.uyg_dseert {
		position: relative;
		line-height: 1.6 !important;
	}

	.uyg_dseert.act {
		background: #FAFAFA;
		color: #12C0A4 !important;
	}

	.uyg_dseert.act:after {
		content: ' ';
		position: absolute;
		left: 0;
		top: 24upx;
		height: 30upx;
		width: 6upx;
		background: #12C0A4;
	}

	.dsfdfdst {
		line-height: 1.4 !important;
	}

	.dsfd_derxertx {
		height: 80upx;
		line-height: 80upx;
		background: #000;
		color: #fff;
		padding-bottom: 4upx;
		position: sticky;
		top: 0upx;
		/* #ifdef H5 */
		top: 88upx;
		/* #endif */
		left: 0;
		z-index: 1000;
	}

	.dsf_ddfd {
		line-height: 76upx;
		font-size: 30upx;
		text-align: center;
		border-bottom: 4upx solid #000;

	}

	.dsf_ddfd.act {
		color: #12C0A4;
		border-color: #12C0A4;
	}

	.ssd_jj_eertxwdrtx {
		background: #fff;
		padding: 40upx;
		padding-top: 30upx;
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		grid-template-rows: repeat(2, 1fr);
		grid-row-gap: 20upx;
		grid-column-gap: 50upx;
	}

	.ssdderderxer {
		border: 1px solid #EEEEEE;
		border-radius: 8upx;
		overflow: hidden;
		width: 100%;
		height: 120upx;
		line-height: 120upx;
	}

	.dsdf_dsrer {
		text-align: center;
	}

	.dfd_seerxwer {
		width: 40upx;
	}

	.flsd_det {
		height: 90upx;
		line-height: 90upx;
	}
</style>
