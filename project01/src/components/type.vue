<template>
  <div class="type">
  	<!-- 头部搜索 -->
  	<header>
		<section class="search">
			<div class="search_box">
				<a href="">
					<input type="text" name="" placeholder="HUAWEI Mate 10 荣耀V10 ">
				</a>
			</div>
		</section>
		<section class="message">
			<a href=""></a>
		</section>
  	</header>

	<!--主体内容  -->
	<article>
		<!-- 左边导航 -->
		<section class="left">
			<ul>
				<li v-for="(nav,index) in navs"><a @click="addClass(index)" :class="{aClass:index==suoyin}" href="javascript:;"><span>{{nav}}</span></a></li>
			</ul>
		</section>
		<!-- 右边内容 -->
		<section class="right">
			<section class="item">
				<div class="top">
					<a href=""><img src="../../static/images/type/tuijian/1.jpg"></a>
				</div>
				<div class="top">
					<a href=""><img src="../../static/images/type/tuijian/2.jpg"></a>
				</div>
				<div class="top lunbo">
					<div class="swiper-container shops">
						<ul class="swiper-wrapper">
							<li class="swiper-slide" v-for="img in imgs"><a href=""><img :src="img"></a></li>
						</ul>
					</div>
				</div>
				<!-- 商品内容 -->
				<div class="list">
					<div class="header">
						<h3><span>热销推荐</span></h3>
					</div>	
					<div class="content">
						<ul>
							<li v-for="shop in shops">
								<a href="">
									<div>
										<p class="img"><img :src="shop.img"></p>
										<p class="name"><span>{{shop.name}}</span></p>
									</div>
								</a>
							</li>
						</ul>
					</div>	
					<div class="header">
						<h3><span>超值精选</span></h3>
					</div>	
					<div class="content">
						<ul>
							<li v-for="shop in shops">
								<a href="">
									<div>
										<p class="img"><img :src="shop.img"></p>
										<p class="name"><span>{{shop.name}}</span></p>
									</div>
								</a>
							</li>
						</ul>
					</div>
					<div class="header">
						<h3><span>移动4G+专区</span></h3>
					</div>	
					<div class="content">
						<ul>
							<li v-for="shop in shops">
								<a href="">
									<div>
										<p class="img"><img :src="shop.img"></p>
										<p class="name"><span>{{shop.name}}</span></p>
									</div>
								</a>
							</li>
						</ul>
					</div>
				</div>
			</section>
		</section>
	</article>
	<footerNav></footerNav>
  </div>
</template>
<script>
//引入底部导航 
import footerNav from '@/components/public/footerNav';
export default {
  name: 'type',
  data () {
    return {
      navs: [
      	'为您推荐','华为手机','荣耀手机','笔记本&平板','智能穿戴','智能家居','专属配件','通用配件','生态产品'
      ],
      suoyin:0,
      imgs: [
      	'../../static/images/type/tuijian/lunbo/1.jpg','../../static/images/type/tuijian/lunbo/2.jpg','../../static/images/type/tuijian/lunbo/3.jpg','../../static/images/type/tuijian/lunbo/4.jpg','../../static/images/type/tuijian/lunbo/5.jpg'
      ],
      shops: [
      	{ "img":"../../static/images/type/tuijian/1/1.jpg", "name":"荣耀V10"},
      	{ "img":"../../static/images/type/tuijian/1/2.jpg", "name":"HUAWEI Mate 10"},
      	{ "img":"../../static/images/type/tuijian/1/3.jpg", "name":"荣耀9青春版"},
      	{ "img":"../../static/images/type/tuijian/1/4.jpg", "name":"HUAWEI nova 2s"},
      	{ "img":"../../static/images/type/tuijian/1/5.jpg", "name":"荣耀手环3"},
      	{ "img":"../../static/images/type/tuijian/1/6.jpg", "name":"HUAWEI WATCH 2 Pro"},
      	
      ],
      index: 0
    }
  },
  // 方法
  methods: {

  	addClass:function(index){
  		this.suoyin = index;
  	}
  },
  // 组件
  components: {
  	footerNav
  },
  mounted(){
  	new Swiper('.shops', {
		// 每个视图展示
		slidesPerView:3.2,
	})
  }
}
</script>
<style scoped lang="scss">
/*加载公共的样式*/
@import '../assets/css/base.scss';
/*左边导航的样式*/
.aClass {
	color: #e01d20!important;
	border-left: 2px solid #ca141d;
	background: #f6f6f6;
}
.type {
	position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: 0 auto;
    background-color: #fff;
	font-family: Arial,Helvetica,sans-serif,'Lucida Grande',Verdana;
}

.right {
	float: right;
	width: 75.7%;
	padding-bottom: rem(100px);
	padding-top: rem(80px);
	.item {
		.top {
			margin-top: rem(10px);
			padding: 0 rem(10px);
			img {
				width: 100%;
			}
		} 
		.lunbo {
			div ul li {
				float: left;
				width: 29.8% !important;
				padding-right: rem(10px);
				img {
					width: 100%;
				}
			}
		}
		.list {
			.header {
				height: rem(40px);
				text-align: center;
				padding: rem(26px) 0 rem(26px) 0;
				h3 {
					line-height: rem(40px);
					padding: 0 rem(104px);
					span {
						position: absolute;
						left: rem(390px);
						font-size: rem(27px);
						font-weight: bold;
						background: #fff;
						padding: 0 rem(20px);
						z-index: 10;
					}
				}
				h3::after {
					position: relative;
					top: rem(18px);
					display: block;
					content:'';
					width: 100%;
					height: 1px;
					background: #eaeaea;
					z-index: 1;
				}
			}
			.content {
				padding: 0 rem(14px);
				ul {
					li {
						float: left;
						width: 33.33%;
						text-align: center;
						div {
							padding: rem(18px) 0 rem(16px) 0;
							width: 100%;
							.img {
								width: rem(114px);
								margin: 0 auto;
								img {
									width: 100%;
								}
							}
							.name {
								display: flex;
								justify-content: center;
								align-items: center;
								height: rem(54px);
								color: #333;
								margin-top: rem(8px);
								padding: 0 rem(12px);
								span {
									line-height: rem(30px);
									word-break: break-all;
								}
							}
						}
					}
				}
				ul::after ,div::after {
					content: '';
					clear: both;
					display: block;
				}
			}
		}
	}
}

/*头部搜索内容*/
input::placeholder {
	color: #888;
	font-size: rem(30px);
};
header {
	position: fixed;
	width: 100%;
	box-shadow: 0 -7px 15px #333;
	z-index: 100;
}
section.search {
	display: flex;
	align-items: center;
	height: rem(83px);
	padding: 0 rem(100px) 0 rem(33px);
	background: #fff;
	.search_box {
		width: 100%;
		background: url(../../static/images/type/icon_search.png) no-repeat rem(24px) rem(8px);
		background-color: rgba(234,234,234,0.8);
		background-size: rem(38px);
		border-radius: rem(50px);
		a {
			display: block;
			input {
				width: 100%;
				height: rem(56px);
				padding: 0 rem(16px) 0 rem(80px);
				border: 0;
				background: rgba(255,255,255,0);
				box-sizing: border-box;
			}
		}
	}
}
section.message{
	position: absolute;
    right: 0;
    padding-right: rem(28px);
    z-index: 10;
    margin-top: rem(-34px);
	a {
		padding: rem(25px);
		background: url(../../static/images/type/icon_message_black.png) no-repeat;
		background-size: rem(48px);
	}
}

/*左边导航*/
article{
	height: 100%;
	.left {
		position: fixed;
		top: rem(80px);
		float: left;
		width: 24%;
		height: 100%;
		border-right: 1px solid #eaeaea;
		box-shadow: 0 0 3px #eaeaea;
		background: #fff;
		li {
			a {
				display: flex;
				align-items: center;
			    color: #333;
				height: rem(92px);
				justify-content: center;
				text-align: center;
				line-height: rem(42px);
			    overflow: hidden;
			    padding: 0 rem(12px);
			    border-bottom: 1px solid #eaeaea;
			    span {
			    	font-size: rem(28px);
			    	font-weight: bold;
			    }
			}
			.active {
				color: #e01d20!important;
			    border-left: 2px solid #ca141d;
			    background-color: #f6f6f6;
			}
		}
	}
}
article::after {
	display: block;
	content: '';
	clear: both;
}
</style>
