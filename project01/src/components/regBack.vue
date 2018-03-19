<template>
<div class="regBack">
	<header class="tit">华为帐号通知</header>
	<div class="county">
		<div class="county-box">
			<div class="left">
				<div>国家/地区</div>
				<div>正在注册中国华为帐号。</div>
			</div>	
			<div class="right"><span>中国</span></div>
		</div>
	</div>
	<div class="box-shadow"></div>
	<div class="content">
		<div class="box">
			<div class="text">
				<div class="text1">华为帐号是用于访问所有华为服务的帐号，为实现上述功能，需要收集、使用您的下列信息：</div>
				<div class="text2"><i>.</i>为防止欺诈行为，华为需采集浏览器信息 (类型、时区、插件、语言、字体、canvas图片渲染哈希值、webgl图片渲染哈希值)，您在页面上的鼠标和键盘操作信息，并使用cookie、local storage和flash cookie；</div>
				<div class="text2"><i>.</i>个人信息，包括<b>手机号、邮件地址和密码</b></div>
				<div class="text2"><i>.</i>网络信息，包括 IP 地址。</div>
				<div class="text2 font">上述数据将会传输并保存至中华人民共和国境内的服务器。</div>
				<div class="text2 font text3">若您不同意上述内容的采集，我们将无法为您提供服务。您可通过销户以终止上述数据的收集与处理。</div>
			</div>
			<!-- 点击同意 -->
			<div class="consent">点击“同意”，即表示您同意上述内容及<a href="">华为帐号用户协议</a>、<a href="">关于华为帐号与隐私的声明</a>。</div>
		</div>
	</div>

	<div class="btn">
		<div class="left"><router-link to="/login" class="button">取消</router-link></div>
		<div class="right"><router-link to="/reg" class="button">同意</router-link></div>
	</div>
</div>
</template>

<script >
export default {
	name:'regBack',
	data(){
		return {	
		}
	}
}
</script>
<style scoped lang="scss">
/*公共样式*/
@import '../assets/css/base.scss';
.btn {
    display: block;
	position: absolute;
	left: rem(32px);
    right: rem(32px);
	bottom: 0;
	padding: rem(32px) 0;
	width: 90%;
	.left {
		display: inline-block;
		float: left;
		width: 50%;
		text-align: center;
		a {
			margin-right: rem(12px);
		}
	}
	.right {
		float: right;
		width: 50%;
		text-align: center;
		a {
			margin-left: rem(12px);
		}
	}
	.button {
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
.consent {
	margin: rem(32px) 0;
	font-size: rem(26px);
	a {
		color: #007dff;
	}
}
.content {
	margin: rem(18px) rem(32px);
	.box {
		margin-top: rem(32px);
		line-height: 1.5;
		i { 
		    font-size: rem(50px);
		    margin-top: -15px;
			display: inline-block;
		}
		b { font-weight: bold; }

		.text3 {
			margin-top: rem(16px);
		}
		.text1,{
			font-size: rem(30px);
		}
		.text2 {
			font-size: rem(26px);
		}
		.font { font-size: rem(30px); }
	}
}

.box-shadow {
    margin: 0px rem(32px);
	border-bottom: 1px solid rgba(0,0,0,0.1);
}
.county-box::after {
	display: block;
	content:'';
	clear: both;
}
.county {
	margin: rem(18px) rem(32px);
	.left {
		float: left;
	    width: 60%;
	    display: inline-block;
		div:first-of-type {
			font-size: rem(30px);
		}
		div:last-of-type {
			font-size: rem(26px);
			color: #999;
		}
	}
	.right {
		width: 40%;
    	display: inline-block;
    	font-size: 13px;
	    color: rgba(0,0,0,0.5);
	    text-align: right;
	    line-height: rem(56px);
    	height: rem(56px);
	}
}
/*标题*/
header.tit {
	font-size: rem(36px);
	text-align: center;
	padding: rem(30px) rem(32px);
	border-bottom: 2px solid rgba(0,0,0,0.1);
}
.regBack {
	height: 100%;
	background: #fcfcfc;
	font-family: Regular,Droid Sans, Droid Sans Fallback, STHeiti, SimHei, Hei;
	line-height: 1.3;
}
</style>