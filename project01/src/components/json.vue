<template>
<div class="reg">
	<ul>
		<li><a href=""><img src="../../static/images/lunbo/1.png"></a></li>
		<li><a href=""><img src="../../static/images/lunbo/2.png"></a></li>
		<li><a href=""><img src="../../static/images/lunbo/3.jpg"></a></li>
		<li><a href=""><img src="../../static/images/lunbo/4.png"></a></li>
		<li><a href=""><img src="../../static/images/lunbo/5.png"></a></li>
		<li><a href=""><img src="../../static/images/lunbo/6.jpg"></a></li>
		<li><a href=""><img src="../../static/images/lunbo/7.png"></a></li>
	</ul>
	<ul>
		<li v-for="shop in desk">
			<a :href="shop.url"><img :src="shop.img"></a>
			<span>{{shop.name}}</span>
		</li>
	</ul>
</div>
</template>

<script >
export default {
	name:'me',
	data(){
		return {
			desk: []
		}
	},
	mounted() {
		var that= this;
		var bool = true;

		$(window).scroll(function(){
			var pageHeight = document.documentElement.scrollHeight;
		    var scrollHeight = document.documentElement.scrollTop || document.body.scrollTop;
		    var clientHeight = document.documentElement.clientHeight;

		    if (pageHeight - scrollHeight - clientHeight <= 300) {
		    	if(bool){
			    	bool = false;
					axios.get('../../static/json/1.json').then(function(msg){
						console.log(msg.data);
						for(var i = 0; i< msg.data.length; i++){
							that.desk.push(msg.data[i])
						}
						bool =true;
					}).catch(function(err){
						console.log(err);
					})
		    	}
			}
		})
	}
}
</script>
<style scoped lang="scss">
/*公共样式*/
@import '../assets/css/base.scss';
.reg {
	height: 3000px;
}
ul {
	width: 100%;
	li {
		float: left;
		width: 30%;
		height: 300px;
		border: 1px solid red;
		a {
			display: inline-block;
			width: 100%;
			height: 100%;
			img {
				width: 100%;
				height: 100%;
			}
		}
	}
}
</style>
