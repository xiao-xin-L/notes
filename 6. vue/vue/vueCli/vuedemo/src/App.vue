<template>
    <div id="app">
        <HelloWorld></HelloWorld>
    </div>
</template>

<script>
    import HelloWorld from "./components/HelloWorld";
    import axios from "axios";
    export default {
        name: 'App',
        data(){
            return {
                msg: ""
            }
        },
        components: {
            HelloWorld
        },
        
    }
</script>

<style scoped>

</style>
