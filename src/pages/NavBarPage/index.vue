<template lang="html">
	<section class="m-flexView">

		<m-header :title="$route.meta.pageTitle">
			<a href="javascript:void(0)" @click="returnBack" slot="left">返回</a>
		</m-header>

		<section class="m-scrollView navbar">

			<div class="navbar-box">
				<div class="box-title"><span>NavBar</span></div>

				<m-nav-bar v-model="selected">
					<m-nav-item v-for="item in items" :key="item._id" :id="item._id">
						<i :class="['m-icon',item.icon]"></i>
						{{item.text}}
					</m-nav-item>
				</m-nav-bar>
				selected: {{selected}}
			</div>

		</section>

	</section>

</template>

<script>
import mHeader from '@/components/header'
import {mNavBar, mNavItem} from '@/components/navbar'
export default {
	name: 'Button',
	components: {
		mHeader,
		mNavBar,
		mNavItem
	},
	methods: {
        returnBack() {
            this.$router.back()
        }
    },
	created() {
		this.selected = this.items[0]._id
	},
	data() {
		return {
			items: [
				{icon: 'icon-lady',text:'我的',_id: Math.random().toString()},
				{icon: 'icon-lady',text:'我的',_id: Math.random().toString()},
				{icon: 'icon-lady',text:'我的',_id: Math.random().toString()},
				{icon: 'icon-lady',text:'我的',_id: Math.random().toString()}
			],
			selected: '',
		}
	}
}
</script>

<style lang="less">

</style>
