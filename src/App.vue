<template>
    <div class="app">
        <div class="container">
            <Header />
            <router-view/>
        </div>
    </div>
</template>

<script>
    import Header from '@/components/Header.vue';

    export default {
        components: {
            Header,
        },
    };
</script>

<style lang="scss">
    @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
    .app {
        * {
            padding: 0;
            margin: 0;
        }
        font-family: 'Roboto', sans-serif;
        .container {
            margin: auto;
            @media only screen and (max-width: 600px) {
                max-width: none;
            }
            @media only screen and (min-width: 600px) {
                max-width: 640px;
            }
            @media only screen and (min-width: 768px) {
                max-width: 740px;
            }
            @media only screen and (min-width: 992px) {
                max-width: 940px;
            }
            @media only screen and (min-width: 1200px) {
                max-width: 1180px;
            }
        }
    }
</style>
