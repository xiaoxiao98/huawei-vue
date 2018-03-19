<template>
<div class="me">
	<!-- 头部 -->
	<header class="head" >
		<div class="content">
			<div class="more">
				<i class="more-icon"></i>
			</div>
			<div class="tit center">华为帐号-登录</div>
			<div class="introduce center">
				华为帐号适用于访问所有华为服务。您可登录该帐号，访问云服务、华为商城、华为/荣耀官网、花粉俱乐部及更多服务。
			</div>
		</div>
	</header>
	<!-- 内容 -->
	<div class="container">
		<!-- 账号 -->
		<div class="account">
			<input class="user" type="text" name="" placeholder="手机号/邮件地址">
		</div>
		<!-- 密码 -->
		<div class="pass_box">
			<div class="account">
				<div class="pass_icon"><img src="../../static/images/login/eyeoff.png"></div>
				<input class="pass user" type="password" name="" placeholder="密码">
			</div>
		</div>
		<!-- 验证码 -->
		<div class="verify_box">
			<div class="account verifybox">
				<input class="user verify" type="text" name="" placeholder="验证码">
			</div>
			<img src="../../static/images/login/authCodeImage.png">
		</div>
		<!-- 登录 -->
		<div class="account login_box">
			<div class="login">登录</div>
		</div>
		<!-- 记住密码 -->
		<div class="remember">
			<!-- <img src="../../static/images/login/tick-off.png"> -->
			<input type="checkbox" name="">
			<span>记住密码</span>
		</div>
		<!-- 注册账号 -->
		<div class="regbox center">
			<router-link to="/regBack" class="reg">注册帐号</router-link>
			<router-link to="" class="forget">忘记密码？</router-link>
		</div>
		<!-- 其他登录方式 -->
		<div class="else">
			<div class="line">
				<span>其他登录方式</span>
			</div>
		</div>
		<!-- qq 支付宝 -->
		<div class="tool">
			<span class="qq"><img src="../../static/images/login/wap_qq.png"></span>
			<span class="alipay"><img src="../../static/images/login/wap_alipay.png"></span>
		</div>
	</div>
</div>
</template>

<script >
export default {
	name:'me',
	data(){
		return {
			
		}
	}
}
</script>

<style scoped lang="scss">
.me {
	height: 100%;
	background: #fcfcfc !important;
	z-index: 100
}
.center {text-align: center;}
/*公共样式*/
@import '../assets/css/base.scss';




/*头部*/
div {
	line-height: 1.3;
}
header {
	min-height: rem(322px);
	.content {
		position: relative;
		padding: rem(87px) rem(48px) rem(16px);
		.more {
			position: absolute;
			top: rem(24px);
			right: rem(32px);
			.more-icon {
				display: inline-block;
				width: rem(48px);
				height: rem(48px);
				background-image: url(../../static/images/login/more.png);
				background-repeat: no-repeat;
			    background-size: contain;
			    cursor: pointer;
			}
		}
		.tit {
			font-size: rem(48px);
		}
		.introduce {
			font-size: rem(26px);
			margin-top: rem(16px);
			color: rgba(0,0,0,0.5);
			font-family: Regular,Droid Sans, Droid Sans Fallback, STHeiti, SimHei, Hei
		}
	}
}
input {
	padding: 0;
}
input::placeholder {
	color: #bfbfbf;
	font-size: rem(30px);
};
div .container {
	padding: 0 rem(32px);
	.account {
		position: relative;
		min-height: rem(80px);
		padding: 0 rem(32px);
		background: #efefef;
		border-radius: rem(40px);
		margin-bottom: rem(16px);
		.user {
			width: 100%;
			height: rem(80px);
			border: none;
			outline: none;
			background: transparent;
		}
	}
	.verify_box{
		display: flex;
		.verifybox {
			width: 30%;
		}
		img {
			width: rem(200px);
			height: rem(90px);
			margin-top: rem(-6px);
    		margin-left: rem(20px);
		}
	}
	.pass_box {
		.pass_icon {
			position: absolute;
			right: rem(36px);
			top: rem(16px);
			img {
				width: rem(48px);
				height: rem(48px);
			} 
		}
	}	
}
/*登录*/
div.container .login_box {
    display: block;
    
    color: #fff;
    height: rem(80px);
    line-height: rem(80px);
    border-radius: 20px;
    text-align: center;
	background: #007dff;
	margin-bottom: rem(32px);
	opacity: 0.2;
	.login {
		line-height: rem(80px);
		font-size: rem(30px);
	}
}
/*记住密码*/
.remember{
	margin-bottom: rem(32px);
	input {
		width: rem(36px);
		height: rem(36px);
		margin: 0 rem(16px);
		vertical-align: middle;
		background: #fff;
	} 
	span {
		vertical-align: middle;
	}
}
/*注册账号*/
.regbox {
	margin-bottom: rem(16px);
	a { color: #007dff; }
	.reg {
		margin-right: rem(64px);
	}
}
/*其他登录方式*/
.else {
	margin: rem(46px) 0 rem(30px) 0;
	padding: 0 rem(16px);
	.line {
        height: 1px;
        background: -webkit-linear-gradient(left,#fcfcfc,#cdcccc,#cdcccc,#fcfcfc);
        text-align: center;
        span {
        	position: relative;
        	top: rem(-12px);
        	background: #fcfcfc; 
        	padding: 0 rem(32px);
        	color: rgba(0,0,0,0.5);
        }
	}
}
/*QQ 支付宝*/
.tool {
	text-align: center;
	span {
		display: inline-block;
		width: rem(136px);
		img {
			width: rem(80px);
		}
	}
}
</style>