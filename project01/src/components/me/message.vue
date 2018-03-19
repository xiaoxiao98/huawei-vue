<template>
	<div class="message">
		<router-view/>
		<h1>{{msg}}</h1>
	</div>
</template>
<script >
export default {
	name:'message',
	data(){
		return {
			msg:'我的资料',

		}
	}
}
</script>

<style scoped lang="scss">

@import '../../assets/css/base.scss'

</style>