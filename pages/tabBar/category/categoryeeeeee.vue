<template>
	<div class="content">
		<div class="header" :style="{ height: headerHeight + 'wx' }">
			<div class="status-bar" :style="{ height: statusBarHeight + 'wx' }"></div>
			<div class="nav">
				<text class="icon location">{{ iconLocation }}</text>
				<text class="location-city-text">{{ city }}</text>
				<div class="titweeer">
					<text class="cpfneert">产品分类</text>
				</div>
				<text @click="toMsg" class="icon tongzhi">{{ iconTongzhi }}</text>
			</div>
		</div>
		<div class="category-list" :style="{ top: headerHeight + 'wx' }">
			<list class="left" :show-scrollbar="false">
				<cell v-for="(row, index) in categoryList" :key="index" :ref="'tab' + index">
					<div class="left-row" :class="[index == showCategoryIndex ? 'left-row-on' : '']" @click="goToCategory($event, 'category' + index, index)">
						<div class="left-text">
							<div class="left-block" :class="[index == showCategoryIndex ? 'left-block-on' : '']"></div>
							<text class="left-text-text" :class="[index == showCategoryIndex ? 'left-text-on' : '']">{{ row.title }}</text>
						</div>
					</div>
				</cell>
			</list>
			
			<list class="right">
				<template v-for="(row, index) in categoryList">
					<header :key="index">
						<div class="tab">
							<text class="category-title">{{ row.title }}</text>
							<text class="category-title-min">全场5折起，疯抢100元优惠券</text>
						</div>
					</header>
					<cell :ref="'category' + index" :key="index" @disappear="ondisappear($event, 'tab' + index, index)" @appear="onappear($event, 'tab' + index, index)">
						<div class="right-category">
							<div class="right-banner"><image class="right-banner-image" :src="row.banner"></image></div>
							<div class="right-list">
								<div class="right-box" v-for="(box, i) in row.list" :key="i" @click="toCategory(box)">
									<image class="right-box-image" :src="imglist[i]"></image>
									<text class="right-text">{{ box.name }}</text>
								</div>
							</div>
						</div>
					</cell>
				</template>
			</list>
		</div>
	</div>
</template>
<script>
const dom = weex.requireModule('dom') || {};
export default {
	data() {
		return {
			city: '北京',
			subNVue: uni.getCurrentSubNVue(),
			iconSearch: '\ue628',
			iconLocation: '\ue611',
			iconTongzhi: '\ue729',
			headerHeight: 44,
			statusBarHeight: 0,
			showCategoryIndex: 0,
			stopAppear:false,
			//模板图片，使用模板时候应调用数据内数据
			imglist: [
				'https://ae01.alicdn.com/kf/HTB1Ns_ne.GF3KVjSZFmq6zqPXXaJ.jpg',
				'https://ae01.alicdn.com/kf/HTB1MzgAcfBj_uVjSZFpq6A0SXXaC.jpg',
				'https://ae01.alicdn.com/kf/HTB1ns_ne.GF3KVjSZFmq6zqPXXa6.jpg',
				'https://ae01.alicdn.com/kf/HTB1nRjte8Kw3KVjSZFOq6yrDVXaZ.jpg',
				'https://ae01.alicdn.com/kf/HTB1EBLweW5s3KVjSZFNq6AD3FXa9.jpg',
				'https://ae01.alicdn.com/kf/HTB1xYfSbMFY.1VjSZFnq6AFHXXaK.jpg',
				'https://ae01.alicdn.com/kf/HTB1jK2oe9SD3KVjSZFKq6z10VXap.jpg',
				'https://ae01.alicdn.com/kf/HTB1L0DweWWs3KVjSZFxq6yWUXXal.jpg',
				'https://ae01.alicdn.com/kf/HTB1Ak2qe8aE3KVjSZLeq6xsSFXan.jpg'
			],
			categoryList: [
				{
					id: 1,type:'A',
					title: '家用电器',
					banner: 'https://ae01.alicdn.com/kf/HTB10Xrqe.uF3KVjSZK9q6zVtXXaZ.jpg',
					list: [
						{ name: '冰箱' },
						{ name: '电视' },
						{ name: '空调' },
						{ name: '洗衣机' },
						{ name: '风扇' },
						{ name: '燃气灶' },
						{ name: '热水器' },
						{ name: '电吹风' },
						{ name: '电饭煲' }
					]
				},
				{
					id: 2,type:'A',
					title: '办公用品',
					banner: 'https://ae01.alicdn.com/kf/HTB1_Wjpe3mH3KVjSZKzq6z2OXXab.jpg',
					list: [{ name: '打印机' }, { name: '路由器' }, { name: '扫描仪' }, { name: '投影仪' }, { name: '墨盒' }, { name: '纸类' }]
				},
				{
					id: 3,type:'A',
					title: '日常用品',
					banner: 'https://ae01.alicdn.com/kf/HTB1wr_se7WE3KVjSZSyq6xocXXa4.jpg',
					list: [{ name: '茶具' }, { name: '花瓶' }, { name: '纸巾' }, { name: '毛巾' }, { name: '牙膏' }, { name: '保鲜膜' }, { name: '保鲜袋' }]
				},
				{
					id: 4,type:'A',
					title: '蔬菜水果',
					banner: 'https://ae01.alicdn.com/kf/HTB17d_xe8Kw3KVjSZTEq6AuRpXaT.jpg',
					list: [{ name: '苹果' }, { name: '芒果' }, { name: '椰子' }, { name: '橙子' }, { name: '奇异果' }, { name: '玉米' }, { name: '百香果' }]
				},
				{
					id: 5,type:'A',
					title: '手机数码',
					banner: 'https://ae01.alicdn.com/kf/HTB10KDqe9SD3KVjSZFKq6z10VXaS.jpg',
					list: [{ name: '苹果' }, { name: '芒果' }, { name: '椰子' }, { name: '橙子' }, { name: '奇异果' }, { name: '玉米' }, { name: '百香果' }]
				},
				{
					id: 6,type:'A',
					title: '酒水饮料',
					banner: 'https://ae01.alicdn.com/kf/HTB1ypjpe4iH3KVjSZPfq6xBiVXaw.jpg',
					list: [{ name: '苹果' }, { name: '芒果' }, { name: '椰子' }, { name: '橙子' }, { name: '奇异果' }, { name: '玉米' }, { name: '百香果' }]
				},
				{
					id: 7,type:'A',
					title: '母婴童装',
					banner: 'https://ae01.alicdn.com/kf/HTB1zdPue9WD3KVjSZSgq6ACxVXaE.jpg',
					list: [{ name: '苹果' }, { name: '芒果' }, { name: '椰子' }, { name: '橙子' }, { name: '奇异果' }, { name: '玉米' }, { name: '百香果' }]
				},
				{
					id: 8,type:'A',
					title: '玩具乐器',
					banner: 'https://ae01.alicdn.com/kf/HTB1Hn_se8GE3KVjSZFhq6AkaFXaj.jpg',
					list: [{ name: '苹果' }, { name: '芒果' }, { name: '椰子' }, { name: '橙子' }, { name: '奇异果' }, { name: '玉米' }, { name: '百香果' }]
				},
				{
					id: 9,type:'A',
					title: '医药保健',
					banner: 'https://ae01.alicdn.com/kf/HTB1CiHpe3aH3KVjSZFjq6AFWpXaS.jpg',
					list: [{ name: '苹果' }, { name: '芒果' }, { name: '椰子' }, { name: '橙子' }, { name: '奇异果' }, { name: '玉米' }, { name: '百香果' }]
				},
				{
					id: 10,type:'A',
					title: '运动户外',
					banner: 'https://ae01.alicdn.com/kf/HTB1f_2UbMFY.1VjSZFnq6AFHXXaK.jpg',
					list: [{ name: '苹果' }, { name: '芒果' }, { name: '椰子' }, { name: '橙子' }, { name: '奇异果' }, { name: '玉米' }, { name: '百香果' }]
				},
				{
					id: 11,type:'A',
					title: '汽车生活',
					banner: 'https://ae01.alicdn.com/kf/HTB1kbHre9SD3KVjSZFKq6z10VXa9.jpg',
					list: [{ name: '苹果' }, { name: '芒果' }, { name: '椰子' }, { name: '橙子' }, { name: '奇异果' }, { name: '玉米' }, { name: '百香果' }]
				},
				{
					id: 12,type:'A',
					title: '家具厨具',
					banner: 'https://ae01.alicdn.com/kf/HTB1hlPzeW5s3KVjSZFNq6AD3FXaK.jpg',
					list: [{ name: '苹果' }, { name: '芒果' }, { name: '椰子' }, { name: '橙子' }, { name: '奇异果' }, { name: '玉米' }, { name: '百香果' }]
				},
				{
					id: 13,type:'A',
					title: '生活旅行',
					banner: 'https://ae01.alicdn.com/kf/HTB1CcPye8Kw3KVjSZTEq6AuRpXaQ.jpg',
					list: [{ name: '苹果' }, { name: '芒果' }, { name: '椰子' }, { name: '橙子' }, { name: '奇异果' }, { name: '玉米' }, { name: '百香果' }]
				},
				{
					id: 14,type:'A',
					title: '图书文娱',
					banner: 'https://ae01.alicdn.com/kf/HTB1Eabte8GE3KVjSZFhq6AkaFXa3.jpg',
					list: [{ name: '苹果' }, { name: '芒果' }, { name: '椰子' }, { name: '橙子' }, { name: '奇异果' }, { name: '玉米' }, { name: '百香果' }]
				},
				{
					id: 14,type:'A',
					title: '礼品鲜花',
					banner: 'https://ae01.alicdn.com/kf/HTB1Eabte8GE3KVjSZFhq6AkaFXa3.jpg',
					list: [{ name: '苹果' }, { name: '芒果' }, { name: '椰子' }, { name: '橙子' }, { name: '奇异果' }, { name: '玉米' }, { name: '百香果' }]
				},
				{
					id: 14,type:'A',
					title: '宠物盛会',
					banner: 'https://ae01.alicdn.com/kf/HTB1Eabte8GE3KVjSZFhq6AkaFXa3.jpg',
					list: [{ name: '苹果' }, { name: '芒果' }, { name: '椰子' }, { name: '橙子' }, { name: '奇异果' }, { name: '玉米' }, { name: '百香果' }]
				},
				{
					id: 14,type:'A',
					title: '艺术邮币',
					banner: 'https://ae01.alicdn.com/kf/HTB1Eabte8GE3KVjSZFhq6AkaFXa3.jpg',
					list: [{ name: '苹果' }, { name: '芒果' }, { name: '椰子' }, { name: '橙子' }, { name: '奇异果' }, { name: '玉米' }, { name: '百香果' }]
				},
				{
					id: 14,type:'A',
					title: '家居家装',
					banner: 'https://ae01.alicdn.com/kf/HTB1Eabte8GE3KVjSZFhq6AkaFXa3.jpg',
					list: [{ name: '苹果' }, { name: '芒果' }, { name: '椰子' }, { name: '橙子' }, { name: '奇异果' }, { name: '玉米' }, { name: '百香果' }]
				},
				{
					id: 14,type:'A',
					title: '食品生鲜',
					banner: 'https://ae01.alicdn.com/kf/HTB1Eabte8GE3KVjSZFhq6AkaFXa3.jpg',
					list: [{ name: '苹果' }, { name: '芒果' }, { name: '椰子' }, { name: '橙子' }, { name: '奇异果' }, { name: '玉米' }, { name: '百香果' }]
				}
			],
			timer:null
		};
	},
	beforeCreate() {
		const domModule = weex.requireModule('dom');
		domModule.addRule('fontFace', {
			fontFamily: 'iconfont',
			src: "url('https://at.alicdn.com/t/font_1087442_fe5vigfwr5m.ttf')"
		});
	},
	created() {
		this.init();
	},
	methods: {
		toMsg() {
			uni.navigateTo({
				url: '../../msg/msg'
			});
		},
		init() {
			uni.getSystemInfo({
				success: res => {
					this.statusBarHeight = res.statusBarHeight;
					this.headerHeight += this.statusBarHeight;
				}
			});
			this.nVueTitle = uni.getCurrentSubNVue();
			this.nVueTitle.onMessage(res => {
				let type = res.data.type;
				switch (type) {
					case 'location':
						this.setCity(res.data.city);
						break;
					default:
						break;
				}
			});
		},
		setCity(city) {
			this.city = city;
		},
		inputfocus() {
			this.subNVue.postMessage({
				type: 'focus'
			});
		},
		toCategory(e){
			uni.navigateTo({
				url: '../../goods/goods-list/goods-list?cid='+e.id+'&name='+e.name
			});
		},
		goToCategory(event, refId, index) {
			if(this.showCategoryIndex==index){return ;}
			clearTimeout(this.timer);
			this.stopAppear = true;
			this.showCategoryIndex = index;
			
			const target = event.target;
			const ref = this.$refs[refId];
			this.leftScrollToElement(index,target);
			ref && dom.scrollToElement(ref[0], { offset: -69 });
			if(plus.os.name=='Android'){
				this.timer = setTimeout(()=>{
					this.stopAppear = false;
				},1000)
			}else{
				this.timer = setTimeout(()=>{
					this.stopAppear = false;
				},300)
			}
		},
		ondisappear($event,refId,index){
			if($event.direction=='up'){
				this.checkScroll($event.direction,refId,index);
			}
		}, 
		onappear($event,refId,index){
			if($event.direction=='down'){
				this.checkScroll($event.direction,refId,index);
			}
		},
		checkScroll(direction,refId,index){
			if(this.stopAppear){
				return false;
			}
			if(Math.abs(index - this.showCategoryIndex)>1&&plus.os.name=='iOS'){
				return ;
			}
			const ref = this.$refs[refId];
			this.leftScrollToElement(index,ref[0]);
			if(direction=='down'){
				this.showCategoryIndex = index;
			}
			if(direction=='up'){
				this.showCategoryIndex = parseInt(index)+1;
			}
		},
		leftScrollToElement(index,target){
			if(plus.os.name=='Android'){
				//安卓滚动的动画有回弹，左侧滚动体验不好，关闭动画
				index > 0 && dom.scrollToElement(target, { offset: -90 ,animated:false});
			}else{
				index > 0 && dom.scrollToElement(target, { offset: -90 });
			}
		}
	}
};
</script>
<style>
.icon {
	font-family: iconfont;
	font-size: 42px;
}
.content {
	background-color: #ffffff;
	flex-direction: column;
}
.header {
	width: 750px;
	flex-direction: column;
	background-color: #ffffff;
	position: fixed;
	top: 0;
	z-index: 99;
}
.status-bar {
	width: 750px;
}
.nav {
	width: 750px;
	padding: 0 20px;
	/* margin-left: 20px; */
	position: relative;
	height: 88px;
	flex-direction: row;
	justify-content: flex-start;
	align-items: center;
}
.location,
.tongzhi {
	width: 60px;
	height: 88px;
	text-align: center;
	line-height: 88px;
}
.location {
	left: 0px;
	color: #ffc50a;
}
.location-city-text {
	width: 60px;
	height: 88px;
	line-height: 88px;
	font-size: 26px;
	color: #000;
}
.tongzhi {
	right: 0px;
	color: #000;
}
.input-box {
	width: 525px;
	margin-left: 5px;
	height: 60upx;
	border-radius: 60px;
	background-color: #f5f5f5;
	position: relative;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
}
.input-box-input {
	width: 330px;
	height: 60px;
	font-size: 28px;
	margin-left: 30px;
	placeholder-color: #c0c0c0;
}
.search {
	width: 60px;
	font-size: 34px;
	padding-right: 30px;
	color: #c0c0c0;
}
.place {
	background-color: #ffffff;
}
.category-list {
	position: absolute;
	width: 750px;
	bottom: 0;
}
.left {
	position: absolute;
	width: 180px;
	top: 0;
	bottom: 0;
	left: 0;
	background-color: #f2f2f2;
	z-index: 10;
}

.left-row {
	width: 180px;
	height: 90px;
	align-items: center;
	flex-direction: row;
	background-color: #f2f2f2;
}
.left-row-on {
	width: 180px;
	height: 90px;
	align-items: center;
	flex-direction: row;
	background-color: #fff;
	/* height: 100px; */
}
.left-text {
	width: 180px;

	position: relative;
	flex-direction: row;
	align-items: center;
	justify-content: center;
}

.left-text-text {
	text-align: center;
	font-size: 28upx;
	color: #3c3c3c;
}
.left-text-on {
	/* font-size: 30px; */
	font-weight: 600;
	color: #2d2d2d;
}
.left-block {
	position: absolute;
	width: 0;
	width: 10px;
	top: 5px;
	bottom: 5px;
	left: 0;
	background-color: #f2f2f2;
}
.left-block-on {
	
	
	background-color: #f06c7a;
}



.right {
	position: absolute;
	width: 570px;
	top: 0;
	bottom: 0;
	right: 0;
	z-index: 10;
}
.tab {
	width: 570px;
	height: 70px;
	padding: 0 17px 10px 17px;
	flex-direction: row;
	align-items: flex-end;
	background-color: #fff;
}
.category-title {
	font-size: 28px;
	color: #666;
}
.category-title-min {
	margin-left: 15px;
	font-size: 20px;
	color: #999;
}
.right-category {
	width: 570px;
	padding: 0 17px 20px 17px;
	margin-top: 20px;
}
.right-banner {
	width: 536px;
	height: 182px;
	border-radius: 10px;
	box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
}
.right-banner-image {
	width: 536px;
	height: 182px;
	border-radius: 10px;
	
}
.right-list {
	margin-top: 40px;
	width: 536px;
	flex-direction: row;
	flex-wrap: wrap;
}
.right-box {
	width: 178px;
	margin-bottom: 30px;
	justify-content: center;
	align-items: center;
	flex-wrap: wrap;
	flex-direction: row;
}
.right-box-image {
	width: 106px;
	height: 106px;
	margin: 0 36px;
}
.right-text {
	margin-top: 5px;
	width: 178px;
	text-align: center;
	font-size: 26px;
}
.titweeer{

	text-align: center;
}
.cpfneert{
	font-size: 18px;
		color: #fff;
}
</style>
