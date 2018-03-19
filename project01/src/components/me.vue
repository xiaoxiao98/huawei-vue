<template>
	<div class="me">
		<!-- 登录信息 -->
		<section class="user">
			<div class="user1">
				<p id="img"></p>
				<!-- 登录注册 -->
				<div class="state">
					<p class="goLogin">
						<router-link to="/reg" class="reg">登录 / 注册 ></router-link>
						<a class="more" href="">享受更多会员权益</a>
					</p>
				</div>
				<!-- 消息 -->
				<div class="msg">
					<a class="message" href=""></a>
				</div>	
			</div>
			<div class="user2">
				<a href=""><img src="../../static/images/me/defaultface_user_after.png"></a>
			</div>
		</section>
		<!-- 积分 -->
		<section class="vip">
			<ul>
				<li>
					<a href="">
						<span class="img"><img src="../../static/images/me/msg/1.png"></span>
						<span class="tit">积分</span>
						<span class="num">-- 分</span>
					</a>
				</li>
				<li>
					<a href="">
						<span class="img"><img src="../../static/images/me/msg/2.png"></span>
						<span class="tit">优惠券</span>
						<span class="num">-- 张</span>
					</a>
				</li>
				<li>
					<a href="">
						<span class="img"><img src="../../static/images/me/msg/3.png"></span>
						<span class="tit">代金券</span>
						<span class="num">-- 元</span>
					</a>
				</li>
			</ul>
		</section>
		<!-- 订单 -->
		<section class="order">
			<!-- 标题 -->
			<header>
				<span>我的订单</span>
				<a href="">全部订单</a>
			</header>
			<!-- 内容 -->
			<ul>
				<li>
					<a class="order_box" href="">
						<p class="img"><img src="../../static/images/me/order/1.png"></p>
						<p class="payment"><span>待付款</span></p>
					</a>
				</li>
				<li>
					<a class="order_box" href="">
						<p class="img"><img src="../../static/images/me/order/2.png"></p>
						<p class="payment"><span>待收货</span></p>
					</a>
				</li>
				<li>
					<a class="order_box" href="">
						<p class="img"><img src="../../static/images/me/order/3.png"></p>
						<p class="payment"><span>待评价</span></p>
					</a>
				</li>
				<li>
					<a class="order_box" href="">
						<p class="img"><img src="../../static/images/me/order/4.png"></p>
						<p class="payment"><span>退换货</span></p>
					</a>
				</li>
				<li>
					<a class="order_box" href="">
						<p class="img"><img src="../../static/images/me/order/5.png"></p>
						<p class="payment"><span>回收单</span></p>
					</a>
				</li>
			</ul>
		</section>
		<!-- 我的vmall -->
		<section class="order vmall">
			<header>
				<span>我的Vmall</span>
			</header>
			<ul>
				<li>
					<a class="order_box" href="">
						<p class="img"><img src="../../static/images/me/vmall/1.png"></p>
						<p class="payment"><span>会员频道</span></p>
					</a>
				</li>
				<li>
					<a class="order_box" href="">
						<p class="img"><img src="../../static/images/me/vmall/2.png"></p>
						<p class="payment"><span>实名认证</span></p>
					</a>
				</li>
				<li>
					<a class="order_box" href="">
						<p class="img"><img src="../../static/images/me/vmall/5.png"></p>
						<p class="payment"><span>收货地址</span></p>
					</a>
				</li>
				<li>
					<a class="order_box" href="">
						<p class="img"><img src="../../static/images/me/vmall/6.png"></p>
						<p class="payment"><span>优享购</span></p>
					</a>
				</li>
			</ul>
			<ul>
				<li>
					<a class="order_box" href="">
						<p class="img"><img src="../../static/images/me/vmall/5.png"></p>
						<p class="payment"><span>优购码</span></p>
					</a>
				</li>
				<li>
					<a class="order_box" href="">
						<p class="img"><img src="../../static/images/me/vmall/6.png"></p>
						<p class="payment"><span>预约记录</span></p>
					</a>
				</li>
				
			</ul>
		</section>
		<!-- 新人专享礼包 -->
		<section class="new">
			<a href=""><img src="../../static/images/me/vmall/new.jpg"></a><br>
		</section>
		<!-- 我的服务 -->
		<section class="order vmall">
			<header>
				<span>我的服务</span>
			</header>
			<ul>
				<li>
					<a class="order_box" href="">
						<p class="img"><img src="../../static/images/me/vmall/1.png"></p>
						<p class="payment"><span>会员频道</span></p>
					</a>
				</li>
				<li>
					<a class="order_box" href="">
						<p class="img"><img src="../../static/images/me/vmall/2.png"></p>
						<p class="payment"><span>实名认证</span></p>
					</a>
				</li>
				<li>
					<a class="order_box" href="">
						<p class="img"><img src="../../static/images/me/vmall/5.png"></p>
						<p class="payment"><span>收货地址</span></p>
					</a>
				</li>
				<li>
					<a class="order_box" href="">
						<p class="img"><img src="../../static/images/me/vmall/6.png"></p>
						<p class="payment"><span>优享购</span></p>
					</a>
				</li>
			</ul>
			<ul>
				<li>
					<a class="order_box" href="">
						<p class="img"><img src="../../static/images/me/vmall/5.png"></p>
						<p class="payment"><span>优购码</span></p>
					</a>
				</li>
				<li>
					<a class="order_box" href="">
						<p class="img"><img src="../../static/images/me/vmall/6.png"></p>
						<p class="payment"><span>预约记录</span></p>
					</a>
				</li>
				
			</ul>
		</section>
		<!-- 我的消息 -->
		<section class="order vmall">
			<header>
				<span>我的消息</span>
			</header>
			<div class="item">
				<header>
					<span>为你推荐</span>
					<time>03-14 11:26</time>
				</header>
				<div class="photo">
					<a href=""><img src="../../static/images/me/vmall/msg.jpg"></a>
				</div>	
			</div>
			<!-- 为你推荐 -->
			<div class="item">
				<header>
					<span>为你推荐</span>
					<time>03-14 11:26</time>
				</header>
				<div class="photo">
					<a href="">
						<div class="img">
							<span><img src="../../static/images/me/recommend/1.png"></span>
						</div>
						<div class="cont">
							<p>HUAWEI Mate 10 Pro</p>
							<p>6期分期免息 月供817元起</p>
						</div>
					</a>
				</div>	
			</div>
			<div class="item">
				<header>
					<span>为你推荐</span>
					<time>03-14 11:26</time>
				</header>
				<div class="photo">
					<a href="">
						<div class="img">
							<span><img src="../../static/images/me/recommend/1.png"></span>
						</div>
						<div class="cont">
							<p>HUAWEI Mate 10 Pro</p>
							<p>6期分期免息 月供817元起</p>
						</div>
					</a>
				</div>	
			</div>
			<div class="item">
				<header>
					<span>为你推荐</span>
					<time>03-14 11:26</time>
				</header>
				<div class="photo">
					<a href="">
						<div class="img">
							<span><img src="../../static/images/me/recommend/1.png"></span>
						</div>
						<div class="cont">
							<p>HUAWEI Mate 10 Pro</p>
							<p>6期分期免息 月供817元起</p>
						</div>
					</a>
				</div>	
			</div>
		</section>
		<!-- 登录可查看更多 -->
		<section class="loading">
			<h3><span>登录即可查看全部动态消息 <a href="">现在登录></a></span></h3>
		</section>
		<footerCopy></footerCopy>
		<footerNav></footerNav>
	</div>
</template>
<script >
//引入底部导航 
import footerNav from '@/components/public/footerNav';
// 引入底部的内容
import footerCopy from '@/components/public/copy';
export default {
	name:'me',
	data(){
		return {
		}
	},
	// 组件
	components: {
		footerNav,
		footerCopy
	},
	mounted:function(){
		// 当页面滚动距离大于10时，让#img透明度变为1；
		// 
		 $(window).scroll(function(){
		 	if($(this).scrollTop()>=10){
		 		$('#img').css('opacity','1')
		 		$('.goLogin a').css('display','inline-block');
		 	} else {
		 		$('#img').css('opacity','0')
		 		$('.goLogin a').css('display','block');
		 	}
		})
	}
}
</script>
<style scoped lang="scss">
@import '../assets/css/base.scss';
.loading {
	padding: rem(42px) rem(84px) rem(82px) rem(84px);
	text-align: center;
	h3 {
		display: block;
		width: 100%;
		height: 1px;
		border-bottom: 1px solid #d2d2d2;
		span {
			position: relative;
			top: rem(-16px);
			background: #eaeaea;
			padding: 0 rem(32px);
			color: #888;
			a {
				text-decoration: underline;
				color: #888;
			}
		}
	}
}
.photo {
	padding-bottom: rem(20px);
	a {
		position: relative;
		display: table !important;
		width: 100%;
		height: rem(166px);
		background: #eaeaea;
		.img {
			position: absolute;
			display: table;
			left: rem(20px);
			width: rem(114px);
			height: 100%;
			span {
				display: table-cell;
    			vertical-align: middle;
			}
		}
		.cont {
			display: table-cell;
			vertical-align: middle;
			padding: 0 rem(20px) 0 rem(162px);
			P:first-child {
				color: #ca141d;
			}
			P:last-child {
				color: #888;
			}
		}
	}
}
.item {
	padding: 0 rem(34px);
	border-bottom: 1px solid #eaeaea;
	header {
		padding: 0 !important;
		span {
		font-size: rem(24px) !important;
		}
		time {
			color: #888;
			padding-left: rem(24px);
		}
	}
	.photo{
		padding-bottom: rem(20px);
		a {
			display: block;
			img {
				width: 100%;
			}
		} 
	}
}
.new {
	height: rem(206px);
	margin-bottom: rem(12px);
	a {
		display: inline-block;
	}
	img {
		max-width: 100%;
	}
}
.vmall {
	ul {
		padding: 0 rem(10px);
		li {
			width: 25% !important;
			.img {
				width: rem(62px) !important;
				height: rem(62px) !important;
			}
		}
	} 
}
.order{
	margin-bottom: rem(12px);
	background: #fff;
	header {
		height: rem(72px);
		line-height: rem(72px);
		padding: 0 rem(34px);
		border-bottom: 1px solid #eaeaea;
		span {
			font-size: rem(28px);
		}
		a {
			float: right;
			color: #888;
			background: url(../../static/images/me/order/more.png) no-repeat rem(92px) rem(20px);
			background-size: rem(32px);
			padding-right: rem(24px);
		}
	} 
	ul {
		display: flex;
		li {
			width: 20%;
			text-align: center;
			a.order_box {
				display: inline-block;
				text-align: center;
				padding: rem(20px) 0;
				.img {
					display: inline-block;
					width: rem(50px);
					height: rem(50px);
					img {
						width: 100%;
					}
				}
				.payment {
					padding-top: rem(10px);
					span {
						color: #333;
					}
				} 
			}
		}
	}
}

.me {
	background: #eaeaea;
	line-height: rem(32px);
	padding-bottom: rem(100px);
}
.user {
	height: rem(178px);
	background: #fff;
	.user1 {
		position: fixed;
		width: 100%;
		height: rem(94px);
		z-index: 1;
		#img {
			position: absolute;
			width: 100%;
			height: 100%;
			opacity: 0;
			background: url(../../static/images/me/memberInfoBG.jpg) no-repeat;
			background-size: cover;
		}
		.state {
			display: flex;
   		 	align-items: center;
			position: absolute;
			height: rem(94px);
			left: rem(32px);
			.goLogin {
				display: block;
				padding: rem(10px) 0;
				a {
					display: block;
					line-height: rem(34px);
				}
				.reg { color: #fff;}
				.more { color: rgba(255,255,255,.7);}
			}
		}
		.msg {
			position: absolute;
			right: rem(32px);
			top: rem(16px);
			.message {
				display: inline-block;
				width: rem(50px);
				height: rem(50px);
				background: url(../../static/images/me/icon_message.png) no-repeat;
				background-size: cover;
			}
		}
	}
	.user2 {
		height: rem(126px);
		background: url(../../static/images/me/memberbg.jpg) no-repeat;
		background-size: cover;
		a {
			position: absolute;
			top: rem(64px);
			left: rem(320px);
			display: inline-block;
			width: rem(114px);
			height: rem(114px);
			img {
				width: 100%;
			}
		}
	}
}
.vip {
	padding: rem(8px) 0;
	margin-bottom: rem(12px);
	background: #fff;
	ul {
		display: flex;
		li {
			position: relative;
			flex: 1;
			text-align: center;
			a {
				display: inline-block;
				.img {
					display: inline-block;
					width: rem(42px);
					height: rem(28px);
					vertical-align: rem(-12px);
					img {
						width: 100%;
					}
				}
				.tit { color: #888; }
				.num {
					display: block;
					line-height: rem(36px);
					color: #333;
				}
			}
		}
		li::after {
			content: '';
		    width: 1px;
		    height: rem(28px);
		    background-color: #eee;
		    position: absolute;
		    right: 0;
		    top: 24%;
		}
	}
}
</style>