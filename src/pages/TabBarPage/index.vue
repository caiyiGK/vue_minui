<template lang="html">
	<section class="m-flexView">

		<m-header :title="$route.meta.pageTitle">
			<a href="javascript:void(0)" @click="returnBack" slot="left">返回</a>
		</m-header>

		<section class="m-scrollView tabbar">

			

		</section>

	</section>

</template>

<script>
import mHeader from '@/components/header'
import {mTabBar, mTabItem} from '@/components/tabbar'
export default {
	name: 'Button',
	components: {
		mHeader,
		mTabBar,
		mTabItem
	},
	methods: {
        returnBack() {
            this.$router.back()
        }
    },
}
</script>

<style scoped lang="less">

</style>
