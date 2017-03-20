<template lang="html">

	<a :href="link"
		class="m-grids-item">
		<div class="m-grids-icon" v-if="$slots.icon">
			<slot name="icon"></slot>
		</div>
		<div class="m-grids-text">
			<slot>
				{{text}}
			</slot>
		</div>
	</a>

</template>

<script>
export default {
	name: 'GridsItem',
	props: {
		text: String,
		link: {
			type: String,
			default: 'javascript:void(0)'
		},
	}
}
</script>

<style lang="less">
.m-grids-item {
	box-sizing: border-box;
	padding: 0.8rem 0;
	font-size: 0.7rem;
	position: relative;
	float: left;
	&:before,
	&:after {
		content: '';
		position: absolute;
	}
	&:not(:nth-child(4n)):before {
		top: 0;
		right: 0;
		height: 100%;
		border-right: 1px solid #d9d9d9;
		transform: scaleX(.5);
		transform-origin: 0;
	}
	&:after {
		bottom: 0;
		left: 0;
		width: 100%;
		border-bottom: 1px solid #d9d9d9;
		transform: scaleY(.5);
		transform-origin: 0 0;
	}
	.m-grids-icon {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 1.2rem;
	}
	.m-grids-text {
		color: #333;
		word-wrap: normal;
		text-overflow: ellipsis;
		white-space: nowrap;
		text-align: center;
		padding: 0 0.2rem;
		overflow: hidden;
	}
}
</style>
