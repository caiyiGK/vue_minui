<template lang="html">

	<a class="m-navbar-item"
	   :class="{ 'is-selected': $parent.value === id }"
	   @click="$parent.$emit('input', id)">
		<slot name="icon" class="icon"></slot>
		<slot></slot>
	</a>

</template>

<script>
export default {
	name: 'NavItem',
	props: ['id']
}
</script>

<style lang="less">
@import '../../assets/style/minui.less';
.m-navbar-item {
	display: flex;
	flex-direction: column;
	flex-grow: 1;
	justify-content: center;
	align-items: center;
	font-size: .4rem;
	color: lighten(@gray, 20%);
	i {
		height: 1.05rem;
		width: 1.05rem;
		margin-bottom: 0.1rem;
	}
	&.is-selected {
		color: @success;
	}
}
</style>
