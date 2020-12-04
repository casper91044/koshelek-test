<template>
    <div class="home">
        <div class="first-row">
            <h2>{{name}}</h2>
        </div>
        <div class="second-row">
            <div class="home__list">
                <ItemsList listName="Bid" v-bind:items="bid"/>
            </div>
            <div class="home__list">
                <ItemsList listName="Ask" v-bind:items="ask"/>
            </div>
        </div>
    </div>
</template>

<script>
    import ItemsList from '@/components/ItemsList.vue';

    export default {
        data() {
            return {
                bid: [],
                ask: [],
            };
        },
        components: {
            ItemsList,
        },
        created() {
            this.$ws(this.activeSymb).onmessage = (event) => {
                const data = JSON.parse(event.data);
                this.bid = data.b;
                this.ask = data.a;
            };
        },
        computed: {
            activeSymb() {
                return this.$bus.currentSymbol;
            },
            name() {
                if (this.activeSymb === 'btcusdt') {
                    return 'Bitcoin to Tether';
                } if (this.activeSymb === 'bnbbtc') {
                    return 'Binance Coin to Bitcoin';
                }
                return 'Ethereum to Bitcoin';
            },
        },
    };
</script>

<style lang="scss" scoped>
    .home {
        width: 100%;
        display: flex;
        flex-direction: column;
        .first-row {
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 40px;
        }
        .second-row {
            display: flex;
            .home__list {
                width: 50%;
            }
        }
    }
</style>
