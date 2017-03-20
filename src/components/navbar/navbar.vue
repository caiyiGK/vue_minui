<template lang="html">

	<div class="m-navbar">
		<div class="m-navbar-content">
			<slot></slot>
		</div>
	</div>

</template>

<script>
export default {
	name: 'NavBar',
	props: {
		value: '',
	},
	watch: {
		'value'() {
			console.log('value',this.value)
		}
	}
}
</script>

<style lang="less">
.m-navbar {
	position: fixed;
	left: 0;
	bottom: 0;
	width: 100%;
	.m-navbar-content {
		position: relative;
		box-sizing: border-box;
		display: flex;
		justify-content: space-around;
		padding: .1rem 0;
		height: 2.2rem;
		font-size: .5rem;
		width: 100%;
		&:before {
			display: block;
		    content: '';
		    position: absolute;
			left: 0;
			top: 0;
		    border-top: 1px solid lighten(#333, 60%);
		    width: 100%;
		    transform: scaleY(0.5);
		    transform-origin: 0 0;
		}
	}
}
</style>
