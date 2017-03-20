<template lang="html">
	<section class="m-flexView">

		<m-header :title="$route.meta.pageTitle">
			<a href="javascript:void(0)" @click="returnBack" slot="left">返回</a>
		</m-header>

		<section class="m-scrollView grids">

			<div class="grids-box">
				<m-grids-group :rows="2">
					<div class="box-title"><span>等分2列</span></div>
					<m-grids-item>
						<i slot="icon">&gt;</i>
						<span>grids-2</span>
					</m-grids-item>
					<m-grids-item>
						<i slot="icon">&gt;</i>
						<span>grids-2</span>
					</m-grids-item>
				</m-grids-group>
			</div>

			<div class="grids-box">
				<m-grids-group :rows="3">
					<div class="box-title"><span>等分3列</span></div>
					<m-grids-item :text="'grids-3'"/>
					<m-grids-item :text="'grids-3'"/>
					<m-grids-item :text="'grids-3'"/>
					<m-grids-item :text="'grids-3'"/>
					<m-grids-item :text="'grids-3'"/>
					<m-grids-item :text="'grids-3'"/>
				</m-grids-group>
			</div>

			<div class="grids-box">
				<m-grids-group :rows="4">
					<div class="box-title"><span>等分4列</span></div>
					<m-grids-item :text="'grids-4'"/>
					<m-grids-item :text="'grids-4'"/>
					<m-grids-item :text="'grids-4'"/>
					<m-grids-item :text="'grids-4'"/>
					<m-grids-item :text="'grids-4'"/>
					<m-grids-item :text="'grids-4'"/>
					<m-grids-item :text="'grids-4'"/>
					<m-grids-item :text="'grids-4'"/>
				</m-grids-group>
			</div>

			<div class="grids-box">
				<m-grids-group :rows="5">
					<div class="box-title"><span>等分5列</span></div>
					<m-grids-item :text="'grids-5'"/>
					<m-grids-item :text="'grids-5'"/>
					<m-grids-item :text="'grids-5'"/>
					<m-grids-item :text="'grids-5'"/>
					<m-grids-item :text="'grids-5'"/>
				</m-grids-group>
			</div>

		</section>

	</section>

</template>

<script>
import mHeader from '@/components/header'
import {mGridsGroup, mGridsItem} from '@/components/grids'
export default {
	name: 'Button',
	components: {mHeader,mGridsGroup,mGridsItem},
	methods: {
        returnBack() {
            this.$router.back()
        }
    },
}
</script>

<style scoped lang="less">
.grids-box {
	padding: .4rem 0;

}
.box-title {
	margin-bottom: 0 !important;
	padding: 0 .4rem;
	span {
		font-size: .6rem;
		color: #666;
	}
}
</style>
