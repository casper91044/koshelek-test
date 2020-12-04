<template>
    <li class="list-item">
        <div class="col item__amount">{{this.roundUp(item[0], 2)}}</div>
        <div class="col item__price">{{this.roundUp(item[1], 6)}}</div>
        <div class="col item__total">{{this.roundUp((item[0] * item[1]), 2)}}</div>
    </li>
</template>

<script>
    export default {
        computed: {
            showTotal() {
                return window.innerWidth >= 640;

            },
        },
        methods: {
            roundUp(n, fixCount) {
                return parseFloat(n).toFixed(fixCount);
            },
        },
        props: ['item'],
    };
</script>

<style lang="scss" scoped>
    .list-item {
        width: 100%;
        list-style-type: none;
        display: flex;
        font-size: 14px;
        .col {
            width: 33.33%;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        @media only screen and (max-width: 600px) {
            .col {
                width: 50%;
            }
            .item__total {
                display: none;
            }
        }
    }
</style>
