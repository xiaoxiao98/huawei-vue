<template>
	<div class="join">
		<router-view/>
		<h1>{{msg}}</h1>
	</div>
</template>
<script >
export default {
	name:'join',
	data(){
		return {
			msg:'加入我们',

		}
	}
}
</script>

<style scoped lang="scss">

@import '../../assets/css/base.scss';
h1 {
	font-size: rem(50px)
}
</style>