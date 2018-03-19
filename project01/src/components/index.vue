<template>
<div class="index">
	<!-- 图片轮播 -->
	<div class="swiper-container lunbo">
	    <div class="swiper-wrapper">
	        <div class="swiper-slide">
	        	<a href=""><img src="../../static/images/lunbo/1.png" alt=""></a>
	        </div>
	        <div class="swiper-slide">
	        	<a href=""><img src="../../static/images/lunbo/2.png" alt=""></a>
	        </div>
	        <div class="swiper-slide">
	        	<a href=""><img src="../../static/images/lunbo/3.jpg" alt=""></a>
	        </div>
	        <div class="swiper-slide">
	        	<a href=""><img src="../../static/images/lunbo/4.png" alt=""></a>
	        </div>
	        <div class="swiper-slide">
	        	<a href=""><img src="../../static/images/lunbo/5.png" alt=""></a>
	        </div>
	        <div class="swiper-slide">
	        	<a href=""><img src="../../static/images/lunbo/6.jpg" alt=""></a>
	        </div>
	        <div class="swiper-slide">
	        	<a href=""><img src="../../static/images/lunbo/7.png" alt=""></a>
	        </div> 
	    </div>
	    <div class="swiper-pagination"></div>
	</div>
	<!-- 头部搜索 -->
	<header class="top top-trans">
		<section class="search">
			<div class="input">
				<input type="text" placeholder="HUAWEI Mate 10 荣耀V10 ">
			</div>
		</section>
		<section class="right">
			<a href="" class="icon-message" id="msg"></a>
			<router-link to="/login" class="login">登录</router-link>
		</section>
	</header>
	<!-- 优购码 -->
	<section class="yougou">
		<ul>
			<li>
				<a>
					<img src="../../static/images/top/1.png">
					<p>优购码</p>
				</a>
			</li>
			<li>
				<a>
					<img src="../../static/images/top/2.png">
					<p>优选配件</p>
				</a>
			</li>
			<li>
				<a>
					<img src="../../static/images/top/3.png">
					<p>会员领劵</p>
				</a>
			</li>
			<li>
				<a>
					<img src="../../static/images/top/4.png">
					<p>以旧换新</p>
				</a>
			</li>
			<li>
				<a>
					<img src="../../static/images/top/5.png">
					<p>数码特惠</p>
				</a>
			</li>
		</ul>
	</section>
	<!-- shops -->
	<section class="shops">
		<article class="box">
			<ul>
				<li>
					<div class="normal">
						<router-link to="/shops"><img src="../../static/images/top-shops/1.png"></router-link>
					</div>
				</li>
				<li class="l">
					<div class="normal">
						<a><img src="../../static/images/top-shops/2.png"></a>
					</div>
					<div class="normal bot">
						<a><img src="../../static/images/top-shops/3.png"></a>
					</div>
				</li>
			</ul>
			<ul class="t">
				<li>
					<div class="normal">
						<a><img src="../../static/images/top-shops/4.png"></a>
					</div>
				</li>
				<li class="l">
					<div class="normal">
						<a><img src="../../static/images/top-shops/5.png"></a>
					</div>
				</li>
			</ul>
			<ul class="t">
				<li>
					<div class="normal">
						<a><img src="../../static/images/top-shops/2.png"></a>
					</div>
				</li>
				<li class="l">
					<div class="normal">
						<a><img src="../../static/images/top-shops/3.png"></a>
					</div>
				</li>
			</ul>
		</article>
	</section>
	<!-- 热销商品 -->
	<section class="hot">
		<div class="b">
			<ul>
				<li>
					<a href="">
						<p><img src="../../static/images/hot-shops/1.png"></p>
						<p class="name">华为畅享7S </p>
						<p class="promotion">领券享优惠</p>
						<p class="price">￥1499</p>
					</a>
				</li>
				<li>
					<a href="">
						<i class="new">
							<img src="../../static/images/hot-shops/new.png">
						</i>
						<p><img src="../../static/images/hot-shops/2.png"></p>
						<p class="name">荣耀畅玩6A </p>
						<p class="promotion">下单立减200</p>
						<p class="price">￥999</p>
					</a>
				</li>
				<li class="last">
					<a href="">
						<p><img src="../../static/images/hot-shops/3.png"></p>
						<p class="name">HUAWEI P10</p>
						<p class="promotion">领券立减</p>
						<p class="price">￥3488</p>
					</a>
				</li>
			</ul>
		</div>
	</section>

	<!-- 超值精选 -->
	<section class="zhi">
		<div class="top">
			<h2>超值精选</h2>
		</div>
		<div class="content">
			<div class="shops swiper-container">
				<ul class="swiper-wrapper">
					<li class="swiper-slide">
						<a href="">
							<p class="img"><img src="../../static/images/hot-shops/1.png"></p>
							<p class="name">荣耀畅玩6 </p>
							<p class="promotion">柔光自拍</p>
							<p class="price">￥699</p>
						</a>
					</li>
					<li class="swiper-slide">
						<a href="">
							<p class="img"><img src="../../static/images/hot-shops/1.png"></p>
							<p class="name">荣耀畅玩6 </p>
							<p class="promotion">柔光自拍</p>
							<p class="price">￥699</p>
						</a>
					</li>
					<li class="swiper-slide">
						<a href="">
							<p class="img"><img src="../../static/images/hot-shops/1.png"></p>
							<p class="name">荣耀畅玩6 </p>
							<p class="promotion">柔光自拍</p>
							<p class="price">￥699</p>
						</a>
					</li>
					<li class="swiper-slide">
						<a href="">
							<p class="img"><img src="../../static/images/hot-shops/1.png"></p>
							<p class="name">荣耀畅玩6 </p>
							<p class="promotion">柔光自拍</p>
							<p class="price">￥699</p>
						</a>
					</li>
					<li class="swiper-slide">
						<a href="">
							<p class="img"><img src="../../static/images/hot-shops/1.png"></p>
							<p class="name">荣耀畅玩6 </p>
							<p class="promotion">柔光自拍</p>
							<p class="price">￥699</p>
						</a>
					</li>
					<li class="swiper-slide">
						<a href="">
							<p class="img"><img src="../../static/images/hot-shops/1.png"></p>
							<p class="name">荣耀畅玩6 </p>
							<p class="promotion">柔光自拍</p>
							<p class="price">￥699</p>
						</a>
					</li>
					<li class="swiper-slide">
						<a href="">
							<p class="img"><img src="../../static/images/hot-shops/1.png"></p>
							<p class="name">荣耀畅玩6 </p>
							<p class="promotion">柔光自拍</p>
							<p class="price">￥699</p>
						</a>
					</li>
					<li class="swiper-slide">
						<a href="">
							<p class="img"><img src="../../static/images/hot-shops/1.png"></p>
							<p class="name">荣耀畅玩6 </p>
							<p class="promotion">柔光自拍</p>
							<p class="price">￥699</p>
						</a>
					</li>
				</ul>
			</div>
		</div>	
	</section>

	<!-- 公告 -->
	<section class="notice">
		<div class="left">
			<a href="">
				<i class="notice-img"></i>
			</a>
		</div>
		<div class="more">
			<a href="">更多</a>
		</div>	
	</section>

	<!-- 华为专区 -->
	<section class="huawei">
		<ul>
			<li class="left"><a href=""><img src="../../static/images/huawei/1.jpg"></a></li>
			<li><a href=""><img src="../../static/images/huawei/2.jpg"></a></li>
		</ul>
	</section>

	<!-- 更多手机 -->
	<section class="more-phone">
		<div class="header">
			<h2>手机</h2>
			<a href="" class="more">更多</a>
		</div>	
		<div class="body">
			<ul>
				<li class="left">
					<a href="">
						<i class="new">
							<img src="../../static/images/hot-shops/new.png">
						</i>
						<p class="img"><img src="../../static/images/more-phone/1.jpg"></p>
						<p class="name">荣耀畅玩6A </p>
						<p class="special">最高优惠200元</p>
						<p class="price">￥999</p>
					</a>
				</li>
				<li class="right">
					<a href="">
						<p class="img"><img src="../../static/images/more-phone/2.jpg"></p>
						<p class="name">荣耀畅玩6A </p>
						<p class="special">最高优惠200元</p>
						<p class="price">￥999</p>
					</a>
				</li>
			</ul>
			<ul>
				<li class="left">
					<a href="">
						<p class="img"><img src="../../static/images/more-phone/3.jpg"></p>
						<p class="name">荣耀畅玩6A </p>
						<p class="special">最高优惠200元</p>
						<p class="price">￥999</p>
					</a>
				</li>
				<li class="right">
					<a href="">
						<p class="img"><img src="../../static/images/more-phone/4.jpg"></p>
						<p class="name">荣耀畅玩6A </p>
						<p class="special">最高优惠200元</p>
						<p class="price">￥999</p>
					</a>
				</li>
			</ul>
		</div>	
		<section class="zhi">
			<div class="content">
				<div class="shops swiper-container">
					<ul class="swiper-wrapper">
						<li class="swiper-slide">
							<a href="">
								<i class="new">
									<img src="../../static/images/more-phone/first.png">
								</i>
								<p class="img"><img src="../../static/images/hot-shops/1.png"></p>
								<p class="name">荣耀畅玩6 </p>
								<p class="promotion">柔光自拍</p>
								<p class="price">￥699</p>
							</a>
						</li>
						<li class="swiper-slide">
							<a href="">
								<p class="img"><img src="../../static/images/hot-shops/1.png"></p>
								<p class="name">荣耀畅玩6 </p>
								<p class="promotion">柔光自拍</p>
								<p class="price">￥699</p>
							</a>
						</li>
						<li class="swiper-slide">
							<a href="">
								<i class="new">
									<img src="../../static/images/hot-shops/new.png">
								</i>
								<p class="img"><img src="../../static/images/hot-shops/1.png"></p>
								<p class="name">荣耀畅玩6 </p>
								<p class="promotion">柔光自拍</p>
								<p class="price">￥699</p>
							</a>
						</li>
						<li class="swiper-slide">
							<a href="">
								<p class="img"><img src="../../static/images/hot-shops/1.png"></p>
								<p class="name">荣耀畅玩6 </p>
								<p class="promotion">柔光自拍</p>
								<p class="price">￥699</p>
							</a>
						</li>
						<li class="swiper-slide">
							<a href="">
								<p class="img"><img src="../../static/images/hot-shops/1.png"></p>
								<p class="name">荣耀畅玩6 </p>
								<p class="promotion">柔光自拍</p>
								<p class="price">￥699</p>
							</a>
						</li>
						<li class="swiper-slide">
							<a href="">
								<p class="img"><img src="../../static/images/hot-shops/1.png"></p>
								<p class="name">荣耀畅玩6 </p>
								<p class="promotion">柔光自拍</p>
								<p class="price">￥699</p>
							</a>
						</li>
						<li class="swiper-slide">
							<a href="">
								<p class="img"><img src="../../static/images/hot-shops/1.png"></p>
								<p class="name">荣耀畅玩6 </p>
								<p class="promotion">柔光自拍</p>
								<p class="price">￥699</p>
							</a>
						</li>
						<li class="swiper-slide">
							<a href="">
								<p class="img"><img src="../../static/images/hot-shops/1.png"></p>
								<p class="name">荣耀畅玩6 </p>
								<p class="promotion">柔光自拍</p>
								<p class="price">￥699</p>
							</a>
						</li>
					</ul>
				</div>
			</div>	
		</section>
	</section>

	<!-- 笔记本 -->
	<section class="book">
		<div class="header">
			<h2>笔记本</h2>
			<a href="" class="more">更多</a>
		</div>
		<div class="body">
			<ul>
				<li class="left">
					<a href="">
						<i class="new">
							<img src="../../static/images/book/mian.png">
						</i>
						<p class="img"><img src="../../static/images/book/1.jpg"></p>
						<p class="name">HUAWEI MateBook X </p>
						<p class="special">最高直降1000</p>
						<p class="price">￥5999</p>
					</a>
				</li>
				<li class="right">
					<a href="">
						<p class="img"><img src="../../static/images/book/2.jpg"></p>
						<p class="name">HUAWEI MateBook D </p>
						<p class="special">15.6英寸轻薄笔记本电脑</p>
						<p class="price">￥5188</p>
					</a>
				</li>
			</ul>
			<ul>
				<li class="left">
					<a href="">
						<i class="new">
							<img src="../../static/images/book/mian.png">
						</i>
						<p class="img"><img src="../../static/images/book/3.jpg"></p>
						<p class="name">HUAWEI MateBook E </p>
						<p class="special">尊享6期免息</p>
						<p class="price">￥6888</p>
					</a>
				</li>
				<li class="right">
					<a href="">
						<p class="img"><img src="../../static/images/book/4.jpg"></p>
						<p class="name">HUAWEI MateBook </p>
						<p class="special">二合一笔记本电脑</p>
						<p class="price">￥5388</p>
					</a>
				</li>
			</ul>
		</div>	
	</section>
	
	<!-- 精品平板 -->
	<section class="more-phone">
		<div class="header">
			<h2>精品平板</h2>
			<a href="" class="more">更多</a>
		</div>	
		<div class="body">
			<ul>
				<li class="left">
					<a href="">
						<i class="new">
							<img src="../../static/images/tablet/hot.png">
						</i>
						<p class="img"><img src="../../static/images/tablet/1.jpg"></p>
						<p class="name">荣耀WaterPlay  </p>
						<p class="special">防水影音平板</p>
						<p class="price">￥1999</p>
					</a>
				</li>
				<li class="right">
					<a href="">
						<p class="img"><img src="../../static/images/tablet/2.jpg"></p>
						<p class="name">华为平板 M3 </p>
						<p class="special">最高降200元</p>
						<p class="price">￥1888</p>
					</a>
				</li>
			</ul>
			<ul>
				<li class="left">
					<a href="">
						<i class="new">
							<img src="../../static/images/tablet/hot.png">
						</i>
						<p class="img"><img src="../../static/images/tablet/3.jpg"></p>
						<p class="name">荣耀畅玩平板2 9.6英寸 </p>
						<p class="special">9.6英寸护眼高清大屏</p>
						<p class="price">￥999</p>
					</a>
				</li>
				<li class="right">
					<a href="">
						<p class="img"><img src="../../static/images/tablet/4.jpg"></p>
						<p class="name">华为平板M3 青春版 8英寸 </p>
						<p class="special">EMUI5.1流畅体验</p>
						<p class="price">￥1399</p>
					</a>
				</li>
			</ul>
		</div>	
		<section class="zhi">
			<div class="content">
				<div class="shops swiper-container">
					<ul class="swiper-wrapper">
						<li class="swiper-slide">
							<a href="">
								<i class="new">
									<img src="../../static/images/more-phone/first.png">
								</i>
								<p class="img"><img src="../../static/images/tablet/5.jpg"></p>
								<p class="name">荣耀平板2 </p>
								<p class="promotion">八核芯片 3GB大内存</p>
								<p class="price">￥1299</p>
							</a>
						</li>
						<li class="swiper-slide">
							<a href="">
								<p class="img"><img src="../../static/images/tablet/5.jpg"></p>
								<p class="name">华为平板 M3 青春版 10.1英寸  </p>
								<p class="promotion">全高清清晰显示</p>
								<p class="price">￥2199</p>
							</a>
						</li>
						<li class="swiper-slide">
							<a href="">
								<i class="new">
									<img src="../../static/images/hot-shops/new.png">
								</i>
								<p class="img"><img src="../../static/images/tablet/6.jpg"></p>
								<p class="name">荣耀畅玩6 </p>
								<p class="promotion">柔光自拍</p>
								<p class="price">￥699</p>
							</a>
						</li>
						<li class="swiper-slide">
							<a href="">
								<p class="img"><img src="../../static/images/tablet/7.jpg"></p>
								<p class="name">荣耀畅玩6 </p>
								<p class="promotion">柔光自拍</p>
								<p class="price">￥699</p>
							</a>
						</li>
						<li class="swiper-slide">
							<a href="">
								<p class="img"><img src="../../static/images/hot-shops/1.png"></p>
								<p class="name">荣耀畅玩6 </p>
								<p class="promotion">柔光自拍</p>
								<p class="price">￥699</p>
							</a>
						</li>
						<li class="swiper-slide">
							<a href="">
								<p class="img"><img src="../../static/images/hot-shops/1.png"></p>
								<p class="name">荣耀畅玩6 </p>
								<p class="promotion">柔光自拍</p>
								<p class="price">￥699</p>
							</a>
						</li>
					</ul>
				</div>
			</div>	
		</section>
	</section>
	
	<!-- 智能家居 -->
	<section class="more-phone">
		<div class="header">
			<h2>智能家居</h2>
			<a href="" class="more">更多</a>
		</div>	
		<div class="photo">
			<a href=""><img src="../../static/images/home/1.jpg"></a>
		</div>	
		<div class="body">
			<ul>
				<li class="left">
					<a href="">
						<i class="new">
							<img src="../../static/images/home/new.png">
						</i>
						<p class="img"><img src="../../static/images/home/2.jpg"></p>
						<p class="name">荣耀WaterPlay  </p>
						<p class="special">防水影音平板</p>
						<p class="price">￥1999</p>
					</a>
				</li>
				<li class="right">
					<a href="">
						<i class="new">
							<img src="../../static/images/home/new.png">
						</i>
						<p class="img"><img src="../../static/images/home/3.jpg"></p>
						<p class="name">华为平板 M3 </p>
						<p class="special">最高降200元</p>
						<p class="price">￥1888</p>
					</a>
				</li>
			</ul>
			<ul>
				<li class="left">
					<a href="">
						<i class="new">
							<img src="../../static/images/home/new.png">
						</i>
						<p class="img"><img src="../../static/images/home/4.jpg"></p>
						<p class="name">荣耀畅玩平板2 9.6英寸 </p>
						<p class="special">9.6英寸护眼高清大屏</p>
						<p class="price">￥999</p>
					</a>
				</li>
				<li class="right">
					<a href="">
						<p class="img"><img src="../../static/images/home/5.jpg"></p>
						<p class="name">华为平板M3 青春版 8英寸 </p>
						<p class="special">EMUI5.1流畅体验</p>
						<p class="price">￥1399</p>
					</a>
				</li>
			</ul>
		</div>	
		<section class="zhi">
			<div class="content">
				<div class="shops swiper-container">
					<ul class="swiper-wrapper">
						<li class="swiper-slide">
							<a href="">
								<i class="new">
									<img src="../../static/images/tablet/hot.png">
								</i>
								<p class="img"><img src="../../static/images/tablet/5.jpg"></p>
								<p class="name">荣耀平板2 </p>
								<p class="promotion">八核芯片 3GB大内存</p>
								<p class="price">￥1299</p>
							</a>
						</li>
						<li class="swiper-slide">
							<a href="">
								<p class="img"><img src="../../static/images/tablet/5.jpg"></p>
								<p class="name">华为平板 M3 青春版 10.1英寸  </p>
								<p class="promotion">全高清清晰显示</p>
								<p class="price">￥2199</p>
							</a>
						</li>
						<li class="swiper-slide">
							<a href="">
								<i class="new">
									<img src="../../static/images/hot-shops/new.png">
								</i>
								<p class="img"><img src="../../static/images/tablet/6.jpg"></p>
								<p class="name">荣耀畅玩6 </p>
								<p class="promotion">柔光自拍</p>
								<p class="price">￥699</p>
							</a>
						</li>
						<li class="swiper-slide">
							<a href="">
								<p class="img"><img src="../../static/images/tablet/7.jpg"></p>
								<p class="name">荣耀畅玩6 </p>
								<p class="promotion">柔光自拍</p>
								<p class="price">￥699</p>
							</a>
						</li>
						<li class="swiper-slide">
							<a href="">
								<p class="img"><img src="../../static/images/hot-shops/1.png"></p>
								<p class="name">荣耀畅玩6 </p>
								<p class="promotion">柔光自拍</p>
								<p class="price">￥699</p>
							</a>
						</li>
						<li class="swiper-slide">
							<a href="">
								<p class="img"><img src="../../static/images/hot-shops/1.png"></p>
								<p class="name">荣耀畅玩6 </p>
								<p class="promotion">柔光自拍</p>
								<p class="price">￥699</p>
							</a>
						</li>
					</ul>
				</div>
			</div>	
		</section>
	</section>

	<!-- 底部内容 -->
	<copy></copy>
	<!-- 固定 -->
	<section class="fixed">
		<a href="javascript:" class="back"></a>
	</section>
	<!-- 底部导航 -->
	<footerNav></footerNav>

</div>
</template>

<script>
//引入底部导航 
import footerNav from '@/components/public/footerNav';
// 引入底部copy内容
import copy from '@/components/public/copy';

export default {
  name: 'index',
  data () {
    return {
    }
  },
  mounted(){
  	$('.fixed').on('click',function(){
  		$('html,body').animate({scrollTop:'0'},600)
  	}),

	$(window).scroll(function(){
	 	if($(this).scrollTop()>=10){
	 		$('#msg').addClass('icon-message-black');
	 		$('.top').removeClass('top-trans');
	 		$('.top').addClass('top-black');
	 		$('.login').css('color','#333');
	 	} else {
	 		$('#msg').removeClass('icon-message-black');
	 		$('.login').css('color','#fff');
	 		$('.top').removeClass('top-black');
	 		$('.top').addClass('top-trans');
	 	}
	})
	new Swiper('.lunbo', {
		loop: true,
		// 如果需要分页器
		pagination: {
			el: '.swiper-pagination',
		}
	}),
	new Swiper('.shops', {
		// 每个视图展示
		slidesPerView: 2.5,
		// loop: true,
		slidesPerGroup: 1,
	})
  },
  // 组件
  components: {
  	footerNav,
  	copy
  }
}
</script>
<style scoped lang="scss">
/*加载公共的样式*/
@import '../assets/css/base.scss';
a {
	display: inline-block;
}
.index {
	background: #eaeaea;
	padding-bottom: rem(100px);
}

/*轮播图*/
.swiper-slide img {
	width: 100%;
}
section ul {
	display: flex;
}
li {
	text-align: center;
}
.center {
	text-align: center;
	
}
.swiper-container {
	z-index: 0 !important;
}
/*顶部搜索*/
.top-black {
	background: #fff;
}
.top-trans {
	background-image: -webkit-gradient(linear, 0% 100%, 0% 0%, from(rgba(255, 255, 255, 0)), color-stop(0.7, rgba(152, 152, 152, 0.7)));
}
header.top {
	position: fixed;
	top: 0;
	width: 100%;
    height: rem(84px);
    z-index: 1;
	.search {
		display: flex;
		align-items: center;
		padding: 0 rem(175px) 0 rem(33px);
		height: rem(84px);
		.input {
			display: flex;
			width: 100%;
			height: rem(60px);
			background: url(../../static/images/search.png) no-repeat rem(28px) rem(12px);
			background-size: rem(36px);
			background-color: rgba(234,234,234,0.8);
			border-radius: rem(50px);
			input {
				font-size: rem(28px);
				border: none;
				background: none;
				padding: 0 rem(20px) 0 rem(80px);
			}
		}
	}
	.right {
		position: absolute;
	    right: 0;
	    top: 50%;
	    margin-top: rem(-26px);
		.icon-message {
			display: inline-block;
			width: rem(46px);
			height: rem(46px);
			background-size: rem(48px);
			margin-right: rem(18px);
			background: url(../../static/images/message.png) no-repeat rem(2px) rem(-2px);
			background-size: cover;
			z-index: 100;
		}
		.icon-message-black {
			background: url(../../static/images/message_black.png) no-repeat rem(2px) rem(-2px);
			background-size: cover;
		}
		a.login {
			position: relative;
			top: rem(-12px);
			text-decoration: none;
			font-size: rem(30px);
			margin-right: rem(20px);
			color: #fff;

		}
    }
}
/*优购码*/
.yougou ul::after {
	content: '';
	display: block;
	clear: both;
}
.yougou{
	padding: 0 rem(10px);
	background: #fff;	
	ul li {
		float: left;
		width: 20%;
		a {
			display: inline-block;
			padding: rem(20px);
			img {
				width: rem(60px);
			}
		}
		p {
			margin-top: rem(12px)
		}
	}
}
/*商品*/
.shops {
	margin-top: rem(12px);
	background-color: #fff;
	.box ul {
		display: flex;
		 li {
			width: 50%;
			flex: 1;
			.normal {
				font-size: 0;
				img {
					width: 100%;
				}
			}
		}
	}
}
.l {
	margin-left: rem(5px);
}
.bot {
	margin-top: rem(5px);
}
.t {
	margin-top: rem(5px);
}
/*热销商品*/
.hot {
	background-color: #fff;
	padding-top: rem(4px);
	.b ul {
		width: 100%;
		li {
			position: relative;
			width: 33%;
			background-color: #f6f6f6;
			margin-right: rem(5px);
			a {
				display: inline-block;
				padding: rem(28px) rem(16px) rem(18px) rem(16px);
				
				img {
					width: rem(150px);
				}
				.name {
					color: #000;
					padding: rem(20px) 0;
				}
				.promotion {
					color: #bbb;
					padding-bottom: rem(16px);
				}
				.price {
					font-size: rem(26px);
					color: #ca151e;
				}
			}
		}
		.last {
			margin-right: 0;
		}
	}
}

/*超值精选*/
.zhi {
	margin-top: rem(12px);
	background-color: #fff;
	.top {
		padding: 0 rem(34px);
		height: rem(73px);
		line-height: rem(73px);
		text-align: left;
		h2 {
			font-size: rem(28px);
			color: #222;
		}
	}
	.content {
		border-top: 1px solid #eaeaea;
		ul {
			li {
				width: 150px !important;
				border-right: 1px solid #eaeaea;
				a {
					display: inline-block;
					padding: rem(22px) rem(16px) rem(18px) rem(16px);
					.img {
						width: rem(162px);
						margin: 0 rem(50px);
						img {
							width: 100%;
							height: 100%;
						}
					}
					.name {
					color: #000;
					padding: rem(20px) 0;
					}
					.promotion {
						color: #bbb;
						padding-bottom: rem(16px);
					}
					.price {
						font-size: rem(26px);
						color: #ca151e;
					}
				}
			}
		}
	}
}

/*公告*/
.notice {
	position: relative;
	height: rem(84px);
	margin-top: rem(12px);
	background-color: #fff;
	.left {
		float: left;
		height: 100%;
		line-height: rem(84px);
		padding: 0 rem(22px) 0 rem(33px);
		.notice-img {
			display: inline-block;
			width: rem(62px);
			height: rem(26px);
			background: url(../../static/images/annoucement/1.png) no-repeat;
			background-size: cover;
		}
	}
	.more {
		position: absolute;
		right: rem(33px);
		top: 50%;
		a {
			color: #888;
			padding-right: rem(24px);
			background: url(../../static/images/annoucement/more.png) no-repeat rem(44px) rem(0px);
			background-size: rem(26px);
		}
	}
}

/*华为专区*/
.huawei {
	display: flex;
	width: 100%;
	margin-top: rem(4px);
	ul {
		width: 100%;
		li {
			width: 50%;
			img {
				width: 100%;
			}
		}
		.left {
			margin-right: rem(4px);
		}
	}
}

/*更多手机*/
.more-phone, .book{
	margin-top: rem(12px);
	background: #fff;
	.header {
		position: relative;
		padding: 0 rem(33px);
		text-align: left;
		height: rem(73px);
		line-height: rem(72px);
		h2 {
			display: inline;
		}
		.more {
			position: absolute;
			right: rem(34px);
			color: #888;
			padding-right: rem(24px);
			background: url(../../static/images/annoucement/more.png) no-repeat rem(44px) rem(20px);
			background-size: rem(26px);
		}
	}
} 

/*更多 手机*/
.more-phone,.book .body {
	ul {
		display: flex;
		width: 100%;
		.left {
			margin-right: rem(2px);
		}
		.right {
			margin-left: rem(2px);
		}
		li {
			position: relative;
			width: 50%;
			a {
				display: inline-block;
				padding-bottom: rem(20px);
			}
			img {
				width: 100%;
			}
			.name {
				color: #333;
				padding-top: rem(18px);
				font-size: rem(26px);
			}
			.special {
				color: #bbb;
				margin-top: rem(8px);
				font-size: rem(24px);
			}
			.price {
				color: #ca151e;
				font-size: rem(28px);
				margin-top: rem(8px);

			}
		}
	}
}

.new {
	position: absolute;
	left: 0;
	top: 0;

	img {
		width: rem(58px) !important;
		height: rem(58px);
	}
}

/*智能家居*/
.more-phone .photo a {
	display: inline-block;
	width: 100%;
	height: rem(208px);
	img {
		width: 100%;
	}
}

/*固定*/
.fixed {
	position: fixed;
	bottom: rem(112px);
	right: rem(20px);
	z-index: 1;
}
.fixed .back {
	display: inline-block;
	width: rem(82px);
	height: rem(82px);
	background: url(../../static/images/button-top.png) no-repeat;
	background-size: rem(80px);
}


</style>