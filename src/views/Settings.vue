<template>
    <div class="settings">
        <div class="first-row">
            <h2 class="settings__title">Выберите сравниваемые валюты:</h2>
            <select class="settings__select" v-model="selected" @change="changeSymbol">
                <option
                        class="select__option"
                        v-for="option in options"
                        v-bind:value="option.value"
                        v-bind:key="option.value"
                >{{ option.text }}</option>
            </select>
        </div>
        <div class="second-row">
            <h3 class="changelog__title">Ваш выбор:</h3>
            <ul class="changelog-list">
                <li
                        class="changelog-list__item"
                        v-for="(log, index) in changelog"
                        v-bind:key="index">{{log}}
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                selected: '',
                options: [
                    { text: 'BTC / USDT', value: 'btcusdt' },
                    { text: 'BNB / BTC', value: 'bnbbtc' },
                    { text: 'ETH / BTC', value: 'ethbtc' },
                ],
            };
        },
        created() {
            this.selected = this.$bus.currentSymbol;
        },
        computed: {
            changelog() {
                return this.$bus.changelog;
            },
        },
        methods: {
            changeSymbol() {
                this.$bus.currentSymbol = this.selected;
                this.$bus.addChangelog(this.selected);
            },
        },
    };
</script>

<style lang="scss">
    .settings {
        display: flex;
        flex-direction: column;
        .first-row {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
            min-height: 80px;
            .settings__title {
                font-size: 20px;
            }
            .settings__select {
                min-height: 30px;
                .select__option {
                    min-height: 30px;
                }
            }
        }
        .second-row {
            display: flex;
            flex-direction: column;
            .changelog__title {
                font-size: 16px;
                padding: 10px 0;
            }
            .changelog-list__item {
                list-style-type: none;
                font-size: 14px;
            }
        }
    }
</style>
