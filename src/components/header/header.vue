<template lang="html">

	<header class="m-header">

		<div class="m-header-left">
			<slot name="left">
				<a href="#"></a>
			</slot>
		</div>

		<div class="m-header-title">
			<slot>
				<span v-text="title"></span>
			</slot>
		</div>

		<div class="m-header-right">
			<slot name="right"></slot>
		</div>

	</header>

</template>

<script>
export default {
	name: 'Header',
	props: {
		title: String,
		fixed: Boolean,
	}
}
</script>

<style lang="less">
@import '../../assets/style/minui.less';
.m-header {
    .bsbb;
	background: @success;
	display: flex;
	align-items: center;
	justify-content: space-around;
    font-size: 0.7rem;
    height: 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
	width: 100%;
	> div {
		color: @white;
		font-size: .7rem;
		height: 2rem;
		display: flex;
		align-items: center;
		overflow: hidden;
		span {
			.db;
			height: 2rem;
			line-height: 2rem;
			text-align: center;
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: nowrap;
			width: 100%;
		}
	}
	> div:first-child {
		padding-left: 2%;
		width: 25%;
	}
	> div:last-child {
		padding-right: 2%;
		width: 25%;
	}
	.m-header-title {
		flex: 1;
		justify-content: center;
	}
}

</style>
