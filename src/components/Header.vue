<template>
    <header class="header">
        <div class="first-row"><h1>BitcoinApp</h1></div>
        <div class="second-row">
            <nav>
                <router-link class="header__link" to="/">Main</router-link>|
                <router-link class="header__link" to="/settings">Settings</router-link>
            </nav>
        </div>
    </header>
</template>

<script>
    export default {};
</script>

<style lang="scss" scoped>
    .header {
        min-height: 60px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .header__link {
            padding: 0px 5px;
        }
    }
</style>
