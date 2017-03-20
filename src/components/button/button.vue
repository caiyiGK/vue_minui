<template>

    <button
        class="m-button"
        :class="['btn-' + (disabled ? 'disabled' :type), {'btn-lighten': lighten}]">

        <span class="m-button-icon" v-if="icon || $slots.icon">
            <slot name="icon">
                <i v-if="icon" class="m-icon" :class="'icon-' + icon"></i>
            </slot>
        </span>

        <label class="m-button-text">
            <slot></slot>
        </label>

    </button>

</template>

<script>
export default {
    name: 'm-button',
    props: {
        icon: String,
        text: String,
        lighten: Boolean,
        disabled: Boolean,
        type: {
            type: String,
            defaut: 'normal',
            validator (value) {
                return [
                    'normal',
                    'default',
                    'success',
                    'warning',
                    'danger',
                    'disabled',
                ].indexOf(value) > -1;
            }
        }
    }
}
</script>

<style lang="less">
@import '../../assets/style/minui.less';
.m-button {
    .bsbb;
    .db;
    border: none;
    text-align: center;
    background: none;
    border-radius: .2rem;
    height: 2rem;
    width: 100%;

    .m-button-icon {
        margin-right: .2rem;
    }

    &.btn-default {
        .btn-color(@gray);
    }
    &.btn-success {
        .btn-color(@success);
    }
    &.btn-danger {
        .btn-color(@danger);
    }
    &.btn-warning {
        .btn-color(@warning);
    }
    &.btn-normal {
        background: @white;
        color: @gray;
        border: 1px solid lighten(@gray,60%);
        &:active {
            background: lighten(@gray,70%);
        }
    }
    &.btn-disabled {
        .btn-color(lighten(@gray,50%),false);
    }

    .m-button-text {
        display: inline;
        font-size: .7rem;
    }

}

</style>
