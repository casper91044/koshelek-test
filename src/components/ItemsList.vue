<template>
    <div class="item-list">
        <div class="first-row">
            <h3 class="item-list__name">{{listName}}</h3>
        </div>
        <div class="second-row">
            <ul class="item-list__subnames-list">
                <li class="subnames-list__item">Amount</li>
                <li class="subnames-list__item">Price</li>
                <li class="subnames-list__item item__total">Total</li>
            </ul>
        </div>
        <div class="third-row">
            <ul class="item-list__list">
                <Item v-for="(item, index) in items" v-bind:key="index" v-bind:item="item" />
            </ul>
        </div>
    </div>
</template>

<script>
    import Item from '@/components/Item.vue';

    export default {
        components: {
            Item,
        },
        props: ['listName', 'items'],
    };
</script>

<style lang="scss" scoped>
    .item-list {
        width: 100%;
        .first-row {
            width: 100%;
            min-height: 40px;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .second-row {
            width: 100%;
            .item-list__subnames-list {
                width: 100%;
                min-height: 30px;
                display: flex;
                justify-content: space-between;
                .subnames-list__item {
                    width: 33.33%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
                @media only screen and (max-width: 600px) {
                    .subnames-list__item {
                        width: 50%;
                    }
                    .item__total {
                        display: none;
                    }
                }
            }
        }
        .third-row {
            width: 100%;
            max-height: 75vh;
            overflow: hidden;
        }
        .third-row:hover {
            overflow: auto;
        }
    }
</style>
