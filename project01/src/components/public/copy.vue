<template>
	  <!-- 底部内容 -->
  <section class="ft">
    <p class="login center">
      <a href="" class="loginBtn">登录</a>
      <a href="">反馈</a>
    </p>
    <p class="touch">
      <a href=""><i class="kehu"></i><span>客户端</span></a>
      <a href="" class="margin"><i class="chuping"></i><span>触屏版</span></a>
      <a href="" class="margin"><i class="pc"></i><span>电脑版</span></a>
    </p>
    <p class="copy">
      <a href="">隐私政策</a>
      <a href="">用户协议</a>
      <a href="" class="nog">苏ICP备17040376号-6</a><br>
      <a href="">苏公网安备32011402010009号</a>
      <span> Copyright © 2012-2018  VMALL.COM 版权所有</span>
    </p>
  </section>
</template>

<script>
export default {
  name: 'copy',
  data () {
    return {
    }
  }

}
</script>
<style scoped lang="scss">
/*加载公共的样式*/
@import '../../assets/css/base.scss';


/*底部内容*/
.ft {
  margin-top: rem(16px);
  padding: 0 rem(46px);
  background: #fff;
  .login {
    padding: rem(18px) 0;
    text-align: center;
    a {
      position: relative;
      display: inline-block;
      width: rem(150px);
      height: rem(62px);
      line-height: rem(62px);
      font-size: rem(24px);
      color: #333;
    }
  }
  .touch {
    border-top: 1px solid #eaeaea;
    border-bottom: 1px solid #eaeaea;
    padding: rem(33px) 0;
    a { float: left; margin-left: rem(67px);}
    .margin { margin-left: rem(134px) }
    i {
      display: block;
      width: rem(70px);
      height: rem(70px);
      padding-bottom: 5px;
      background: url(../../../static/images/foot/1.png) no-repeat center top;
      background-size: rem(210px);
    }
    .kehu{
      background-position: center left;
    }
    .pc{
      background-position: center right;
      
    }
    span {
        color: #888;
       
    }
  }
  .copy {
    padding: rem(14px) 0 rem(25px) 0;
    text-align: center;
    line-height: rem(30px);
    word-wrap: break-word;
    font-family: Arial,Helvetica,sans-serif,'Lucida Grande',Verdana;
    a {
      position: relative;
      color: #333;
      padding: 0 rem(19px) 0 rem(12px);
    }
    span {
      padding: 0 rem(19px) 0 rem(12px);
    }
  }
}

.ft .copy a::before {
  content: '';
    position: absolute;
    right: 0;
    top: 50%;
    width: 0;
    height: rem(24px);
    margin-top: rem(-12px);
    border-right: 1px solid #eaeaea;
}
.ft .copy .nog::before {
  border-right: none;
}
.ft .touch::after {
  content: ''; 
  display: block;
  clear: both;
}
.ft .loginBtn::after {
  position: absolute;
  content: '';
  top: 24%;
  right: 0;
  height: rem(32px);
  border-right: 1px solid #eaeaea;
}

</style>