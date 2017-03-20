<template lang="html">

	<div
		class="m-grids clearfix"
		:class="['m-grids-' + rows]">
		<slot></slot>
	</div>

</template>

<script>
export default {
	name: 'GridsGroup',
	props: {
		rows: {
			type: [Number,String],
			default: 1
		}
	}
}
</script>

<style lang="less">
.grids-item(@number) {
	.m-grids-item{
		width: @number;
	}
}
.m-grids {
	overflow: hidden;
	position: relative;
	&:before {
		position: absolute;
		content: '';
		display: block;
		bottom: 0;
		left: 0;
		height: 1px;
		width: 100%;
		border-bottom: 1px solid #b2b2b2;
		transform: scaleY(.5);
		transform-origin: 0;
		z-index: 1;
	}
	&.m-grids-1 {
		.grids-item(100%);
	}
	&.m-grids-2 {
		.grids-item(50%)
	}
	&.m-grids-3 {
		.grids-item(33.3333%)
	}
	&.m-grids-4 {
		.grids-item(25%)
	}
	&.m-grids-5 {
		.grids-item(20%)
	}
}
</style>
