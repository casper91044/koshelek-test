export default {
    install(Vue) {
        Vue.prototype.$ws = (symbol) => new WebSocket(`wss://stream.binance.com:9443/ws/${symbol}@depth`);
        Vue.prototype.$bus = {
            currentSymbol: 'btcusdt',
            changelog: [],
            addChangelog(change) {
                this.changelog.push(change);
            },
        };
    },
};
