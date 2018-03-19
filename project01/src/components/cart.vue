<template>
	<div class="cart">
		<!-- 标题 -->
		<article>
			<header><h1>购物车</h1></header>
			<section class="compile">
				<a href=""><span>编辑</span></a>
			</section>
		</article>
		<!-- 商品 -->
		<div class="shops_box">
			<form>
				<section class="shops">
					<div class="shops_content">
						<!-- 商品 -->
						<section class="shops_item" v-for="shop in shops">
								<div class="content">
									<div class="item_box">
										<label><input type="checkbox" class="checkbox" v-model="checkArr" :value="shop.name" @change="check"></label>
										<div class="r">
											<a href="">
												<p class="img"><img :src="shop.img"></p>
												<p class="name"><span>{{shop.name}}</span></p>
											</a>
											<p class="pri">￥<em>{{shop.price}}</em></p>
											<p class="num">x<em>{{shop.num}}</em></p>
										</div>
									</div>
								</div>
						</section>
					</div>
				</section>
			</form>
		</div>
		<!-- 总价格 -->
		<section class="total">
			<section class="all">
				<!-- 全选 -->
				<label>
					<input type="checkbox" @change="change" v-model="all">
					<span class="all_text">全选</span>
				</label>
				<!-- 结算 -->
				<div class="account">
					<router-link to="/login"><span>结算<em>{{total.num}}</em></span></router-link>
				</div>
				<!-- 总计 -->
				<div class="tot">总计:<span>￥<em>{{total.price}}</em></span></div>
			</section>
		</section>
		<footerNav></footerNav>
	</div>
</template>
<script >
//引入底部导航 
import footerNav from '@/components/public/footerNav';
export default {
	name:'cart',
	data(){
		return {
			msg:'购物车的组件',
			shops: [
				{"img":"../../static/images/cart/1.jpg","name":"三思智能彩色球泡灯（支持HUAWEI HiLink）","price":"99","num":"1"},
				{"img":"../../static/images/cart/2.jpg","name":"小狗小型家用紫外线除螨仪D-609","price":"399","num":"1"},
				{"img":"../../static/images/cart/3.jpg","name":"绿联 Type-C转HDMI连接线（白色）","price":"108","num":"1"},
				{"img":"../../static/images/cart/4.jpg","name":"HUAWEI Mate 10 手机导航套件（棕色）","price":"159","num":"1"},
			],
			checkArr: [],
			all: false
		}
	},
	methods: {
		change: function(){
			if(this.all == true){
				// 如果为真，将所有的商品的name推入到数组中
				for(var i= 0; i< this.shops.length; i++){
					this.checkArr.push(this.shops[i].name)
				}
			}else {
				this.checkArr= [];
			}
		},
		// 当选中某一个按钮的时候，判断是否全选和全不选，改变all的状态
		check: function(){
			if(this.checkArr.length == this.shops.length){
				this.all = true;
			}else {
				this.all = false;
			}
		}
	},
	components: {
		footerNav
	},
	// 计算属性
	computed: {
		 total: function() {
            // 初始化总价格为0，总数量为0
            var sum = {
                price: 0,
                num: 0
            };
            // 计算总价格(所有商品的单价*数量累加求和)
            for (var i = 0; i < this.shops.length; i++) {
                // if (如果用户选中该商品) {
                if (this.checkArr.indexOf(this.shops[i].name) >= 0) {
                    // 每件商品的小计价格
                    sum.price += this.shops[i].price * this.shops[i].num;
                    // 商品的总数量
                    sum.num += Number(this.shops[i].num);
                }
            }
            // 返回计算结果，将sum的值返回给total了，后面的所有的调用都要通过total执行
            return sum;
        }
	}
}
</script>
<style scoped lang="scss">
@import '../assets/css/base.scss';
.total {
	position: fixed;
	bottom: 0;
	width: 100%;
	margin-bottom: rem(100px);
	background: #fff;
	border-bottom: 1px solid #eee;
	.all::before {
		content:'';
		display: table;
	};
	label {
		position: absolute;
		top: 40%;
		left: rem(34px);
		input {
			vertical-align: middle;
		}
	}
	/*总计*/
	.tot {
		float: right;
		min-height: rem(94px);
		line-height: rem(94px);
		span {
			color: #ca151e;
			font-size: rem(30px);
		}
	}
	/*结算*/
	.account {
		float: right;
		padding-left: rem(20px);
		a {
			display: inline-block;
			width: rem(150px);
			height: rem(94px);
			line-height: rem(94px);
			text-align: center;
			color: #fff;
			font-size: rem(28px);
			background: #ca151e;
			padding: 0 rem(20px);
		}
	}
}
.pri {
	position: absolute;
	top: rem(108px);
	left: rem(160px);
	color: #ca151e;
}
.num {
	position: absolute;
	right: 0;
	bottom: rem(8px);
	color: #888;
}


.checkbox {
	width: rem(36px);
	height: rem(36px);
	padding: rem(30px) rem(12px) rem(30px) 0;
}
.shops_item {
	background: #fff;
	margin-bottom: rem(12px);
	.content {
		padding: 0 rem(34px);
	}
	.item_box {
		position: relative;
		margin-left: rem(62px);
		padding: rem(20px) 0;
		label {
			position: absolute;
    		left: rem(-68px);
    		top: rem(62px);
		}
		.r {
			position: relative;
			height: rem(146px);
			p.name {
				display: -webkit-box;
				padding-left: rem(20px);
				line-height: rem(34px);
				span {
					font-size: rem(25px);
					word-break: break-all;
					color: #333;
				}
			}
			p.img {
				float: left;
				width: rem(146px);
				height: rem(146px);
				img {
					width: 100%;
					height: 100%;
				}
			}
		}
	}
}
.cart {
	height: 100%;
	line-height: 1;
	background: #eaeaea;
	font-family: Arial,Helvetica,sans-serif,'Lucida Grande',Verdana;
}
/*标题*/
article {
	position: relative;
	background: #fff;
	border: 1px solid #e5e5e5;
	header h1 {
		display: block;
	    width: 45%;
	    margin-left: rem(34px);
	    height: rem(100px);
	    line-height: rem(100px);
	    vertical-align: middle;
	    font-size: rem(30px);
	    color: #333;
	    text-overflow: ellipsis;
	    white-space: nowrap;
	    overflow: hidden;
	}
	.compile {
		position: absolute;
	    right: 0;
	    top: 36%;
	    padding-right: rem(25px);
	    font-size: rem(30px);
	    a {
	    	padding: 0 rem(12px);
	    	color: #333;
	    }

	}
}

</style>