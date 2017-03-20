<template lang="html">
	<section class="m-flexView">

		<m-header :title="$route.meta.pageTitle" fixed>
			<a href="javascript:void(0)" @click="returnBack" slot="left">返回</a>
		</m-header>

		<section class="m-scrollView button">

			<div class="button-box">
				<div class="box-title"><span>Button</span></div>
				<m-button type="normal" class="button-box-item">提交</m-button>
				<m-button type="default" class="button-box-item">Default</m-button>
			    <m-button type="success" class="button-box-item">Success</m-button>
			    <m-button type="warning" class="button-box-item">Warning</m-button>
			    <m-button type="danger" class="button-box-item">Danger</m-button>
				<m-button type="disabled" class="button-box-item">Disabled</m-button>

				<div class="box-title"><span>Button lighten</span></div>
				<m-button type="default" lighten class="button-box-item">Default</m-button>
			    <m-button type="success" lighten class="button-box-item">Success</m-button>
			    <m-button type="warning" lighten class="button-box-item">Warning</m-button>
			    <m-button type="danger" lighten class="button-box-item">Danger</m-button>
				<m-button type="disabled" lighten class="button-box-item">Disabled</m-button>

				<div class="box-title"><span>Button disabled</span></div>
				<m-button type="default" disabled class="button-box-item">Default</m-button>
			</div>

		</section>

	</section>

</template>

<script>
import mHeader from '@/components/header'
import mButton from '@/components/button'
export default {
	name: 'Button',
	components: {mHeader,mButton},
	methods: {
        returnBack() {
            this.$router.back()
        }
    },
}
</script>

<style lang="less">

.button-box {
	background: #FFF;
	box-sizing: border-box;
	padding: .4rem;
	width: 100%;
	.button-box-item {
		margin-bottom: .8rem;
	}
}
</style>
