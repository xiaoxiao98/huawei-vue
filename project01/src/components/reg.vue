<template>
<div class="reg">
	<header class="tit">使用手机号注册</header>
	<div class="content">
		<!-- 用户名 -->
		<div class="con-box">
			<div class="box">
				<div class="left">
					<span>+86(中国)</span>
					<i class="arrows"></i>
				</div>
				<div class="rig">
					<input type="text" name="" placeholder="手机号">
				</div>	
			</div>
		</div>
		<!-- 验证码 -->
		<div class="auth">
			<div class="left">
				<input type="text" name="" placeholder="验证码">
			</div>
			<img src="../../static/images/reg/authCodeImage.png">
		</div>
		<!-- 短信验证 -->
		<div class="con-box note">
			<div class="box">
				<div class="gain">
					<a href="">获取验证码</a>
				</div>
				<div class="rig">
					<input type="text" name="" placeholder="短信验证码">
				</div>	
			</div>
		</div>
		<!-- 注册 -->
		<div class="mail">
			<div class="tit"><a href="">使用邮件地址注册</a></div>
			<div class="atten">若使用邮件地址注册，您仍需要为帐号提供一个手机号来验证身份。</div>
		</div>	
		<!-- 上一步下一步 -->
		<div class="btn">
			<div class="left"><router-link to="/regBack" href="" class="prev">上一步</router-link></div>
			<div class="right"><a href="" class="next">下一步</a></div>
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
/*公共样式*/
@import '../assets/css/base.scss';
/*上下一步*/
.btn {
	width: 100%;
	position: relative;
	.right {
		right: 0;
	}
	.prev {
		margin-right: rem(12px);
	}
	.next {
		margin-left: rem(12px);
		color: rgba(0,125,255,0.2) !important;
	}
	.left,.right {
		position: absolute;
		width: 50%;
	    font-size: rem(30px);
	    padding: rem(48px) 0 rem(32px);
	    background-color: #fcfcfc;
	    a {
	    	display: inline-block;
	    	padding: rem(23px);
		    font-size: rem(30px);
		    display: block;
		    text-align: center;
		    border: 1px solid rgba(0,0,0,0.1);
		    color: #007dff;
		    background-color: #f7f7f7;
		    border-radius: 50px;
		    line-height: 1;
	    }
	}
}
/*注册*/
.mail {
	font-size: rem(26px);
	.tit {
		padding: 0 rem(16px);
		padding-top: rem(32px);
		text-align: center;
		margin-bottom: rem(10px);
		a {
			color: #007dff;
			padding: rem(16px) rem(48px);
		}
	}
	.atten {
		line-height: rem(34px)
	}
} 
/*短信验证*/
.note {
	margin: rem(32px) 0;
	.gain {
		float: right;
		font-size: rem(30px);
		a {	
			color: #007DFF;
		}
	}
}
/*验证码*/
.auth {
	margin-top: rem(32px);
	.left {
		float: left;
		width: 30%;
		padding: 0 rem(32px);
	    border-radius: 20px;
	    min-height: rem(80px);
	    background-color: #efefef;
	}
	img {
		width: rem(180px);
	    height: rem(80px);
	    margin-left: rem(20px);
	}
}
/*用户名*/
.content {
	padding: 0 rem(32px);
	padding-top: rem(32px);
	.con-box {
		padding: 0 rem(32px);
		background: #efefef;
		border-radius: 20px;
		min-height: rem(80px);
		line-height: rem(80px);
		.left {
			float: left;
			margin-right: rem(16px);
			span {
				font-size: rem(30px);
				vertical-align: middle;
			}
			i.arrows {
				display: inline-block;
				width: rem(24px);
				height: rem(12px);
				background: url(../../static/images/reg/triangle_gray.png) no-repeat;
				background-size: contain;
				margin-left: rem(16px);
			}
		} 
	}
}
header.tit {
	font-size: rem(36px);
	text-align: center;
	padding: rem(30px) rem(32px);
	border-bottom: 2px solid rgba(0,0,0,0.1);
}
.reg {
	height: 100%;
	background: #fcfcfc;
	font-family: Regular,Droid Sans, Droid Sans Fallback, STHeiti, SimHei, Hei;
}
input::placeholder {
	color: #ccc;
}
input {
    border: none;
	height: rem(80px);
    line-height: 1.3;
    outline: none;
    padding: 0;
    font-size: rem(30px);
    background-color: transparent;
}
</style>