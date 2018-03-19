<template>
	<div class="vip">
		<router-view/>
		<h1>{{msg}}</h1>
	</div>
</template>
<script >
export default {
	name:'vip',
	data(){
		return {
			msg:'我的会员',

		}
	}
}
</script>

<style scoped lang="scss">

@import '../../assets/css/base.scss'

</style>