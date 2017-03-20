<template>
    <section class="m-scrollView home">

        <m-grids-group :rows="4">
            <m-grids-item :link="'#/button'">
                <i slot="icon">&gt;</i>
                <span>Button</span>
            </m-grids-item>

            <m-grids-item :link="'#/grids'">
                <i slot="icon">&gt;</i>
                <span>Grids</span>
            </m-grids-item>

            <m-grids-item :link="'#/tabbar'">
                <i slot="icon">&gt;</i>
                <span>TabBar</span>
            </m-grids-item>

            <m-grids-item :link="'#/navbar'">
                <i slot="icon">&gt;</i>
                <span>NavBar</span>
            </m-grids-item>

            <m-grids-item>
                <i slot="icon">&gt;</i>
                <span>Button</span>
            </m-grids-item>

            <m-grids-item>
                <i slot="icon">&gt;</i>
                <span>Button</span>
            </m-grids-item>

            <m-grids-item>
                <i slot="icon">&gt;</i>
                <span>Button</span>
            </m-grids-item>
        </m-grids-group>

    </section>
</template>

<script>
import {mGridsGroup, mGridsItem} from '@/components/grids'
export default {
    name: 'Home',
    components: {
        mGridsGroup,
        mGridsItem
    },
    created() {
    }
}
</script>

<style lang="less">

</style>
